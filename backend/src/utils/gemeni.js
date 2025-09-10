import { GoogleGenAI } from "@google/genai";

async function geminiAI(content) {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyDA_sVfamtImuKDtg1z1sM6pFpl8Fv8YJs",
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents: content,
  });
  console.log(response.text);
  return response.text;
}

export default geminiAI;
