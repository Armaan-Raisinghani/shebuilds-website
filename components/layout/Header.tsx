"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Programs & Events", href: "/programs" },
  { label: "Women Trailblazers", href: "/trailblazers" },
  { label: "Insights Hub", href: "/insights" },
  { label: "Opportunity Repository", href: "/opportunity" },
  { label: "Learning Hub", href: "/hub" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative z-20 w-full px-4 sm:px-8 lg:px-20 pt-6 sm:pt-8 pb-4">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center justify-center whitespace-nowrap font-montserrat font-medium text-2xl sm:text-3xl tracking-tight leading-8"
          >
            <span className="text-gray-900 tracking-tight">SheBuilds</span>
            <span className="text-teal-700 tracking-tight">AI</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:inline-flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-montserrat font-medium text-sm xl:text-base tracking-normal leading-normal transition-colors hover:text-teal-700 ${
                      isActive ? "text-teal-700" : "text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-900 hover:text-teal-700 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t border-gray-100 animate-fade-in">
            <ul className="flex flex-col py-4 px-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 font-montserrat font-medium text-base tracking-normal leading-normal transition-colors hover:text-teal-700 hover:bg-gray-50 rounded-lg ${
                        isActive ? "text-teal-700 bg-teal-50" : "text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
