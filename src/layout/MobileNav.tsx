import React, { useEffect, useRef, useState } from "react";
import BrandLogo from "../components/BrandLogo";
import SiteLink from "../components/SiteLink";
import { navItems } from "../data/navigation";
import { resolveHref } from "../lib/links";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-[60] min-[1100px]:hidden ${isOpen ? "" : "pointer-events-none"}`}
      hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-navy/40"
        onClick={onClose}
      />
      <nav
        aria-label="Mobile"
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-none"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <a href="/" onClick={onClose} aria-label="Luma Pay home">
            <BrandLogo size="sm" />
          </a>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="space-y-1">
            {navItems.map((item, idx) => {
              const live = resolveHref(item.href);
              const expanded = expandedIndex === idx;
              return (
                <li key={item.label} className="border-b border-line">
                  <div className="flex items-center justify-between gap-3 py-1">
                    {live ? (
                      <a
                        href={live}
                        onClick={onClose}
                        className="py-2 text-lg font-medium text-navy"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 py-2 text-lg font-medium text-navy">
                        {item.label}
                        {!item.megaMenu && (
                          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
                            Soon
                          </span>
                        )}
                      </span>
                    )}
                    {item.megaMenu && (
                      <button
                        type="button"
                        onClick={() => setExpandedIndex(expanded ? null : idx)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                      >
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                          fill="currentColor"
                        >
                          <path d="M5.2 7.4a.75.75 0 0 1 1.06 0L10 11.14l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.46a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.megaMenu && expanded && (
                    <div className="pb-4 pl-1">
                      <p className="pb-3 text-sm font-semibold text-accent-dark">Coming soon</p>
                      <ul className="space-y-3">
                        {item.megaMenu.columns.flatMap((col) =>
                          col.links.map((sublink) => (
                            <li key={sublink.label}>
                              <SiteLink
                                href={sublink.href}
                                external={sublink.external}
                                soon
                                onClick={onClose}
                                className="text-base text-ink"
                              >
                                {sublink.label}
                              </SiteLink>
                              {sublink.sublinks && sublink.sublinks.length > 0 && (
                                <ul className="mt-1.5 space-y-1 pl-3">
                                  {sublink.sublinks.map((deepLink) => (
                                    <li key={deepLink.label}>
                                      <SiteLink href={deepLink.href} soon className="text-sm text-muted">
                                        {deepLink.label}
                                      </SiteLink>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          )),
                        )}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="space-y-3 border-t border-line px-5 py-5">
          <SiteLink href="#get-started" onClick={onClose} className="btn btn-secondary w-full">
            Get Started
          </SiteLink>
          <SiteLink href="#services" onClick={onClose} className="btn btn-primary w-full">
            Explore Services
          </SiteLink>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
