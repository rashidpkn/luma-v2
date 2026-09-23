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
      description: "Everything you need for your personal financial journey. From multi-currency accounts to spending cards, manage your funds with confidence and convenience.",
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
            { label: "Rewards", href: "#rewards" },
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
      description: "Enterprise-grade financial solutions for your business. Manage corporate expenses, treasury, and international payments with our comprehensive business tools.",
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
      description: "Trade, swap, and convert your currencies with ease. Access the most competitive rates and secure transactions for all your foreign exchange needs.",
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
    label: "Resources",
    href: "#resources",
    megaMenu: {
      title: "Resources",
      description: "Explore Luma Pay resources. Access our documentation, learn about our technology, and discover how we can help you manage your global finances.",
      columns: [
        {
          links: [
            { label: "Documentation", href: "#docs" },
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
    href: "#compare",
    megaMenu: {
      title: "How We Compare",
      description: "",
      columns: [
        {
          links: [
            { label: "Luma Pay VS Wise", href: "/blog/digitap-vs-wise" },
            { label: "Luma Pay VS Binance", href: "/blog/digitap-vs-binance" },
            { label: "Luma Pay VS Ramp", href: "/blog/digitap-vs-ramp" },
          ],
        },
        {
          links: [
            { label: "Luma Pay VS Transak", href: "/blog/digitap-vs-transak" },
            { label: "Luma Pay VS Revolut", href: "/blog/digitap-vs-revolut" },
          ],
        },
      ],
    },
  },
  { label: "About Luma Pay", href: "/about" },
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
      { label: "Luma Pay VS Wise", href: "/blog/digitap-vs-wise" },
      { label: "Luma Pay VS Binance", href: "/blog/digitap-vs-binance" },
      { label: "Luma Pay VS Ramp", href: "/blog/digitap-vs-ramp" },
      { label: "Luma Pay VS Transak", href: "/blog/digitap-vs-transak" },
      { label: "Luma Pay VS Revolut", href: "/blog/digitap-vs-revolut" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "Early Access", href: "#early-access" },
      { label: "Rewards Program", href: "#rewards" },
    ],
  },
];
