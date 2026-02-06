"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const targetAudienceData = [
  {
    title: "Researchers",
    icon: "/images/books-icon.svg",
    options: ["In the field", "Not in the field"],
  },
  {
    title: "General Public",
    icon: "/images/nerd.svg",
  },
  {
    title: "Teachers",
    icon: "/images/board-icon.svg",
  },
  {
    title: "Students",
    icon: "/images/people-icon.svg",
    options: [
      "Elementary",
      "Middle School",
      "High School",
      "College/University",
    ],
  },
];

const TargetAudience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<Record<string, string | null>>(
    () => {
      const init: Record<string, string | null> = {};
      targetAudienceData.forEach((t) => (init[t.title] = null));
      return init;
    }
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    }
    if (openIndex !== null) {
      document.addEventListener("mousedown", handleOutside);
      return () => document.removeEventListener("mousedown", handleOutside);
    }
  }, [openIndex]);

  function toggleDropdown(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  function togglePill(title: string) {
    setSelected((s) => {
      const next: Record<string, string | null> = {};
      targetAudienceData.forEach((t) => (next[t.title] = null));
      if (s[title]) return next; // deselect if already selected
      next[title] = title;
      return next;
    });
    setOpenIndex(null);
  }

  function handleSelect(title: string, option: string) {
    setSelected((s) => {
      const next: Record<string, string | null> = {};
      targetAudienceData.forEach((t) => (next[t.title] = null));
      next[title] = s[title] === option ? null : option;
      return next;
    });
    setOpenIndex(null);
  }

  return (
    <div className="flex flex-col gap-7" ref={containerRef}>
      <p className="font-medium text-[20px] leading-[100%] tracking-0 text-black-2 text-center w-full">
        Who is your Target Audience?
      </p>
      <div className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-center max-w-full px-1">
        {targetAudienceData.map((item, index) => (
          <div key={item.title} className="relative">
            <button
              aria-haspopup={!!item.options}
              aria-expanded={openIndex === index}
              aria-pressed={!!selected[item.title]}
              onClick={() =>
                item.options ? toggleDropdown(index) : togglePill(item.title)
              }
              className={[
                "py-2.5 px-3.5 flex gap-2 items-center justify-center rounded-lg border cursor-pointer transition-all whitespace-nowrap",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-1 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                selected[item.title]
                  ? "border-blue-1 bg-blue-50/30"
                  : "border-white-1 hover:border-blue-1 hover:bg-blue-50/30",
              ].join(" ")}
            >
              <Image
                alt={`${item.title} icon`}
                className="w-6 h-6 object-contain"
                src={item.icon}
                width={24}
                height={24}
              />
              <p className="font-medium text-[16px] leading-5 tracking-0 text-black-1 flex items-center gap-2">
                {item.title}
                {item.options && selected[item.title] && (
                  <span className="text-[11px] leading-4 px-1.5 py-0.5 rounded-full border border-blue-1/20 bg-blue-50/60 text-blue-1">
                    {selected[item.title]}
                  </span>
                )}
              </p>
            </button>

            {item.options && openIndex === index && (
              <div className="absolute py-2 z-50 mt-2 left-0 w-35 bg-white rounded-md shadow-lg overflow-hidden">
                {item.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(item.title, opt)}
                    className={[
                      "w-full text-left py-2.5 px-2 font-medium text-[14px] leading-4 tracking-0 cursor-pointer transition-colors",
                      selected[item.title] === opt
                        ? "bg-blue-50/60 text-blue-1"
                        : "text-black-2 hover:bg-gray-2",
                    ].join(" ")}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetAudience;
