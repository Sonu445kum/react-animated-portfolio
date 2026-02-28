import { useEffect } from "react";

export const useVoice = (onResult) => {
  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      onResult(event.results[0][0].transcript);
    };

    recognition.start();
  }, []);
};