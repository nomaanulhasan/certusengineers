"use client";

import { useEffect, useRef, useState } from "react";
import useClickOutside from "use-click-outside";
import Link from "next/link";
import clsx from "clsx";
import useScrolled from "@/hooks/useScrolled";
import { NAV_MENU } from "@/lib";

export default function MobileNavigations() {
  const { scrolled, isLoading } = useScrolled(46);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(navMenuRef, (e: MouseEvent) => {
    if (e.target === menuBtnRef.current) return;
    setShowMobileNav(navMenuRef.current === e.target);
  });

  const toggleMenu = () => setShowMobileNav((state) => !state);

  useEffect(() => {
    if (showMobileNav) {
      setIsMenuClosed(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsMenuClosed(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [showMobileNav]);

  return (
    <div className="relative overflow-hidden">
      <button
        ref={menuBtnRef}
        onClick={toggleMenu}
        className={clsx(
          `group flex h-[32px] w-[32px] items-center justify-center`,
          { openMenu: showMobileNav },
        )}
      >
        <div className="pointer-events-none flex flex-col items-center justify-center gap-[7px]">
          <div
            className="
						bg-main-blue h-[2px] w-[24px] origin-bottom-left transition group-[.openMenu]:w-[26px]
             group-[.openMenu]:rotate-45
					"
          />
          <div className="bg-main-blue h-[2px] w-[24px] transition group-[.openMenu]:invisible" />
          <div
            className="
						bg-main-blue h-[2px] w-[24px] origin-bottom-left transition group-[.openMenu]:ml-[2px]
            group-[.openMenu]:w-[26px] group-[.openMenu]:-rotate-45
					"
          />
        </div>
      </button>

      <nav
        ref={navMenuRef}
        className={clsx(
          `
          ${
            isMenuClosed ? "absolute" : "fixed"
          } bg-main-blue/80 left-0 flex w-screen flex-col items-center
          justify-center gap-2 px-6 py-4 backdrop-blur-sm transition-all duration-300 ${
            showMobileNav ? "translate-x-0" : "translate-x-[101vw]"
          }
        `,
          {
            "top-[64px]": !isLoading && scrolled,
            "top-[116px]": isLoading || !scrolled,
          },
        )}
      >
        {NAV_MENU.map(({ id, label, url }) => (
          <Link
            key={id}
            href={url}
            onClick={toggleMenu}
            className="
              hover:text-nav-hover w-full whitespace-nowrap border-b border-white/10 px-2 py-4 text-center
              font-semibold text-white transition last:border-b-0 xl:px-4
            "
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
