import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import FloatingStickyBar from "./FloatingStickyBar";

export const Layout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-heading flex flex-col font-primary selection:bg-main-blue selection:text-black">
      {/* Mobile drawer navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main header navbar */}
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      {/* Main page content routed through outlet */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Floating sticky presale timer & buy bar */}
      <FloatingStickyBar />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
