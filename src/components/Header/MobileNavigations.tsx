"use client";

import { useEffect, useState } from "react";
import Navigations from "./Navigations";
import { NAV_MENU } from "@/lib";
import Link from "next/link";

export default function MobileNavigations() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const toggleMenu = () => setIsOpen((state) => !state);
  useEffect(() => {
  if (isOpen) {
    setIsClosed(false)
    return
  }
  
  const timer = setTimeout(() => {
    setIsClosed(true)
  },300)

  return () => clearTimeout(timer)
  },[isOpen]);
  
  return (
    <div className="relative overflow-hidden">
      <button
        onClick={toggleMenu}
        className={`flex h-[32px] w-[32px] flex-col items-center justify-center gap-[7px] ${
          isOpen ? "menuOpen group" : "group"
        }`}
      >
        <div
          className="
						h-[2px] w-[24px] origin-bottom-left bg-main-blue transition
            group-[.menuOpen]:-translate-y-[1px] group-[.menuOpen]:translate-x-[3px] group-[.menuOpen]:rotate-45
					"
        />
        <div className="h-[2px] w-[24px] bg-main-blue transition group-[.menuOpen]:invisible" />
        <div
          className="
						h-[2px] w-[24px] origin-bottom-left bg-main-blue transition
            group-[.menuOpen]:ml-[2px] group-[.menuOpen]:-translate-y-[2px] group-[.menuOpen]:translate-x-[3px] group-[.menuOpen]:-rotate-45
					"
        />
      </button>

      <nav
        className={`
          ${isClosed ? 'absolute' : 'fixed'} left-0 top-[116px] flex w-[calc(100vw-6px)] flex-col items-center justify-center
          gap-2 bg-main-blue/80 px-6 py-4 backdrop-blur-sm transition duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-[101vw]"
          }
        `}
      >
        {NAV_MENU.map(({ id, label, url }) => (
          <Link
            key={id}
            href={url}
            className="
              w-full whitespace-nowrap border-b border-white/10 px-2 py-4 text-center font-semibold
              text-white transition last:border-b-0 hover:text-nav-hover xl:px-4
            "
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
