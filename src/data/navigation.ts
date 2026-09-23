export interface MegaMenuItem {
  title: string;
  description: string;
  columns: {
    title?: string;
    links: { label: string; href: string; external?: boolean; sublinks?: { label: string; href: string }[] }[];
  }[];
}

export interface NavDropdownItem {
  label: string;
  href: string;
  external?: boolean;
  megaMenu?: MegaMenuItem;
}

export const navItems: NavDropdownItem[] = [
  {
    label: "Personal",
    href: "/personal",
    megaMenu: {
      title: "Personal",
      description: "Everything you need for your personal crypto journey. From secure wallets to spending cards, manage your digital assets with confidence and convenience.",
      columns: [
        {
          links: [
            { label: "Plans", href: "/plans" },
            { label: "Debit Card", href: "/personal/debit-card" },
            { label: "Crypto Debit Card", href: "/personal/crypto-debit-card" },
          ],
        },
        {
          links: [
            { label: "Digital Wallet", href: "/personal/digital-wallet" },
            { label: "Virtual Card", href: "/personal/virtual-card" },
            { label: "Staking", href: "https://presale.digitap.app", external: true },
          ],
        },
      ],
    },
  },
  {
    label: "Business",
    href: "/business",
    megaMenu: {
      title: "Business",
      description: "Enterprise-grade crypto solutions for your business. Manage corporate expenses, treasury, and payments with our comprehensive business tools.",
      columns: [
        {
          links: [
            { label: "Corporate Card", href: "/business/corporate-card" },
            { label: "Whitelabel", href: "/whitelabel" },
          ],
        },
        {
          links: [
            { label: "Business Crypto Wallet", href: "/business/business-crypto-wallet" },
          ],
        },
      ],
    },
  },
  {
    label: "Exchange",
    href: "/exchange",
    megaMenu: {
      title: "Exchange",
      description: "Trade, swap, and convert your cryptocurrencies with ease. Access the most competitive rates and secure transactions for all your crypto exchange needs.",
      columns: [
        {
          links: [
            {
              label: "Buy and Sell",
              href: "/exchange",
              sublinks: [
                { label: "Bitcoin", href: "/exchange/buy-sell/bitcoin" },
                { label: "Ethereum", href: "/exchange/buy-sell/ethereum" },
                { label: "XRP", href: "/exchange/buy-sell/xrp" },
                { label: "Solana", href: "/exchange/buy-sell/solana" },
              ],
            },
          ],
        },
        {
          links: [
            { label: "Swap", href: "/exchange/swap" },
          ],
        },
        {
          links: [
            {
              label: "Crypto Onramp/Offramp",
              href: "/exchange/crypto-onramp-offramp",
              sublinks: [
                { label: "Crypto-to-Fiat", href: "/exchange/crypto-onramp-offramp/crypto-to-fiat" },
                { label: "Fiat-to-Crypto", href: "/exchange/crypto-onramp-offramp/fiat-to-crypto" },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    label: "$TAP Token",
    href: "https://presale.digitap.app",
    external: true,
    megaMenu: {
      title: "$TAP Token",
      description: "Join the Digitap presale and be part of the future. Access our whitepaper, explore our technology, and participate in our token sale.",
      columns: [
        {
          links: [
            { label: "Whitepaper", href: "https://whitepaper.digitap.app/", external: true },
          ],
        },
        {
          links: [
            { label: "Github", href: "/#github", external: true },
          ],
        },
      ],
    },
  },
  { label: "Plans", href: "/plans" },
  { label: "News", href: "/news" },
  { label: "How It Works", href: "/how-it-works" },
  {
    label: "How We Compare",
    href: "https://presale.digitap.app",
    external: true,
    megaMenu: {
      title: "How We Compare",
      description: "",
      columns: [
        {
          links: [
            { label: "Digitap VS Wise", href: "/blog/digitap-vs-wise" },
            { label: "Digitap VS Binance", href: "/blog/digitap-vs-binance" },
            { label: "Digitap VS Ramp", href: "/blog/digitap-vs-ramp" },
          ],
        },
        {
          links: [
            { label: "Digitap VS Transak", href: "/blog/digitap-vs-transak" },
            { label: "Digitap VS Revolut", href: "/blog/digitap-vs-revolut" },
          ],
        },
      ],
    },
  },
  { label: "About DigiTap", href: "/about" },
];

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Crypto Markets",
    links: [
      { label: "Bitcoin Price", href: "/exchange/buy-sell/bitcoin" },
      { label: "Ethereum Price", href: "/exchange/buy-sell/ethereum" },
      { label: "XRP Price", href: "/exchange/buy-sell/xrp" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Tutorials", href: "/tutorials" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "Digitap VS Wise", href: "/blog/digitap-vs-wise" },
      { label: "Digitap VS Binance", href: "/blog/digitap-vs-binance" },
      { label: "Digitap VS Ramp", href: "/blog/digitap-vs-ramp" },
      { label: "Digitap VS Transak", href: "/blog/digitap-vs-transak" },
      { label: "Digitap VS Revolut", href: "/blog/digitap-vs-revolut" },
    ],
  },
  {
    title: "Presale",
    links: [
      { label: "Audit", href: "https://presale.digitap.app/audit", external: true },
      { label: "Join Presale", href: "https://presale.digitap.app", external: true },
      { label: "How to Buy", href: "https://presale.digitap.app/how-to-buy", external: true },
      { label: "Tokenomics", href: "https://presale.digitap.app/tokenomics", external: true },
      { label: "Whitepaper", href: "https://whitepaper.digitap.app/", external: true },
    ],
  },
];
