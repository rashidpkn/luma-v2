import React, { useCallback, useRef, useState } from "react";
import BrandLogo from "../components/BrandLogo";
import SiteLink from "../components/SiteLink";
import { navItems, type NavDropdownItem } from "../data/navigation";
import { resolveHref } from "../lib/links";

interface HeaderProps {
  onOpenMobileMenu: () => void;
  menuOpen: boolean;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="currentColor"
    >
      <path d="M5.2 7.4a.75.75 0 0 1 1.06 0L10 11.14l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.46a.75.75 0 0 1 0-1.06Z" />
    </svg>
  );
}

function MegaPanel({ item }: { item: NavDropdownItem }) {
  if (!item.megaMenu) return null;
  const links = item.megaMenu.columns.flatMap((col) => col.links);

  return (
    <div className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
        <div className="max-w-md">
          <p className="text-2xl font-semibold tracking-tight text-navy">
            {item.megaMenu.title}
          </p>
          {item.megaMenu.description && (
            <p className="mt-3 text-base leading-relaxed text-muted">
              {item.megaMenu.description}
            </p>
          )}
          <p className="mt-4 text-sm font-semibold text-accent-dark">Coming soon</p>
        </div>
        <ul className="grid content-start gap-x-8 gap-y-5 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.label}>
              <SiteLink
                href={link.href}
                external={link.external}
                soon
                className="text-base font-medium text-navy"
              >
                {link.label}
              </SiteLink>
              {link.sublinks && link.sublinks.length > 0 && (
                <ul className="mt-2 space-y-1.5">
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
    closeTimeout.current = setTimeout(() => {
      setActiveMega(null);
    }, 180);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-2.5">
          <a href="/" className="inline-flex shrink-0 items-center" aria-label="Luma Pay home">
            <BrandLogo size="sm" className="md:h-14" />
          </a>

          <div className="hidden items-center gap-2 min-[1100px]:flex">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full px-2.5 py-2 text-sm font-semibold text-navy"
            >
              <img alt="" width={22} height={22} className="h-[22px] w-[22px] rounded-full" src="/images/flags/en.svg" />
              <span>EN</span>
            </button>
            <SiteLink href="#get-started" className="btn btn-secondary btn-sm">
              Download App
            </SiteLink>
            <SiteLink href="#early-access" className="btn btn-primary btn-sm">
              Get Started
            </SiteLink>
          </div>

          <div className="flex items-center gap-1.5 min-[1100px]:hidden">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-2 text-sm font-semibold text-navy"
            >
              <img alt="" width={20} height={20} className="h-5 w-5 rounded-full" src="/images/flags/en.svg" />
              EN
            </button>
            <SiteLink href="#early-access" className="btn btn-primary btn-sm">
              <span className="sm:hidden">Start</span>
              <span className="hidden sm:inline">Get Started</span>
            </SiteLink>
            <button
              type="button"
              onClick={onOpenMobileMenu}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="hidden border-t border-line min-[1100px]:block" aria-label="Primary">
          <ul className="flex items-center justify-center">
            {navItems.map((item, index) => {
              const live = resolveHref(item.href);
              const open = activeMega === index;
              return (
                <li
                  key={item.label}
                  onMouseEnter={() => (item.megaMenu ? handleEnter(index) : setActiveMega(null))}
                  onMouseLeave={handleLeave}
                >
                  {item.megaMenu ? (
                    live ? (
                      <a
                        href={live}
                        className="nav-link"
                        aria-expanded={open}
                        onFocus={() => handleEnter(index)}
                      >
                        {item.label}
                        <Chevron open={open} />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="nav-link"
                        aria-expanded={open}
                        onFocus={() => handleEnter(index)}
                      >
                        {item.label}
                        <Chevron open={open} />
                      </button>
                    )
                  ) : (
                    <SiteLink href={item.href} soon className="nav-link">
                      {item.label}
                    </SiteLink>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {navItems.map((item, index) =>
        item.megaMenu ? (
          <div
            key={`mega-${item.label}`}
            className={`absolute left-0 right-0 hidden min-[1100px]:block ${
              activeMega === index ? "" : "pointer-events-none invisible"
            }`}
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={handleLeave}
          >
            {activeMega === index && <MegaPanel item={item} />}
          </div>
        ) : null,
      )}
    </header>
  );
};

export default Header;
