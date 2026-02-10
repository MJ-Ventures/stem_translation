import { useState, useCallback } from "react";

export const useChatUI = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [audienceContext, setAudienceContext] = useState<string | null>(null);
  const [responseType, setResponseType] = useState<string>("Short Explanation");

  const toggleChat = useCallback(() => setChatOpen((prev) => !prev), []);

  return {
    chatOpen,
    setChatOpen,
    chatMessage,
    setChatMessage,
    audienceContext,
    setAudienceContext,
    responseType,
    setResponseType,
    toggleChat,
  };
};
