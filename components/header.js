"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <Link href="/" className="brand">
          Trimurti Enterprise
        </Link>
        <nav className="nav" aria-label="Primary">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="nav__link"
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" className="button">
          Get Quote
        </Link>
        <details className="menu-toggle">
          <summary>Menu</summary>
          <div className="topbar__mobile">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="nav__link">
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}


