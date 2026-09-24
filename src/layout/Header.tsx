import React, { useCallback, useRef, useState } from "react";
import BrandLogo from "../components/BrandLogo";
import SiteLink from "../components/SiteLink";
import { navItems, type NavDropdownItem } from "../data/navigation";
import { resolveHref } from "../lib/links";

interface HeaderProps {
  onOpenMobileMenu: () => void;
  menuOpen: boolean;
}

function MegaPanel({ item }: { item: NavDropdownItem }) {
  if (!item.megaMenu) return null;
  const links = item.megaMenu.columns.flatMap((column) => column.links);

  return (
    <div className="rounded-[1.5rem] border border-line bg-white p-6 shadow-[0_18px_50px_rgba(10,37,64,0.08)] md:p-8">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl bg-blue-soft p-5">
          <p className="text-xl font-semibold tracking-tight text-navy">{item.megaMenu.title}</p>
          {item.megaMenu.description && (
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.megaMenu.description}</p>
          )}
          <p className="mt-4 text-sm font-semibold text-navy">Coming soon</p>
        </div>
        <ul className="grid content-start gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.label}>
              <SiteLink href={link.href} external={link.external} soon className="text-sm font-semibold text-navy">
                {link.label}
              </SiteLink>
              {link.sublinks && link.sublinks.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {link.sublinks.map((sub) => (
                    <li key={sub.label}>
                      <SiteLink href={sub.href} soon className="text-sm text-muted">
                        {sub.label}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu, menuOpen }) => {
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
    closeTimeout.current = setTimeout(() => setActiveMega(null), 160);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="/" className="inline-flex shrink-0" aria-label="Luma Pay home">
          <BrandLogo size="sm" className="sm:h-14" />
        </a>
        <div className="flex items-center gap-2">
          <button type="button" className="hidden items-center gap-2 rounded-full px-2 py-2 text-sm font-semibold text-navy sm:inline-flex">
            <img alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full" src="/images/flags/en.svg" />
            EN
          </button>
          <SiteLink href="#get-started" className="btn btn-soft btn-sm hidden sm:inline-flex">
            Download App
          </SiteLink>
          <SiteLink href="#early-access" className="btn btn-primary btn-sm">
            Get Started
          </SiteLink>
          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-blue px-3 text-sm font-semibold text-navy min-[1180px]:hidden"
          >
            Menu
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h10" />
            </svg>
          </button>
        </div>
      </div>

      <nav className="relative hidden border-t border-line bg-blue-soft min-[1180px]:block" aria-label="Primary" onMouseLeave={handleLeave}>
        <ul className="mx-auto flex max-w-6xl items-center justify-between gap-1 px-4">
          {navItems.map((item, index) => {
            const live = resolveHref(item.href);
            const open = activeMega === index;
            return (
              <li key={item.label} onMouseEnter={() => (item.megaMenu ? handleEnter(index) : setActiveMega(null))}>
                {item.megaMenu ? (
                  live ? (
                    <a href={live} className="inline-flex items-center px-2 py-3 text-[13px] font-semibold text-navy" aria-expanded={open} onFocus={() => handleEnter(index)}>
                      {item.label}
                    </a>
                  ) : (
                    <button type="button" className="inline-flex items-center px-2 py-3 text-[13px] font-semibold text-navy" aria-expanded={open} onFocus={() => handleEnter(index)}>
                      {item.label}
                    </button>
                  )
                ) : (
                  <SiteLink href={item.href} soon className="px-2 py-3 text-[13px] font-semibold text-navy">
                    {item.label}
                  </SiteLink>
                )}
              </li>
            );
          })}
        </ul>
        {activeMega !== null && navItems[activeMega]?.megaMenu && (
          <div className="absolute left-0 right-0 top-full z-50 px-4 pt-3" onMouseEnter={() => handleEnter(activeMega)}>
            <div className="mx-auto max-w-6xl">
              <MegaPanel item={navItems[activeMega]} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
