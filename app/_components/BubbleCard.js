import React from "react";

export default function BubbleCard({ text, dark }) {
  return (
    <div className="relative max-w-sm">
      <div
        className={`relative rounded-[30px] p-6 text-xl font-semibold leading-relaxed shadow-md ${
          dark ? "bg-[#0E1629] text-white" : "bg-white text-[#0E1629] border"
        }`}
      >
        <p className="z-10 relative">"{text}"</p>

        {/* Bubble Cutout - bottom right */}
        <div
          className={`absolute bottom-0 right-0 w-[46px] h-[46px] rotate-90 rounded-bl-[28px] ${
            dark ? "bg-white" : "bg-[#0E1629]"
          }`}
        ></div>
      </div>

      {/* Arrow Button */}
      <div
        className={`absolute bottom-2 right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
          dark ? "bg-[#0E1629] text-white" : "bg-white text-red-500"
        }`}
      >
        <span className="text-xl">→</span>
      </div>
    </div>
  );
}
