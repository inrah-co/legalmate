const { GoogleGenAI } = require("@google/genai");

module.exports = async function geminiAI(content) {
  try {
    console.log("Content sent to Gemini AI:", content);

    const ai = new GoogleGenAI({
      apiKey: "AIzaSyDA_sVfamtImuKDtg1z1sM6pFpl8Fv8YJs",
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: content,
    });
    console.log(response.text);
    return response.text;
  } catch (error) {
    console.error("Error occurred while communicating with Gemini AI:", error);
    throw new Error("Gemini AI request failed");
  }
};
