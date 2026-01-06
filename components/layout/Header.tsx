"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Programs & Events", href: "/programs" },
  { label: "Women Trailblazers", href: "/trailblazers" },
  { label: "Opportunity Repository", href: "/opportunity" },
  { label: "Learning Hub", href: "/hub" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 w-full px-20 pt-8 pb-4">
      <div className="max-w-7xl mx-auto">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center whitespace-nowrap font-montserrat font-medium text-3xl tracking-tight leading-8"
        >
          <span className="text-gray-900 tracking-tight">SheBuilds</span>
          <span className="text-teal-700 tracking-tight">AI</span>
        </Link>

        <ul className="inline-flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-montserrat font-medium text-base tracking-normal leading-normal transition-colors hover:text-teal-700 ${
                    isActive ? "text-teal-700" : "text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      </div>
    </header>
  );
}
