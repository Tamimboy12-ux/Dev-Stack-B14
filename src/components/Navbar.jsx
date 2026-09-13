import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-tight"
          >
            <span className="brand-gradient">Dev</span>
            <span className="text-gray-900">Stack</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <nav>
            <ul className="menu menu-horizontal gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="navbar-end hidden gap-3 lg:flex">
          <button className="btn btn-ghost rounded-full px-5">
            Sign In
          </button>

          <button className="btn gradient-bg rounded-full border-none px-6 text-white hover:opacity-90">
            Sign Up
          </button>
        </div>

        <div className="navbar-end lg:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-square btn-ghost"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-3 border-t border-gray-100 pt-4">
              <button className="btn btn-ghost flex-1 rounded-full">
                Sign In
              </button>

              <button className="btn gradient-bg flex-1 rounded-full border-none text-white hover:opacity-90">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;