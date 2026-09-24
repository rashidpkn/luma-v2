import React from "react";
import BrandLogo from "../components/BrandLogo";
import SiteLink from "../components/SiteLink";
import { footerColumns } from "../data/navigation";

const social = [
  {
    label: "X (Twitter)",
    href: "https://x.com/LumaPay_app",
    icon: (
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/lumapay_community",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3584 9.38246C11.3857 9.78702 9.4418 10.6244 6.5266 11.8945C6.05321 12.0827 5.80524 12.2669 5.78266 12.4469C5.74451 12.7513 6.12561 12.8711 6.64458 13.0343C6.71517 13.0565 6.78832 13.0795 6.8633 13.1039C7.37388 13.2698 8.06071 13.464 8.41776 13.4717C8.74164 13.4787 9.10313 13.3452 9.50222 13.0711C12.226 11.2325 13.632 10.3032 13.7203 10.2832C13.7826 10.269 13.8689 10.2513 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9739 10.48C13.9361 10.641 12.4401 12.0318 11.666 12.7515C11.4351 12.9661 11.2101 13.1853 10.9833 13.4039C10.509 13.8611 10.1533 14.204 11.003 14.764C11.8644 15.3317 12.7323 15.8982 13.5724 16.4971C13.9867 16.7925 14.359 17.0579 14.8188 17.0156C15.0861 16.991 15.3621 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.3821 16.6352 8.80083C16.6484 8.6623 16.6318 8.485 16.6185 8.40717C16.6052 8.32934 16.5773 8.21844 16.4762 8.13635C16.3563 8.03913 16.1714 8.01863 16.0887 8.02009C15.7125 8.02672 15.1355 8.22737 12.3584 9.38246Z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@lumapay",
    icon: (
      <svg viewBox="0 0 448 512" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.com/invite/gcdZnEj38X",
    icon: (
      <svg viewBox="0 0 1024 1024" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M693.152 0c51.153 0 92.41 41.358 94.848 90.028V873l-97.395-82.68-53.482-48.67-58.356-50.852 24.376 80.207H92.41C41.403 771.005 0 732.265 0 680.94V90.21C0 41.54 41.476.11 92.592.11h600.305z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@LumaPayWorld",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5a3 3 0 0 0-2.1 2.1A31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7l6.2 3.5-6.2 3.5Z" />
      </svg>
    ),
  },
];

const legal = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Editorial Policy", href: "/editorial" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white" id="footer">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="inline-flex w-fit rounded-2xl bg-white px-3 py-2" aria-label="Luma Pay home">
            <BrandLogo size="sm" />
          </a>
          <ul className="flex flex-wrap items-center gap-2">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-sky hover:text-sky"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 md:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                {col.title}
              </h2>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <SiteLink
                      href={link.href}
                      external={link.external}
                      className="text-sm text-[#c5d0dc] hover:text-white"
                    >
                      {link.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Get in touch
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-[#c5d0dc]">
              We’re here to help 24/7 on email or submit a contact form
            </p>
            <div className="space-y-1.5">
              <a href="mailto:support@lumapay.app" className="block text-sm text-sky hover:underline">
                support@lumapay.app
              </a>
              <a href="mailto:marketing@lumapay.app" className="block text-sm text-sky hover:underline">
                marketing@lumapay.app
              </a>
            </div>
            <div className="mt-6">
              <p className="mb-2 text-xs text-[#c5d0dc]">Download the Luma Pay app</p>
              <div className="flex flex-wrap gap-2">
                <SiteLink href="#get-started">
                  <img src="/images/footer/appStore.svg" alt="Download on the App Store" className="h-9 w-auto" />
                </SiteLink>
                <SiteLink href="#get-started">
                  <img src="/images/footer/googleStore.svg" alt="Get it on Google Play" className="h-9 w-auto" />
                </SiteLink>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 px-5 py-5 text-xs leading-relaxed text-[#b7c3d0]">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>Copyright © 2026. All Rights Reserved.</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <SiteLink href={item.href} className="hover:text-white">
                    {item.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4">
            Luma Pay is a fintech application powered by licensed financial partners to provide digital banking services.
            The official beta version of the Luma Pay App is live. Please help us improve the service by providing feedback.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
