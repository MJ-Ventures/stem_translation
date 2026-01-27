import { useState, useCallback } from 'react';

export const useChatUI = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const toggleChat = useCallback(() => setChatOpen(prev => !prev), []);

  return {
    chatOpen,
    setChatOpen,
    chatMessage,
    setChatMessage,
    toggleChat,
  };
};
