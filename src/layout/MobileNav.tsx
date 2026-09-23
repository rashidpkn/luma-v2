import React, { useState } from "react";
import { navItems } from "../data/navigation";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div
      className={`2xl:hidden fixed inset-0 z-50 transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav
        className="relative px-6 pt-7 h-screen overflow-y-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/main/hero/mobbg.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0f1d16]/95 -z-10" />

        <div className="relative flex w-full flex-col justify-between min-h-full pb-10">
          {/* Header in mobile menu */}
          <div className="flex items-center justify-between">
            <a href="/" onClick={onClose} className="inline-block -ml-2">
              <img
                alt="Luma Pay Logo"
                width="150"
                height="50"
                className="h-8 w-auto"
                src="/images/luma-logo-white.png"
              />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-full text-white hover:text-main-green cursor-pointer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="h-6 w-6 text-white"
              >
                <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" />
              </svg>
            </button>
          </div>

          {/* Links list */}
          <div className="flex flex-col justify-center py-6 w-full">
            <ul className="space-y-3 w-full">
              {navItems.map((item, idx) => (
                <li key={item.label} className="border-b border-white/10 pb-2">
                  <div className="flex items-center justify-between w-full">
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      onClick={onClose}
                      className="inline-block text-2xl font-dmsans tracking-tighter text-white hover:text-main-green transition-colors"
                    >
                      {item.label}
                    </a>
                    {item.megaMenu && (
                      <button
                        type="button"
                        onClick={() => toggleAccordion(idx)}
                        className="p-2 ml-3 text-white rounded-full cursor-pointer"
                        aria-expanded={expandedIndex === idx}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          className={`h-4 w-4 text-white transition-transform duration-300 ${
                            expandedIndex === idx ? "rotate-180 text-main-green" : "rotate-0"
                          }`}
                        >
                          <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Submenu accordion */}
                  {item.megaMenu && expandedIndex === idx && (
                    <div className="pl-4 pt-2 space-y-2">
                      {item.megaMenu.columns.flatMap((col) =>
                        col.links.map((sublink) => (
                          <div key={sublink.label}>
                            <a
                              href={sublink.href}
                              target={sublink.external ? "_blank" : undefined}
                              rel={sublink.external ? "noreferrer" : undefined}
                              onClick={onClose}
                              className="text-lg text-gray-300 hover:text-main-green block py-1"
                            >
                              {sublink.label}
                            </a>
                            {sublink.sublinks?.map((deepLink) => (
                              <a
                                key={deepLink.label}
                                href={deepLink.href}
                                onClick={onClose}
                                className="text-sm text-gray-400 hover:text-main-green block pl-4 py-0.5"
                              >
                                {deepLink.label}
                              </a>
                            ))}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Action buttons */}
          <div className="w-full pt-4 space-y-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="#get-started"
              className="darkbtn flex justify-center items-center border border-main-green bg-[#242a28] w-full px-4 py-3.5 text-lg text-center tracking-tighter text-main-green font-semibold rounded-full hover:bg-[#242a28]/80 cursor-pointer"
            >
              Get Started
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="#services"
              className="btn-glow-shadow leftglow border border-main-green flex items-center justify-center w-full px-4 py-4 text-lg text-center tracking-tighter text-[#0f1d16] font-semibold bg-main-green rounded-full cursor-pointer"
            >
              Explore Services
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
