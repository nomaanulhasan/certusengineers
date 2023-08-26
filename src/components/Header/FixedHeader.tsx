import Image from "next/image";
import Link from "next/link";
import Navigations from "./Navigations";
import MobileNavigations from "./MobileNavigations";

export default function FixedHeader() {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-center bg-white shadow-md transition-all duration-300">
      <div className="flex min-h-[64px] w-full max-w-tv items-center justify-between py-2 pl-4 pr-6">
        <Link href="/" title="Certus Engineers">
          <Image
            className="w-60 md:w-64 lg:w-72"
            alt="Certus Engineers Logo"
            src="/images/logo.png"
            height={85}
            width={300}
            priority
          />
        </Link>

        <div className="hidden lg:block">
          <Navigations />
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="
              whitespace-nowrap rounded-md bg-main-orange px-4 py-4 font-semibold text-white transition hover:bg-nav-hover xl:px-6
            "
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-6 overflow-hidden transition lg:hidden">
          <Link
            href="/contact-us"
            className="
              hidden whitespace-nowrap rounded-md bg-main-orange px-4 py-4 font-semibold
              text-white transition hover:bg-nav-hover min-[420px]:block xl:px-6
            "
          >
            Contact Us
          </Link>

          <MobileNavigations />
        </div>
      </div>
    </header>
  );
}
