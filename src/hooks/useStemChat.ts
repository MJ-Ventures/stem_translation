import React, { useCallback } from "react";
import { useChatUI } from "./useChatUI";
import { useChatSession } from "./useChatSession";

export const useStemChat = () => {
  const ui = useChatUI();
  const session = useChatSession();

  const startNewConversation = useCallback(() => {
    ui.setChatMessage("");
    session.resetConversation();
  }, [session, ui]);

  const handleChatSubmit = useCallback(async () => {
    if (!ui.chatMessage.trim()) return;

    const messageToSend = ui.chatMessage.trim();
    ui.setChatMessage("");
    ui.setChatOpen(true);

    const ctx: Record<string, string> = {};
    if (ui.audienceContext) {
      ctx.target_audience = ui.audienceContext;
    }
    if (ui.responseType) {
      ctx.explanation_length = ui.responseType;
    }
    const additionalContext =
      Object.keys(ctx).length > 0 ? (ctx as Record<string, string>) : null;

    await session.sendMessage(messageToSend, additionalContext);
  }, [ui, session]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChatSubmit();
      }
    },
    [handleChatSubmit],
  );

  return {
    ui,
    session,
    handleChatSubmit,
    handleKeyPress,
    startNewConversation,
  };
};
