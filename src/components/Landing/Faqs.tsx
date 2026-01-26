"use client";
import Image from "next/image"
import { useState } from "react";

const faqs = [
    {
      question: "How is this different than other chatbots like ChatGPT?",
      answer: "This chatbot was custom-built specifically for science communication, not general conversation. While generic AI tools can explain STEM topics, they aren't designed to think about who the explanation is for or how people learn best. This chatbot uses learning-science research, narrative structure, targeted vocabulary, and audience-aware reasoning to deliver explanations that feel intuitive, relatable, and accurate. Instead of simply providing information, it helps people truly understand it."
    },
    {
      question: "Why is a chatbot that focuses on science communication important?",
      answer: "Scientific information can be complex—and often poorly communicated. A chatbot that understands science and understands how humans learn bridges that gap. By tailoring explanations to a specific audience and using proven communication strategies, it makes STEM concepts accessible, memorable, and meaningful. Clear science communication builds trust, improves education, enhances workforce readiness, and empowers people to use STEM knowledge in real life."
    },
    {
      question: "Who is this chatbot for?",
      answer: "Anyone who needs help explaining or understanding a STEM topic.\n— Scientists and researchers\n— Educators and students\n— STEM professionals presenting to non-technical audiences\n— Workforce trainers and career-development organizations\n— Communicators, content creators, and public-engagement leaders\n— Parents, lifelong learners, and the simply curious"
    },
    {
      question: "What STEM topics can it explain?",
      answer: "Almost anything. The chatbot is trained to handle a wide range of STEM fields—biology, chemistry, physics, engineering, data science, AI, environmental science, health sciences, and more. If it's grounded in science, it can help translate it."
    },
    {
      question: "Does this tool replace educators or science communicators?",
      answer: "Not at all. This tool is a support system, not a substitute. It helps you translate complex content efficiently, freeing you to focus on teaching, engaging, and connecting with your audience. Think of it as your personal science-communication assistant. If you want to translate complexity into understanding, this tool is for you."
    }
  ];

const Faqs = () => {
    const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([]);
    
    const toggleFaq = (index: number) => {
        setOpenFaqIndices(prev =>
          prev.includes(index)
            ? prev.filter(i => i !== index)
            : [...prev, index]
        );
      };

    return (
        <div id="faqs"  className="min-h-screen py-[100px] lg:py-[200px] px-5 lg:px-[100px] w-full bg-white flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-center">
            <div className="flex flex-col w-full max-w-[548px]">
                <span className="font-medium text-[16px] leading-[16px] tracking-0 text-blue-1 mb-1">FAQ</span>            
                <h1 className="font-medium text-[28px] lg:text-[56px] leading-[100%] tracking-0 text-black-2">Frequently Asked Questions</h1>
                <button className="mt-12 py-[10px] px-[20px] rounded-[10px] border border-[#33333333] flex items-center justify-center gap-[2px] w-fit font-bold text-[16px] leading-[100%] tracking-0 text-black-2">
                    Contact Us
                    <Image src="/images/chevron-right.svg" alt="arrow right" width={16} height={16} className="w-[16px] h-[16px] object-cover" />
                </button>
                
            </div>

            {/* FAQs */}
            <div className="flex-1 flex flex-col gap-2">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white-4 p-6 rounded-[12px] flex flex-col gap-[10px] w-full cursor-pointer"
                        onClick={() => toggleFaq(index)}
                    >
                        {/* Trigger */}
                        <div className="flex items-center gap-[10px] w-full">
                            <p className="flex-1 font-medium text-[20px] leading-[100%] tracking-0 text-black-2">
                                {faq.question}
                            </p>
                            <Image src={openFaqIndices.includes(index) ? "/images/remove.svg" : "/images/add-circle-half.svg"} alt="faq icon" width={24} height={24} className="w-[24px] h-[24px] object-cover" />
                        </div>
                        {/* Answer */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${openFaqIndices.includes(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="font-normal text-[16px] leading-[32px] tracking-0 text-black-2">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Faqs