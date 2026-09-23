export interface HeroBadge {
  name: string;
  src: string;
  width: number;
  height: number;
  href?: string;
}

export const heroBadges: HeroBadge[] = [
  { name: "visa", src: "/images/currencies/visa.png", width: 45, height: 45 },
  { name: "apple-pay", src: "/images/hero/apple-pay.png", width: 60, height: 60 },
  { name: "google-pay", src: "/images/hero/google-pay.png", width: 30, height: 30 },
  { name: "ethereum", src: "/images/hero/eth.svg", width: 35, height: 35 },
  { name: "solidproof", src: "/images/hero/sp-logo.png", width: 35, height: 35 },
  { name: "Coinsult", src: "/images/hero/cs-logo.png", width: 35, height: 35 },
  { name: "discord", src: "/images/hero/discord.svg", width: 35, height: 35, href: "https://discord.com/invite/gcdZnEj38X" },
  { name: "telegram", src: "/images/hero/telegram.png", width: 35, height: 35, href: "https://t.me/digitap_app_community" },
];

export interface PartnerLogo {
  name: string;
  src: string;
  href: string;
  width: number;
  height: number;
}

export const asSeenInLogos: PartnerLogo[] = [
  { name: "CoinMarketCap", src: "/images/homev3/logo/coinmarketcap_logo.png", href: "https://coinmarketcap.com/", width: 200, height: 200 },
  { name: "MSN", src: "/images/homev3/logo/msn.png", href: "https://www.msn.com/", width: 150, height: 150 },
  { name: "Business Insider", src: "/images/homev3/logo/BusinessInsider.png", href: "https://www.businessinsider.com/", width: 150, height: 150 },
  { name: "Brave New Coin", src: "/images/homev3/logo/bnc.png", href: "https://bravenewcoin.com/", width: 220, height: 220 },
  { name: "MEXC", src: "/images/homev3/logo/mexc.svg", href: "https://www.mexc.co/", width: 220, height: 220 },
  { name: "Coinpedia", src: "/images/homev3/logo/coinpedia.png", href: "https://coinpedia.org/", width: 220, height: 220 },
];

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageRight?: boolean;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: 1,
    title: "All-in-One Crypto Fiat Banking Application",
    description: "DigiTap brings every aspect of modern finance into one platform. As a complete crypto fiat banking application, it unites fiat and crypto accounts, digital asset banking, cards, and payments in a single easy-to-use dashboard. Manage, convert, and spend your assets without switching between apps.",
    image: "/images/homev3/why-choose/1.png",
    imageRight: true,
  },
  {
    id: 2,
    title: "Seamless Crypto-Fiat Conversions",
    description: "DigiTap is a crypto-fiat bank that enables instant conversions between digital and traditional currencies at competitive rates. Whether you’re paying in crypto or withdrawing in fiat, conversions happen in seconds, giving you real-time flexibility across your accounts.",
    image: "/images/homev3/why-choose/2.png",
    imageRight: false,
  },
  {
    id: 3,
    title: "Multi-Currency Support",
    description: "DigiTap supports 20+ fiat currencies and over 100 cryptocurrencies. Users can hold, send, and exchange money in any form, anytime, anywhere, making global finance more accessible than ever.",
    image: "/images/homev3/why-choose/3.png",
    imageRight: true,
  },
  {
    id: 4,
    title: "Advanced Digital Asset Banking",
    description: "DigiTap offers a multi-chain crypto wallet for storing and managing all your digital assets. Its advanced digital asset banking infrastructure supports staking, transfers, and integration with DeFi protocols for maximum utility and growth.",
    image: "/images/homev3/why-choose/4.png",
    imageRight: false,
  },
  {
    id: 5,
    title: "Global Payment Freedom",
    description: "Send and receive money worldwide with ease through SEPA, SWIFT, and blockchain networks. DigiTap allows users to make borderless payments and transfers without restrictions, delays, or excessive fees.",
    image: "/images/homev3/why-choose/5.png",
    imageRight: true,
  },
  {
    id: 6,
    title: "Bank-Grade Security",
    description: "Your assets are protected by the same advanced technologies used by global financial institutions. DigiTap employs end-to-end encryption, multi-signature protection, and cold storage solutions.",
    image: "/images/homev3/why-choose/6.webp",
    imageRight: false,
  },
  {
    id: 7,
    title: "Crypto Cards",
    description: "Activate a virtual crypto card instantly and order physical cards for global spending. With DigiTap’s Visa-powered solution, you can use your crypto fiat bank balance anywhere, whether you're paying for your latte or shopping online.",
    image: "/images/homev3/why-choose/7.png",
    imageRight: true,
  },
  {
    id: 8,
    title: "24/7 Crypto Fiat Bank Support",
    description: "DigiTap’s dedicated support team is available 24/7 to assist with all crypto fiat bank services. Whether you’re managing transfers, troubleshooting your app, or exploring new features, help is always just a message away.",
    image: "/images/homev3/why-choose/8.png",
    imageRight: false,
  },
  {
    id: 9,
    title: "Regulatory Compliance",
    description: "DigiTap operates under strict financial standards to ensure transparency and safety.",
    image: "/images/homev3/why-choose/9.webp",
    imageRight: true,
  },
  {
    id: 10,
    title: "Earn with $TAP Token",
    description: "Users can maximize their rewards through the $TAP token. Earn cashback on every transaction, reduced fees, and exclusive benefits within the DigiTap ecosystem.",
    image: "/images/homev3/why-choose/10.png",
    imageRight: false,
  },
];

export interface FeatureCard {
  title: string;
  description: string;
  bgImage: string;
}

export const featureCards: FeatureCard[] = [
  {
    title: "Multi-Currency Fiat Banking",
    description: "Unlike traditional banks, our crypto fiat bank lets you hold and manage over 20 different fiat currencies in one account. Instantly transfer, exchange, and spend your funds worldwide with transparent fees and real-time exchange rates.",
    bgImage: "/images/homev3/feature/Multi-Currenc.webp",
  },
  {
    title: "Digital Asset Banking Wallets",
    description: "Our digital asset banking solution supports more than 100 cryptocurrencies across multiple blockchains. Securely store, send, and receive digital assets through advanced wallet infrastructure with multi-signature protection and cold storage. DigiTap makes digital asset management simple, safe, and fully integrated with your daily finances.",
    bgImage: "/images/homev3/feature/wallet.webp",
  },
  {
    title: "Instant Crypto–Fiat Conversion",
    description: "As a full-service crypto fiat bank, DigiTap enables instant, low-fee conversions between your crypto and fiat balances.",
    bgImage: "/images/homev3/feature/Conversion.webp",
  },
  {
    title: "Tap Virtual Crypto Card",
    description: "Spend your crypto fiat bank balance anywhere Visa is accepted. Activate your virtual card instantly and order a physical card for global use. Enjoy instant payments, cashback rewards, and complete freedom to use your digital assets in everyday transactions.",
    bgImage: "/images/homev3/feature/VirtualCrypto.webp",
  },
  {
    title: "Crypto Fiat Bank Account Plans",
    description: "Choose from a range of flexible account tiers designed to match your lifestyle and business needs. Each plan unlocks unique features within the crypto fiat banking application, from higher transaction limits to premium support and $TAP token crypto rewards.",
    bgImage: "/images/homev3/feature/CryptoBank.webp",
  },
  {
    title: "Earn Cashback",
    description: "Earn $TAP tokens with every transaction through our crypto fiat bank rewards program. Earn rewards for spending, staking, and utilizing DigiTap's ecosystem, transforming your everyday activities into value.",
    bgImage: "/images/homev3/feature/cashback.webp",
  },
];
