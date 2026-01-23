"use client";
import { useState } from 'react';
import Image from 'next/image';
import NavBar from './Navbar';


type HeroSectionProps = {
  chatMessage: string;
  setChatMessage: (message: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChatSubmit: () => void;
  showAttachDropdown: boolean;
  setShowAttachDropdown: (show: boolean) => void;
}



const HeroSection = ({ chatMessage, setChatMessage, handleKeyPress, handleChatSubmit, showAttachDropdown, setShowAttachDropdown }: HeroSectionProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
  return (
    <div className="min-h-screen relative w-full pt-[43px] pb-[73px] px-5 flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden z-index-0">
          <Image alt="background image" className="w-full h-full object-cover" src="/images/background.png" width={100} height={100} />
          <div className="absolute bg-[rgba(255,255,255,0.92)] inset-0" />  
        </div>

        {/* Nav Bar */}
        <NavBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          
        />

      {/* Main Section  */}
      <div className="relative w-full flex-1">
        {/* Hero Content */}
        <HeroContent />
        <div className='w-full max-w-[794px] mx-auto flex flex-col gap-[18px] mt-[169px]'>
          {/* Target Audience */}
          <TargetAudience />
          {/* Chatbox */}
          <Chatbox chatMessage={chatMessage} setChatMessage={setChatMessage} handleKeyPress={handleKeyPress} handleChatSubmit={handleChatSubmit} showAttachDropdown={showAttachDropdown} setShowAttachDropdown={setShowAttachDropdown} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection

const topics = [
 "Science",
 "Technology",
 "Engineering",
 "Mathematics",
]

const HeroContent = () => {
  return (  
    <div className="flex flex-col gap-5 mt-[98px] w-full max-w-[796px] mx-auto">
      <div className="flex flex-col gap-[3px] w-full">
        <div className="flex gap-[10px] items-center justify-center py-[2px] px-[6px]">
          {topics.map((topic) => (
            <>
              <p className="font-medium text-[16px] leading-[16px] tracking-0 text-blue-1 text-center">{topic}</p>
              <Image alt="" className="hidden last-of-type:hidden sm:block shrink-0 w-[4px] h-[4px]" src="/images/dot.svg" width={100} height={100} />
            </>
          ))}
        </div>
        <p className="font-medium text-[28px] leading-[100%] lg:text-[48px] tracking-0 text-black-2 text-center">
          Turn Complex STEM Topics Into Stories People Remember
        </p>
      </div>
      <p className="font-normal text-[16px] leading-[32px] text-black-2 text-center w-full">
        This AI chatbot analyzes your target audience, your STEM topic, and how humans learn best—then crafts tailored explanations, analogies, and narratives that make science stick.
      </p>
    </div>
  )
}


const targetAudienceData = [
  {
    title: "Myself",
    icon: "/images/user-icon.svg",
  },
  {
    title: "Researcher",
    icon: "/images/books-icon.svg",
  },
  {
    title: "Adult Learner",
    icon: "/images/nerd.svg",
  },
  {
    title: "Teacher",
    icon: "/images/board-icon.svg",
  },
  {
    title: "Students",
    icon: "/images/people-icon.svg",
  },
]

const TargetAudience = () => {
  return (
    <div className="flex flex-col gap-7">
      <p className="font-medium text-[20px] leading-[100%] tracking-0 text-black-2 text-center w-full">
        Who is your Target Audience?
      </p>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {targetAudienceData.map((item, index) => (
          <button key={index} className="py-3 px-4 flex gap-2 items-center justify-center rounded-[8px] border border-white-1 cursor-pointer hover:border-blue-1 hover:bg-blue-50/30 transition-all">
              <Image alt="target audience icon" className="w-[24px] h-[24px] object-contain" src={item.icon} width={24} height={24} />
            <p className="font-medium text-[16px] leading-[20px] tracking-0 text-black-1">{item.title}</p>
          </button>
        ))}
      </div>
    </div>
  )
}


type ChatboxProps = {
  chatMessage: string;
  setChatMessage: (message: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChatSubmit: () => void;
  showAttachDropdown: boolean;
  setShowAttachDropdown: (show: boolean) => void;
}

const Chatbox = ({ chatMessage, setChatMessage, handleKeyPress, handleChatSubmit, showAttachDropdown, setShowAttachDropdown }: ChatboxProps) => {
  return (
    <div className="relative flex flex-col gap-16 p-4 rounded-[8px] bg-white shadow-1">
      {/* Input */}
      <div className="flex items-center w-full">
        <input
          type="text"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What would you like to learn about today?"
          className="flex-1 font-medium text-[16px] leading-[32px] tracking-0 text-gray-1 placeholder:text-gray-1 placeholder:italic outline-none"
        />
        <button onClick={handleChatSubmit} disabled={!chatMessage.trim()} className="text-white py-[8px] px-3 flex items-center justify-center rounded-[10px] bg-linear-to-r from-[#FA8C54] to-[#FB31BB] hover:opacity-90 transition-opacity cursor-pointer">
          <Image src="/images/sent.svg" alt="send icon" width={20} height={20} />
        </button>
      </div>
      {/* Footer */}
      <div className="flex flex-col gap-2 w-full">
        <div className="border border-white-2 w-full" />
        <div className="flex gap-2 items-center justify-between">
          <div className="py-[8px] px-3 rounded-[8px] flex gap-1 items-center justify-center bg-white-3 cursor-pointer hover:bg-gray-100 transition-colors">
            <p className="font-medium text-[14px] leading-[16px] tracking-0 text-black-1">Short Response</p>
            <Image src="/images/chevron-down.svg" alt="arrow down icon" width={16} height={16} className='w-[16px] h-[16px] object-cover'/>
          </div>
           
            <div
              className="py-[6px] px-3 rounded-[8px] flex gap-1 items-center justify-center bg-white-3 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => setShowAttachDropdown(!showAttachDropdown)}
            > 
              <Image alt="Attachment Icon" className="w-[20px] h-[20px] object-contain" src="/images/attachment-icon.svg" width={20} height={20} />
              <p className="font-medium text-[14px] leading-[16px] tracking-0 text-black-1">Attach File</p>
            </div>
        </div>
      </div>

      {/* Attach File Dropdown - now inside chatbox for better positioning */}
      <div
        className={`absolute bg-white flex flex-col gap-[8px] items-start px-[16px] py-[12px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(183,183,183,0.25)] w-[140px] z-50 origin-top transition-all duration-200 ease-out right-3 sm:right-4 bottom-0 ${
          showAttachDropdown
            ? 'opacity-100 scale-y-100 translate-y-[calc(100%+8px)]'
            : 'opacity-0 scale-y-0 translate-y-0 pointer-events-none'
        }`}
      >
        <p className="font-medium leading-normal min-w-full not-italic text-[#333] text-[16px] cursor-pointer hover:text-blue-1 transition-colors py-[4px]">
          PDF
        </p>
        <div className="h-px relative shrink-0 w-full bg-[#e5e5e5]" />
        <p className="font-medium leading-normal min-w-full not-italic text-[#333] text-[16px] cursor-pointer hover:text-blue-1 transition-colors py-[4px]">
          Image
        </p>
      </div>
    </div>
  )
}