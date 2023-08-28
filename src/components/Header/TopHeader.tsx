import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function TopHeader() {
  return (
    <div className="relative z-10 flex justify-center bg-top-strip text-primary-text">
      <div className="flex h-top-strip w-full max-w-tv items-center justify-between px-6 leading-7 transition">
        <div className="flex gap-2 text-center transition sm:gap-8">
          <div className="hidden sm:flex">
            Call Us:{" "}
            <Link id="header-call" href="tel:8007409709">
              8007409709
            </Link>
          </div>
          <div className="hidden sm:flex">
            Email us:{" "}
            <Link id="header-email" href="mailto:certusengineers@gmail.com">
              certusengineers@gmail.com
            </Link>
          </div>
          <Link
            id="header-call-icon"
            href="tel:8007409709"
            className="h-6 w-6 text-main-orange transition hover:text-nav-hover sm:hidden"
          >
            <FontAwesomeIcon icon={faPhone} />
          </Link>
          <Link
            id="header-email-icon"
            href="mailto:certusengineers@gmail.com"
            className="h-6 w-6 text-main-orange transition hover:text-nav-hover sm:hidden"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <div className="hidden lg:block">Our address: Amravati</div>
        </div>
        <div className="flex items-center justify-between gap-8 text-center">
          <div className="hidden items-center gap-2 md:flex">
            <FontAwesomeIcon icon={faClock} className="text-section-head" />
            10:00 am - 08:00 pm
          </div>
          <div className="flex items-center gap-2">
            <a
              id="header-facebook"
              rel="nofollow, noindex, noreferrer"
              target="_blank"
              href="https://facebook.com"
              className="h-6 w-6 text-main-orange transition hover:text-nav-hover"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              id="header-instagram"
              rel="nofollow, noindex, noreferrer"
              target="_blank"
              href="https://instagram.com"
              className="h-6 w-6 text-main-orange transition hover:text-nav-hover"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              id="header-youtube"
              rel="nofollow, noindex, noreferrer"
              target="_blank"
              href="https://youtube.com"
              className="h-6 w-6 text-main-orange transition hover:text-nav-hover"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
