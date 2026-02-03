"use client";

import TargetAudience from "@/components/shared/TargetAudience";
import Chatbox from "@/components/shared/Chatbox";
import ExpandedChat from "@/components/Chat/ExpandedChat";
import { useStemChat } from "@/hooks/useStemChat";

/**
 * Second version: chat view only.
 * Same Target Audience + Chatbox as the main page hero; on send, opens the same chat detail modal.
 */
const ChatViewPage = () => {
  const {
    ui,
    session,
    handleChatSubmit,
    handleKeyPress,
    startNewConversation,
  } = useStemChat();

  return (
    <div className="bg-white relative w-full min-h-screen overflow-hidden max-w-400 mx-auto flex flex-col">
      {/* Chat view only - same block as hero chat module */}
      <div className="w-full max-w-198.5 mx-auto flex flex-col gap-4.5 flex-1 justify-center px-5 py-12">
        <TargetAudience />
        <Chatbox
          chatMessage={ui.chatMessage}
          setChatMessage={ui.setChatMessage}
          handleKeyPress={handleKeyPress}
          handleChatSubmit={handleChatSubmit}
          placeholder="What would you like to learn about today?"
        />
      </div>

      <ExpandedChat
        open={ui.chatOpen}
        onClose={() => ui.setChatOpen(false)}
        onNewChat={() => {
          startNewConversation();
          ui.setChatOpen(true);
        }}
        messages={session.chatState.messages}
        chatMessage={ui.chatMessage}
        setChatMessage={ui.setChatMessage}
        handleKeyPress={handleKeyPress}
        handleChatSubmit={handleChatSubmit}
        isLoading={session.chatState.isLoading}
      />
    </div>
  );
};

export default ChatViewPage;
