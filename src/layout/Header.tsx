import React, { useState, useRef, useCallback } from "react";
import { navItems } from "../data/navigation";

interface HeaderProps {
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu }) => {
  const [activeMega, setActiveMega] = useState<number | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback((index: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveMega(index);
  }, []);

  const handleLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setActiveMega(null);
    }, 200);
  }, []);

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${activeMega !== null ? 'bg-[#101d16]' : 'hover:bg-[#101d16]'}`}>
      <div className="py-4 md:py-6" id="hero">
        <div className="w-full z-20">
          <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-10">
            {/* Brand Logo */}
            <div className="w-auto relative z-20">
              <a href="/" className="inline-block">
                <img
                  alt="Luma Pay logo"
                  loading="eager"
                  width="160"
                  height="40"
                  className="relative z-20 h-8 md:h-10 w-auto"
                  src="/images/luma-logo-white.png"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="w-auto hidden 2xl:block">
              <div className="w-full hidden xl:flex 2xl:gap-x-0.5 items-center">
                {navItems.map((item, index) => (
                  <div
                    key={item.label}
                    onMouseEnter={() => item.megaMenu ? handleEnter(index) : setActiveMega(null)}
                    onMouseLeave={handleLeave}
                  >
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className={`text-white flex gap-x-1 relative py-2 z-20 rounded-[30px] px-3.5 items-center text-lg tracking-tighter transition-colors ${
                        activeMega === index ? 'bg-[#242a28] text-main-green' : 'hover:bg-[#242a28] hover:text-main-green'
                      }`}
                    >
                      {item.label}
                      {item.megaMenu && (
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className={`text-xs transition-transform duration-300 ml-1 ${
                            activeMega === index ? 'text-main-green -rotate-180' : 'text-white'
                          }`}
                          height="1em"
                          width="1em"
                        >
                          <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                        </svg>
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="w-auto hidden 2xl:block relative z-20">
              <div className="flex items-center gap-x-3">
                <button
                  type="button"
                  className="rounded-md py-2 px-3 text-base font-semibold text-white flex items-center gap-2 cursor-pointer hover:text-main-green transition-colors"
                >
                  <img
                    alt="EN"
                    width="22"
                    height="22"
                    className="rounded-full"
                    src="/images/flags/en.svg"
                  />
                  EN
                </button>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="#get-started"
                  className="darkbtn flex items-center border border-main-green bg-[#242a28] px-6 py-3 text-base text-center tracking-tighter text-main-green font-semibold rounded-full hover:bg-[#242a28]/80 cursor-pointer"
                >
                  Download App
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="#early-access"
                  className="btn-glow-shadow leftglow border border-main-green px-7 py-3 text-lg text-center tracking-tighter text-[#0f1d16] font-semibold bg-main-green rounded-full cursor-pointer transition-transform active:scale-95"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile / Tablet Actions */}
            <div className="flex items-center gap-x-2 2xl:hidden relative z-20">
              <button
                type="button"
                className="py-2 px-2 text-sm font-semibold text-white flex items-center gap-1.5 cursor-pointer"
              >
                <img
                  alt="EN"
                  width="20"
                  height="20"
                  className="rounded-full"
                  src="/images/flags/en.svg"
                />
                EN
              </button>

              <a
                target="_blank"
                rel="noreferrer"
                href="#early-access"
                className="btn-glow-shadow leftglow border border-main-green px-4 py-1.5 text-sm tracking-tighter text-[#0f1d16] font-semibold bg-main-green rounded-full"
              >
                Start
              </a>

              <button
                type="button"
                onClick={onOpenMobileMenu}
                aria-label="Open menu"
                className="inline-block p-2 rounded-full text-white hover:text-main-green cursor-pointer"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 15 15"
                  className="h-7 w-7 text-white"
                  height="1em"
                  width="1em"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdowns — rendered outside the nav items so hovering the panel keeps it open */}
      {navItems.map((item, index) =>
        item.megaMenu ? (
          <div
            key={`mega-${item.label}`}
            className={`absolute left-0 w-full z-40 transition-all duration-200 ${
              activeMega === index
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-2 pointer-events-none'
            }`}
            style={{ top: '100%' }}
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={handleLeave}
          >
            <div className="bg-[#101d16] shadow-2xl py-12">
              <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 divide-x divide-main-green">
                  <div className="flex flex-col justify-start space-y-4 pr-8">
                    <h3 className="text-3xl font-bold tracking-tighter text-white">
                      {item.megaMenu.title}
                    </h3>
                    {item.megaMenu.description && (
                      <p className="text-base text-gray-300 tracking-tighter max-w-md">
                        {item.megaMenu.description}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-y-4 grid-cols-2 pl-12">
                    {item.megaMenu.columns.flatMap((col) =>
                      col.links.map((link) => (
                        <div key={link.label} className="flex flex-col gap-y-2">
                          <a
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noreferrer" : undefined}
                            className="text-lg font-medium tracking-tight text-white hover:bg-[#242a28] py-2 px-4 -ml-4 w-fit hover:text-main-green rounded-full transition-all duration-300"
                          >
                            {link.label}
                          </a>
                          {link.sublinks?.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="text-base tracking-tight text-gray-400 hover:text-main-green pl-4 py-1 transition-colors"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </header>
  );
};

export default Header;