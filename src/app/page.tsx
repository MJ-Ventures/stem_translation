'use client';
import HeroSection from '@/components/Landing/HeroSection';
import { useState } from 'react';
import FeaturesSection from '@/components/Landing/FeaturesSection';
import PersonalizedSupportSection from '@/components/Landing/PersonalizedSupportSection';
import Faqs from '@/components/Landing/Faqs';
import GetStartedSection from '@/components/Landing/GetStartedSection';
import Footer from '@/components/Landing/Footer';
import CopyrightBar from '@/components/Landing/CopyrightBar';

interface Message {
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface ChatState {
  conversationId: string | null;
  messages: Message[];
  isLoading: boolean;
}

const StemLandingPage = () => {
  const [showAttachDropdown, setShowAttachDropdown] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatState, setChatState] = useState<ChatState>({
    conversationId: null,
    messages: [],
    isLoading: false,
  });


  const handleChatSubmit = async () => {
    if (!chatMessage.trim()) return;

    const userMessage = chatMessage.trim();
    setChatMessage('');
    setChatOpen(true);
    
    // Add user message immediately
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, {
        sender: 'user',
        text: userMessage,
        timestamp: new Date().toISOString(),
      }],
      isLoading: true,
    }));

    try {
      const API_BASE = 'https://stem-translation-891212753818.us-central1.run.app/api/monitoring/conversations';
      
      if (!chatState.conversationId) {
        // Create new conversation
        const response = await fetch(`${API_BASE}/create`, {
          method: 'POST',
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            additional_context: null,
            conversation_id: null,
            message: userMessage,
            name: null,
          }),
        });

        const data = await response.json();
        
        setChatState(prev => ({
          ...prev,
          conversationId: data.conversation_id,
          messages: [
            ...prev.messages,
            {
              sender: 'assistant',
              text: data.reply,
              timestamp: new Date().toISOString(),
            }
          ],
          isLoading: false,
        }));

        // Generate conversation name in background
        fetch(`${API_BASE}/${data.conversation_id}/name`, {
          method: 'POST',
          headers: { 'accept': '*/*' },
        });
      } else {
        // Send message to existing conversation
        const response = await fetch(`${API_BASE}/${chatState.conversationId}/message`, {
          method: 'POST',
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            additional_context: null,
            message: userMessage,
          }),
        });

        const data = await response.json();
        
        setChatState(prev => ({
          ...prev,
          messages: [
            ...prev.messages,
            {
              sender: 'assistant',
              text: data.reply,
              timestamp: new Date().toISOString(),
            }
          ],
          isLoading: false,
        }));
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setChatState(prev => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            sender: 'assistant',
            text: 'Sorry, there was an error processing your message. Please try again.',
            timestamp: new Date().toISOString(),
          }
        ],
        isLoading: false,
      }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSubmit();
    }
  };

  return (
    <div className="bg-white relative w-full min-h-screen overflow-hidden max-w-[1600px] mx-auto flex flex-col">
        <HeroSection
          chatMessage={chatMessage}
          setChatMessage={setChatMessage}
          handleKeyPress={handleKeyPress}
          handleChatSubmit={handleChatSubmit}
          showAttachDropdown={showAttachDropdown}
          setShowAttachDropdown={setShowAttachDropdown}
        />
        <FeaturesSection />
        <PersonalizedSupportSection />
        <Faqs />
        <GetStartedSection />
        <Footer />
        <CopyrightBar />

        {/* Chat Side Panel */}
        <div className={`fixed top-0 right-0 h-full w-full sm:w-[480px] md:w-[600px] bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${chatOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-linear-to-r from-[#38b2c0] via-[#1d82e2] to-[#3cbaba]">
              <h2 className="text-white text-xl font-semibold">STEM Translation Chat</h2>
              <button 
                onClick={() => setChatOpen(false)}
                className="text-white hover:text-gray-200 transition-colors p-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {chatState.messages.length === 0 && !chatState.isLoading && (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-400 text-center">Start a conversation to get personalized STEM explanations</p>
                </div>
              )}

              {chatState.messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg px-4 py-3 ${
                    msg.sender === 'user' 
                      ? 'bg-linear-to-r from-[#fa8c54] to-[#fb31bb] text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    <p className={`text-xs mt-2 ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {chatState.isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-4 py-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 px-6 py-4 bg-white">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#1d82e2] focus:ring-2 focus:ring-[#1d82e2]/20 transition-all text-[14px]"
                  disabled={chatState.isLoading}
                />
                <button
                  onClick={handleChatSubmit}
                  disabled={!chatMessage.trim() || chatState.isLoading}
                  className="px-4 py-3 bg-linear-to-r from-[#fa8c54] to-[#fb31bb] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[48px]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3333 1.66667L9.16667 10.8333M18.3333 1.66667L12.5 18.3333L9.16667 10.8333M18.3333 1.66667L1.66667 7.5L9.16667 10.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default StemLandingPage;