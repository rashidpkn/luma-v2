import React from "react";
import { isExternalHref, resolveHref } from "../lib/links";

interface SiteLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
  /** Show a visible Coming soon marker when the destination is not a real page. */
  soon?: boolean;
}

export const SiteLink: React.FC<SiteLinkProps> = ({
  href,
  className = "",
  children,
  external,
  onClick,
  soon = false,
}) => {
  const resolved = resolveHref(href);

  if (!resolved) {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <span>{children}</span>
        {soon && (
          <span className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            Soon
          </span>
        )}
        <span className="visually-hidden">Coming soon</span>
      </span>
    );
  }

  const openExternal = external || isExternalHref(resolved);

  return (
    <a
      href={resolved}
      className={className}
      target={openExternal ? "_blank" : undefined}
      rel={openExternal ? "noreferrer" : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default SiteLink;
