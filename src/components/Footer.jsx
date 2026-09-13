import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const productLinks = [
    { label: "Home", href: "#home" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
  ];

  const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ];

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-0">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2"
            >
              <span className="gradient-bg flex h-6 w-6 items-center justify-center rounded-md text-[9px] font-bold text-white">
                DS
              </span>

              <span className="text-lg font-bold tracking-tight text-gray-900">
                Dev
                <span className="brand-gradient">
                  Stack
                </span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-xs leading-5 text-gray-500 sm:text-sm">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center gap-3">
                <FaGithub className="h-4 w-4" />

                <FaFacebookF className="h-4 w-4" />

                <FaXTwitter className="h-4 w-4" />

                <FaLinkedinIn className="h-4 w-4" />

            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-500 transition hover:text-gray-900 sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-500 transition hover:text-gray-900 sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-500 transition hover:text-gray-900 sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400 sm:text-sm">
            © {new Date().getFullYear()} DevStack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-xs text-gray-400 transition hover:text-gray-900 sm:text-sm"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-xs text-gray-400 transition hover:text-gray-900 sm:text-sm"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;