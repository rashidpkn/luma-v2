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
    <div id="mobile-menu" className={`fixed inset-0 z-[70] min-[1180px]:hidden ${isOpen ? "" : "pointer-events-none"}`} hidden={!isOpen}>
      <div className="flex h-full flex-col bg-blue-soft text-navy">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="/" onClick={onClose} aria-label="Luma Pay home">
            <BrandLogo size="sm" />
          </a>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 items-center rounded-full bg-navy px-4 text-sm font-semibold text-[#e8f4fc]"
          >
            Close
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-8">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              const live = resolveHref(item.href);
              const expanded = expandedIndex === index;
              return (
                <li key={item.label} className="border-b border-line">
                  <div className="flex items-center justify-between gap-3">
                    {live ? (
                      <a href={live} onClick={onClose} className="py-4 text-2xl font-semibold tracking-tight text-navy">
                        {item.label}
                      </a>
                    ) : (
                      <span className="inline-flex flex-wrap items-center gap-2 py-4 text-2xl font-semibold tracking-tight text-navy">
                        {item.label}
                        {!item.megaMenu && (
                          <span className="rounded-full bg-navy px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#e8f4fc]">
                            Soon
                          </span>
                        )}
                      </span>
                    )}
                    {item.megaMenu && (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                        onClick={() => setExpandedIndex(expanded ? null : index)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-[#e8f4fc]"
                      >
                        <svg viewBox="0 0 20 20" className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} fill="currentColor" aria-hidden="true">
                          <path d="M5.2 7.4a.75.75 0 0 1 1.06 0L10 11.14l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.46a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.megaMenu && expanded && (
                    <div className="pb-4">
                      {item.megaMenu.description && (
                        <p className="mb-3 max-w-md text-sm leading-relaxed text-muted">{item.megaMenu.description}</p>
                      )}
                      <p className="mb-3 text-sm font-semibold text-navy">Coming soon</p>
                      <ul className="space-y-2">
                        {item.megaMenu.columns.flatMap((column) =>
                          column.links.map((link) => (
                            <li key={link.label}>
                              <SiteLink href={link.href} external={link.external} soon onClick={onClose} className="text-base text-ink">
                                {link.label}
                              </SiteLink>
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
          <div className="mt-8 grid gap-3">
            <SiteLink href="#services" onClick={onClose} className="btn btn-soft w-full">
              Explore Services
            </SiteLink>
            <SiteLink href="#get-started" onClick={onClose} className="btn btn-primary w-full">
              Download App
            </SiteLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
