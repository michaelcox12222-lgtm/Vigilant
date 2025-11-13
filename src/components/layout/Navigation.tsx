import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { ROUTES } from "../../lib/constants";
import { env } from "../../lib/env";
import logo from "../../assets/viglant.png";

export function Navigation({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: ROUTES.home },
    { label: "App Features", href: ROUTES.features },
    { label: "Pricing", href: ROUTES.pricing },
    { label: "About", href: ROUTES.about },
    { label: "Contact", href: ROUTES.contact },
  ];

  const handleNavClick = (href: string) => {
    // Special handling for demo link - open Loom video in new tab
    if (href === "demo") {
      window.open(env.DEMO_URL, "_blank");
      setMobileMenuOpen(false);
      return;
    }

    if (onNavigate) {
      onNavigate(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-[80px] border-b shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
      style={{
        background:
          "linear-gradient(135deg, rgba(30, 58, 95, 0.15) 0%, rgba(26, 157, 143, 0.08) 50%, rgba(30, 58, 95, 0.15) 100%)",
        borderColor: "rgba(30, 58, 95, 0.4)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-transparent to-brand-primary/10 pointer-events-none" />
      <div className="absolute inset-0 border-t border-white/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick(ROUTES.home)}
            aria-label="Navigate to home page"
          >
            <img src={logo} alt="Vigilant Logo" className="h-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-brand-primary transition-colors text-sm cursor-pointer"
                style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => handleNavClick("demo")}
              className="bg-brand-primary hover:bg-brand-primary-hover text-white px-5 py-2.5 shadow-md shadow-brand-primary/30"
              style={{ fontWeight: 500 }}
            >
              Watch Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/30 bg-black/40 backdrop-blur-[60px] shadow-2xl shadow-black/80">
            <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-white/5 pointer-events-none" />
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-300 hover:text-green-400 transition-colors py-2 text-left text-sm cursor-pointer"
                  style={{ fontWeight: 500 }}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("beta")}
                className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white shadow-md shadow-brand-primary/30"
                style={{ fontWeight: 500 }}
              >
                Get the App
              </Button>
              <Button
                onClick={() => handleNavClick("demo")}
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
                style={{ fontWeight: 500 }}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
