import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Alex Dev's personal portfolio website. 
Alex is a Senior WordPress Developer and Web Designer specializing in Elementor.

Your goal is to answer visitor questions about Alex's skills, services, and experience.
Be professional, concise, and enthusiastic.

Key Info about Alex:
- Skills: WordPress, Elementor Pro, React, PHP, CSS/Tailwind, UI/UX Design.
- Services: Custom Theme Dev, Speed Optimization, WooCommerce, SEO.
- Experience: 5+ years building professional websites.
- Tone: Professional but friendly.

If asked to build a website, ask them for a few details (type of site, budget, timeline) to pass on to Alex.
If asked about pricing, say "It depends on the project scope, but feel free to leave a message in the contact form!"
`;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found. AI features may not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async () => {
  const ai = getAiClient();
  if (!ai) return null;

  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<AsyncGenerator<string, void, unknown>> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    // Fallback generator if init fails
    return (async function* () {
      yield "I'm currently offline (API Key missing or error). Please try the contact form!";
    })();
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    // Create a generator that yields text chunks
    return (async function* () {
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    })();
    
  } catch (error) {
    console.error("Error sending message:", error);
    return (async function* () {
      yield "Sorry, I encountered an error connecting to the AI brain. Please try again later.";
    })();
  }
};