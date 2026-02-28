import React, { useEffect } from "react";

const VoiceAssistant = ({ onResult }) => {
  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) return;

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };

    recognition.start();

    return () => recognition.stop();
  }, [onResult]);

  return null;
};

export default VoiceAssistant;