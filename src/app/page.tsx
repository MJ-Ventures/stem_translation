"use client";
import HeroSection from "@/components/Landing/HeroSection";
import FeaturesSection from "@/components/Landing/FeaturesSection";
import PersonalizedSupportSection from "@/components/Landing/PersonalizedSupportSection";
import Faqs from "@/components/Landing/Faqs";
import GetStartedSection from "@/components/Landing/GetStartedSection";
import Footer from "@/components/Landing/Footer";
import CopyrightBar from "@/components/Landing/CopyrightBar";
import ExpandedChat from "@/components/Chat/ExpandedChat";
import { useStemChat } from "@/hooks/useStemChat";

const StemLandingPage = () => {
  const { ui, session, handleChatSubmit, handleKeyPress, startNewConversation } =
    useStemChat();
  const handleStartConversation = () => {
    const el = document.getElementById("chat-module");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => {
      const input = el?.querySelector<HTMLInputElement>('input[type="text"]');
      input?.focus();
    }, 350);
  };
  return (
    <div className="bg-white relative w-full min-h-screen overflow-hidden max-w-400 mx-auto flex flex-col">
      <HeroSection
        chatMessage={ui.chatMessage}
        setChatMessage={ui.setChatMessage}
        handleKeyPress={handleKeyPress}
        handleChatSubmit={handleChatSubmit}
      />
      <FeaturesSection onStartConversation={handleStartConversation} />
      <PersonalizedSupportSection onStartConversation={handleStartConversation} />
      <Faqs />
      <GetStartedSection onStartConversation={handleStartConversation} />
      <Footer />
      <CopyrightBar />
      {/* Chat Side Panel */}
      <ExpandedChat
        open={ui.chatOpen}
        onClose={() => ui.setChatOpen(false)}
        onNewChat={() => {
          startNewConversation();
          // keep the panel open + focus the input
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

export default StemLandingPage;
