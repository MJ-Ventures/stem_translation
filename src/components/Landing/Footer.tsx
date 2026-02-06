'use client';
import Image from "next/image"
import Link from "next/link"
import HubspotNewsletterForm from "../shared/HubspotNewsletterForm"


const socialLinks = [
    {
        href: "https://www.facebook.com/stemtranslation",
        icon: "/images/facebook.svg",
        name: "Facebook"
    },
    {
        href: "https://www.linkedin.com/company/stem-translation-co/",
        icon: "/images/linkedin.svg",
        name: "LinkedIn"
    },
    {
        href: "https://www.instagram.com/thestemtranslator/",
        icon: "/images/instagram.svg",
        name: "Instagram"
    },
    {
        href: "https://www.tiktok.com/@thestemtranslator",
        icon: "/images/tiktok.svg",
        name: "TikTok"
    },
    {
        href: "https://www.youtube.com/@thestemtranslator",
        icon: "/images/youtube.svg",
        name: "YouTube"
    }
]

const links = [
    {
        href: "#features",
        label: "Features"
    },
    {
        href: "#faqs",
        label: "FAQs"
    },
    {
        href: "#support",
        label: "Support"
    }
]   

const Footer = () => {
  return (
    <div id="support" className="bg-white relative w-full">
        {/* Background */}
        <div className="absolute inset-0 h-full w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <Image src="/images/background.png" alt="background"  width={100} height={100}  className="w-full h-full object-cover" />
                <div className="absolute bg-[rgba(255,255,255,0.92)] inset-0" />
            </div>
        </div>

        <div className="px-5 lg:px-[100px] pt-[100px] lg:pt-[160px] pb-[60px] flex flex-col gap-12 lg:gap-[90px] relative">
            {/* Newsletter */}
            <div className="w-full max-w-[966px] flex flex-col gap-[18px]">
                <h1 className="font-medium text-[28px] lg:text-[48px] leading-[48px] lg:leading-[68px] tracking-0 text-black-2">Don’t miss any updates. Subscribe to our Newsletter.</h1>
                <HubspotNewsletterForm className="w-full max-w-[400px]" />
            </div>
            {/* Footer Links */}
            <div className="relative flex flex-col gap-6 items-center sm:flex-row sm:items-start justify-between">
                <div className="flex flex-col gap-3 items-center sm:items-start">
                    <div className="h-[30px] sm:h-[35.606px] relative shrink-0 w-[90px] sm:w-[105px]">
                        <Image src="/images/logo.png" alt="logo" width={100} height={100} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex gap-4 items-center">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="cursor-pointer rounded-full w-[32px] h-[32px] flex items-center justify-center hover:opacity-80 transition-opacity"
                                aria-label={link.name}
                            >
                                <Image src={link.icon} alt={link.name} width={100} height={100} className="w-[28px] h-[28px]" />
                            </a>
                        ))}  
                    </div>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-[46px] items-center">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="font-medium text-[16px] leading-[100%] tracking-0 text-black-1 text-center hover:text-blue-1 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer



