"use client";
import React from "react";
import ChatInput from "./ChatInput";
import ChatFooter from "./ChatFooter";

export type ChatboxProps = {
  chatMessage: string;
  setChatMessage: (message: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChatSubmit: () => void;
  placeholder?: string;
  onChangeResponseType?: (value: string) => void;
};

const Chatbox = ({
  chatMessage,
  setChatMessage,
  handleKeyPress,
  handleChatSubmit,
  placeholder = "What STEM topic would you like explained?",
  onChangeResponseType,
}: ChatboxProps) => {
  return (
    <div className="relative flex flex-col gap-16 p-4 rounded-lg bg-white shadow-1 border border-gray-100">
      {/* Input */}
      <ChatInput
        chatMessage={chatMessage}
        setChatMessage={setChatMessage}
        handleKeyPress={handleKeyPress}
        handleChatSubmit={handleChatSubmit}
        placeholder={placeholder}
      />

      {/* Footer */}
      <ChatFooter onChangeResponseType={onChangeResponseType} />
    </div>
  );
};

export default Chatbox;
