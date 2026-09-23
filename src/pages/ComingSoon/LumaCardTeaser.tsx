import React, { useState } from "react";

export const LumaCardTeaser: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] mx-auto perspective-[1000px] py-4">
      {/* Ambient background glow behind card */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#00b4d8]/20 via-[#0077b6]/30 to-[#90e0ef]/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Floating Badge */}
      <div className="absolute -top-3 right-4 z-20 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-[#00b4d8]/30 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        Founding Member Edition
      </div>

      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.03 : 1})`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
        className="relative aspect-[1.586/1] w-full rounded-2xl p-6 sm:p-7 text-white shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer select-none overflow-hidden border border-white/20 bg-gradient-to-br from-[#0e213d] via-[#091528] to-[#030914]"
      >
        {/* Holographic light sheen reflection */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${50 + rotation.y * 3}% ${
              50 + rotation.x * 3
            }%, rgba(144, 224, 239, 0.4) 0%, rgba(0, 180, 216, 0.15) 40%, transparent 80%)`,
          }}
        />

        {/* Diagonal metallic brush lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%,transparent_100%)] bg-[length:8px_8px] pointer-events-none opacity-20" />

        {/* Card Header: Brand Wordmark & Contactless Wave */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/images/luma-pay-wordmark.png"
              alt="Luma Pay"
              className="h-7 w-auto object-contain brightness-110 drop-shadow-[0_2px_8px_rgba(0,180,216,0.5)]"
            />
          </div>

          {/* Contactless waves SVG */}
          <div className="text-[#90e0ef]/70">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.5 10c1.5-1.5 3.5-1.5 5 0M6 7.5c3-3 7-3 10 0M11 12.5a1.5 1.5 0 012 0"
              />
            </svg>
          </div>
        </div>

        {/* EMV Chip and NFC */}
        <div className="relative z-10 mt-5 sm:mt-6 flex items-center gap-3">
          <div className="w-11 h-8 rounded-md bg-gradient-to-br from-[#ffd166] via-[#f4a261] to-[#e76f51] p-[2px] shadow-sm">
            <div className="w-full h-full rounded-[4px] border border-black/20 flex flex-col justify-between p-1 opacity-80">
              <div className="h-[1px] w-full bg-black/30" />
              <div className="h-[1px] w-full bg-black/30" />
            </div>
          </div>
          <span className="text-[10px] tracking-wider text-slate-400 font-mono">
            GLOBAL CRYPTO & FIAT
          </span>
        </div>

        {/* Card Number Masked */}
        <div className="relative z-10 mt-5 sm:mt-6">
          <div className="font-mono text-base sm:text-lg tracking-[0.22em] text-slate-200 font-medium">
            •••• &nbsp; •••• &nbsp; •••• &nbsp; 2026
          </div>
        </div>

        {/* Card Footer: Cardholder & Network */}
        <div className="relative z-10 mt-4 flex items-end justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-wider text-slate-400">
              Cardholder
            </div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-white">
              FOUNDING MEMBER #0482
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-red-500/80 -mr-2 backdrop-blur-sm" />
            <div className="w-6 h-6 rounded-full bg-yellow-500/80 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LumaCardTeaser;
