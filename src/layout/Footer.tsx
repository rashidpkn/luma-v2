import React from "react";
import { footerColumns } from "../data/navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#071422] font-primary" id="footer">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between">
          <a href="/" className="inline-block">
            <img
              alt="Luma Pay Logo"
              width="160"
              height="40"
              className="h-9 w-auto"
              src="/images/luma-logo-white.png"
            />
          </a>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://x.com/LumaPay_app"
              aria-label="X (Twitter)"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0a192f] text-white transition-colors hover:border-main-blue/40 hover:text-main-blue"
            >
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="h-4 w-4">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/lumapay_community"
              aria-label="Telegram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0a192f] text-white transition-colors hover:border-main-blue/40 hover:text-main-blue"
            >
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3584 9.38246C11.3857 9.78702 9.4418 10.6244 6.5266 11.8945C6.05321 12.0827 5.80524 12.2669 5.78266 12.4469C5.74451 12.7513 6.12561 12.8711 6.64458 13.0343C6.71517 13.0565 6.78832 13.0795 6.8633 13.1039C7.37388 13.2698 8.06071 13.464 8.41776 13.4717C8.74164 13.4787 9.10313 13.3452 9.50222 13.0711C12.226 11.2325 13.632 10.3032 13.7203 10.2832C13.7826 10.269 13.8689 10.2513 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9739 10.48C13.9361 10.641 12.4401 12.0318 11.666 12.7515C11.4351 12.9661 11.2101 13.1853 10.9833 13.4039C10.509 13.8611 10.1533 14.204 11.003 14.764C11.8644 15.3317 12.7323 15.8982 13.5724 16.4971C13.9867 16.7925 14.359 17.0579 14.8188 17.0156C15.0861 16.991 15.3621 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.3821 16.6352 8.80083C16.6484 8.6623 16.6318 8.485 16.6185 8.40717C16.6052 8.32934 16.5773 8.21844 16.4762 8.13635C16.3563 8.03913 16.1714 8.01863 16.0887 8.02009C15.7125 8.02672 15.1355 8.22737 12.3584 9.38246Z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com/@lumapay"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0a192f] text-white transition-colors hover:border-main-blue/40 hover:text-main-blue"
            >
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="h-4 w-4">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.com/invite/gcdZnEj38X"
              aria-label="Discord"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0a192f] text-white transition-colors hover:border-main-blue/40 hover:text-main-blue"
            >
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="h-5 w-5">
                <path d="M693.152 0c51.153 0 92.41 41.358 94.848 90.028V873l-97.395-82.68-53.482-48.67-58.356-50.852 24.376 80.207H92.41C41.403 771.005 0 732.265 0 680.94V90.21C0 41.54 41.476.11 92.592.11h600.305z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@LumaPayWorld"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0a192f] text-white transition-colors hover:border-main-blue/40 hover:text-main-blue"
            >
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 576 512" className="h-5 w-5">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 1" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="text-sm text-gray-400 transition-colors hover:text-main-blue"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Get in touch</h4>
            <p className="mb-3 text-sm leading-relaxed text-gray-400">
              We’re here to help 24/7 on email or submit a contact form
            </p>
            <div className="space-y-1.5">
              <a href="mailto:support@lumapay.app" className="block text-sm text-main-blue hover:underline">
                support@lumapay.app
              </a>
              <a href="mailto:marketing@lumapay.app" className="block text-sm text-main-blue hover:underline">
                marketing@lumapay.app
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <span className="text-xs text-gray-400">Download the Luma Pay app</span>
              <div className="flex gap-2">
                <a href="#get-started" target="_blank" rel="noreferrer">
                  <img src="/images/footer/appStore.svg" alt="App Store" className="h-9 w-auto" />
                </a>
                <a href="#get-started" target="_blank" rel="noreferrer">
                  <img src="/images/footer/googleStore.svg" alt="Google Play" className="h-9 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-[#0a192f] px-5 py-6 text-xs leading-relaxed text-gray-500">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>Copyright © 2026. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="/terms" className="hover:text-gray-300">Terms &amp; Conditions</a>
              <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
              <a href="/cookies" className="hover:text-gray-300">Cookies</a>
              <a href="/editorial" className="hover:text-gray-300">Editorial Policy</a>
            </div>
          </div>
          <p>
            Luma Pay is a fintech application powered by licensed financial partners to provide digital banking services.
            The official beta version of the Luma Pay App is live. Please help us improve the service by providing feedback.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
