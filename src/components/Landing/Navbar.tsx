"use client";
import Image from "next/image";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavBarProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  className?: string;
};

const links: { href: string; label: string }[] = [
  { href: "#features", label: "Features" },
  { href: "#faqs", label: "FAQs" },
  { href: "#support", label: "Support" },
];

const NavBar = ({
  className,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavBarProps) => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={cn(
        "w-full max-w-[1112px] mx-auto border border-white-1 rounded-[16px] py-3 px-5 relative",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-1 w-full">
        {/* Logo */}
        <div className="h-[28px] sm:h-[35.606px] relative shrink-0 w-[84px] sm:w-[105px]">
          <Image
            alt="STEM Translation Logo"
            className="w-full h-full object-cover"
            src="/images/logo.png"
            width={100}
            height={100}
          />
        </div>
        {/* Links */}
        <div className="hidden lg:flex lg:gap-[46px] lg:items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="font-medium leading-[100%] tracking-0 text-black-1 text-[16px] text-center hover:text-blue-1 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <MenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className="h-[28px] relative shrink-0 w-[84px]">
              <Image
                alt="STEM Translation Logo"
                className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
                src="/images/logo.png"
                width={100}
                height={100}
              />
            </div>
            <CloseIcon onClick={() => setMobileMenuOpen(false)} />
          </div>
          <div className="flex flex-col gap-6 p-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="font-medium text-[18px] text-black-1 hover:text-blue-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
