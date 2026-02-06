"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ChatFooter = () => {
  const responseOptions = ["Short Explanation", "Long Explanation"];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>(responseOptions[0]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  return (
    <div className="flex flex-col gap-2 w-full" ref={containerRef}>
      <div className="border border-white-2 w-full" />
      <div className="flex gap-2 items-center justify-between">
        <div className="relative">
          <button
            onClick={() => setOpen((s) => !s)}
            className="py-2 px-3 rounded-lg flex gap-1 items-center justify-center bg-white-3 cursor-pointer hover:bg-gray-100 transition-colors"
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            <p className="font-medium text-[14px] leading-4 tracking-0 text-black-1">
              {selected}
            </p>
            <Image
              src="/images/chevron-down.svg"
              alt="arrow down icon"
              width={16}
              height={16}
              className="w-4 h-4 object-cover"
            />
          </button>

          {open && (
            <div className="absolute py-2 z-50 mt-2 left-0 w-40 bg-white rounded-md shadow-lg overflow-hidden">
              {responseOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setSelected(opt);
                    setOpen(false);
                  }}
                  className="w-full text-left py-2.5 px-3 hover:bg-gray-50 font-medium text-[14px] leading-4 tracking-0 text-black-2 cursor-pointer"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;
