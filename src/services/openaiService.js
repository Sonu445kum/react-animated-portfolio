import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Your backend base URL
});

// Send message to AI backend
export const askAI = async (message) => {
  try {
    const response = await api.post("/ai", {
      message,
    });

    return response.data.reply;
  } catch (error) {
    console.error("AI Service Error:", error);
    return "Something went wrong. Please try again.";
  }
};