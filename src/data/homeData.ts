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
  { name: "telegram", src: "/images/hero/telegram.png", width: 35, height: 35, href: "https://t.me/lumapay_community" },
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
    title: "Multi-Currency Accounts",
    description: "Luma Pay brings global finance into one platform. We provide comprehensive multi-currency accounts that let you hold and manage funds across borders seamlessly in a single easy-to-use dashboard.",
    image: "/images/homev3/why-choose/accounts-phone.png",
    imageRight: true,
  },
  {
    id: 2,
    title: "Instant Foreign Exchange",
    description: "Luma Pay enables instant conversions between currencies at competitive rates. Whether you’re paying a foreign invoice or converting balances, exchanges happen in seconds, giving you real-time flexibility.",
    image: "/images/homev3/why-choose/2.png",
    imageRight: false,
  },
  {
    id: 3,
    title: "30+ Currencies Supported",
    description: "Luma Pay supports over 30 fiat currencies and multiple digital assets. Users can hold, send, and exchange money in the form they need, anytime, anywhere, making international transactions accessible.",
    image: "/images/homev3/why-choose/3.png",
    imageRight: true,
  },
  {
    id: 4,
    title: "Virtual Currency Capabilities",
    description: "Beyond traditional fiat, Luma Pay offers virtual currency conversions as an additional capability, allowing you to bridge traditional banking with modern digital assets securely.",
    image: "/images/homev3/why-choose/4.png",
    imageRight: false,
  },
  {
    id: 5,
    title: "Cross-Border Payments",
    description: "Send and receive money worldwide with ease through international remittance networks. Luma Pay allows users to make borderless payments and transfers without restrictions or excessive fees.",
    image: "/images/homev3/why-choose/5.png",
    imageRight: true,
  },
  {
    id: 6,
    title: "Bank-Grade Security",
    description: "Your assets are protected by advanced technologies used by global financial institutions. Luma Pay employs end-to-end encryption to ensure your transactions are always secure.",
    image: "/images/homev3/why-choose/6.webp",
    imageRight: false,
  },
  {
    id: 7,
    title: "Payment Cards",
    description: "Activate virtual cards instantly and order physical cards for global spending. Use your Luma Pay balance anywhere, giving you complete flexibility for your international spending.",
    image: "/images/homev3/why-choose/7.png",
    imageRight: true,
  },
  {
    id: 8,
    title: "24/7 Priority Support",
    description: "Luma Pay’s dedicated support team is available 24/7 to assist with all your account needs. Whether you’re managing transfers or exploring new features, help is always a message away.",
    image: "/images/homev3/why-choose/8.png",
    imageRight: false,
  },
  {
    id: 9,
    title: "Registered MSB",
    description: "Luma Pay operates as a registered Money Services Business under strict financial standards, ensuring transparency, regulatory compliance, and maximum safety for all users.",
    image: "/images/homev3/why-choose/9.webp",
    imageRight: true,
  },
  {
    id: 10,
    title: "Business & Individual Accounts",
    description: "Whether you are a freelancer receiving international payments or a business managing global payroll, Luma Pay provides tailored solutions for both individuals and enterprises.",
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
    title: "Multi-Currency Accounts",
    description: "Luma Pay lets you hold and manage over 30 different fiat currencies in one account. Instantly transfer, exchange, and send your funds worldwide with transparent fees and real-time exchange rates.",
    bgImage: "/images/homev3/feature/Multi-Currenc.webp",
  },
  {
    title: "Virtual Currency Integrations",
    description: "Luma Pay seamlessly bridges traditional finance with virtual currency capabilities. Securely manage, convert, and transact with digital assets using our advanced infrastructure, allowing you to access modern finance with ease.",
    bgImage: "/images/homev3/feature/wallet.webp",
  },
  {
    title: "Instant Foreign Exchange",
    description: "Luma Pay enables instant, low-fee foreign exchange conversions. Seamlessly swap between currencies when making international payments or managing your global business operations.",
    bgImage: "/images/homev3/feature/Conversion.webp",
  },
  {
    title: "Luma Pay Cards",
    description: "Spend your Luma Pay balance anywhere Visa is accepted. Activate your virtual card instantly and order a physical card for global use. Enjoy instant payments and complete freedom in everyday transactions.",
    bgImage: "/images/homev3/feature/VirtualCrypto.webp",
  },
  {
    title: "Tailored Account Plans",
    description: "Choose from a range of flexible account tiers designed to match your lifestyle and business needs. From individual accounts to enterprise-grade solutions, Luma Pay provides the tools you need to succeed globally.",
    bgImage: "/images/homev3/feature/CryptoBank.webp",
  },
  {
    title: "Rewards & Cashback",
    description: "Earn cashback and rewards with every eligible transaction through the Luma Pay rewards program. Transform your everyday payments, foreign exchanges, and account usage into tangible value.",
    bgImage: "/images/homev3/feature/cashback.webp",
  },
];
