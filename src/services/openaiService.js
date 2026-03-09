import axios from "axios";

// Create reusable API instance
const api = axios.create({
baseURL: "/api",
headers: {
"Content-Type": "application/json",
},
});

// Send message to AI backend
export const askAI = async (message, history = []) => {
try {
const response = await api.post("/ai", {
message,
history, // optional chat history for better AI context
});

```
return response.data.reply;
```

} catch (error) {
console.error("AI Service Error:", error);

```
return "⚠️ AI assistant is temporarily unavailable. Please try again.";
```

}
};
