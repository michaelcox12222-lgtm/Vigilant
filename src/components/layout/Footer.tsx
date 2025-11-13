import vigilantLogo from "../../assets/viglant.png";

const companyLinks = [
  { label: "App Features", href: "features" },
  { label: "Pricing", href: "pricing" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "privacy" },
  { label: "Terms and Conditions", href: "terms" },
  { label: "Law Enforcement Guide", href: "law-enforcement" },
];

export function Footer({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer
      id="contact"
      className="bg-white/5 backdrop-blur-3xl border-t border-white/20 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img src={vigilantLogo} alt="Vigilant Logo" className="h-16 mb-4" />
            <p className="text-gray-400 max-w-md">
              AI-powered safety, made simple. Real-time alerts and peace of mind
              wherever you go.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-green-400 transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-green-400 transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/30 flex flex-col items-center gap-4">
          <img
            src={vigilantLogo}
            alt="Vigilant"
            className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={() => handleLinkClick("home")}
          />
          <p className="text-gray-400 text-center">
            &copy; {currentYear} Vigilant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
