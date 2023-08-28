import Link from "next/link";
import { NAV_MENU } from "@/lib";

export default function Navigations() {
  return (
    <nav className="flex flex-1 items-center justify-center gap-2 xl:gap-4">
      {NAV_MENU.map(({ id, label, url }) => (
        <Link
          key={id}
          id={`nav-${label}`}
          href={url}
          className="whitespace-nowrap px-2 py-4 font-semibold text-main-orange transition hover:text-nav-hover xl:px-4"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
