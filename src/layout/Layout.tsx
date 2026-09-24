import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import FloatingStickyBar from "./FloatingStickyBar";

export const Layout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-navy font-primary text-[#e8f4fc]">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <Header menuOpen={mobileMenuOpen} onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      <main id="content" className="flex-1 pb-28">
        <Outlet />
      </main>
      <FloatingStickyBar />
      <Footer />
    </div>
  );
};

export default Layout;
