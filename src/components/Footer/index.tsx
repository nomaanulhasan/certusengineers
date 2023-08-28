import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-col text-white">
      <div className="flex min-h-[350px] justify-center bg-main-blue py-8 md:min-h-[200px] md:max-[1064px]:min-h-[250px]">
        <div className="flex w-full max-w-tv flex-col flex-wrap items-center px-6 md:flex-row">
          <div
            className="
              flex w-full flex-1 items-center justify-start gap-4 min-[320px]:min-w-[280px] 
              md:min-w-[340px] md:justify-center
            "
          >
            <Link
              id="footer-call-icon"
              aria-label="Footer call icon"
              href="tel:8007409709"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-main-orange"
            >
              <FontAwesomeIcon icon={faPhone} />
            </Link>
            <div className="flex flex-col gap-1">
              <small className="text-base">Call us</small>
              <Link
                id="footer-call"
                aria-label="Footer call"
                className="text-lg duration-300 hover:text-main-orange"
                href="tel:8007409709"
              >
                <strong className="break-words text-lg sm:whitespace-nowrap">
                  8007 409 709
                </strong>
              </Link>
            </div>
          </div>

          <div
            className="
              flex w-full flex-1 items-center justify-start gap-4 border-t border-footer-separator min-[320px]:min-w-[280px] 
              md:min-w-[340px] md:justify-center md:border-l md:border-t-0
            "
          >
            <Link
              id="footer-email-icon"
              aria-label="Footer email icon"
              href="mailto:certusengineers@gmail.com"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-main-orange"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <div className="flex flex-col gap-1">
              <small className="text-base">Write to us</small>
              <Link
                id="footer-email"
                aria-label="Footer email"
                className="text-lg duration-300 hover:text-main-orange"
                href="mailto:certusengineers@gmail.com"
              >
                <strong className="break-words sm:whitespace-nowrap">
                  certusengineers
                  <wbr />
                  @gmail.com
                </strong>
              </Link>
            </div>
          </div>

          <div
            className="
              flex w-full flex-1 items-center justify-start gap-4 border-t border-footer-separator min-[320px]:min-w-[280px] 
              md:min-w-[340px] md:justify-center md:border-t-0 md:max-[1064px]:border-l-0 min-[1065px]:border-l
            "
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-main-orange">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-base">Office hours</small>
              <strong className="break-words text-lg sm:whitespace-nowrap">
                Mon-Sat <wbr />{" "}
                <span className="inline-block">
                  <span className="inline-block">10:00 AM</span> - <wbr />
                  <span className="inline-block">8:00 PM</span>
                </span>
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-[4rem] justify-center bg-main-orange py-4 sm:p-0">
        <div className="flex w-full max-w-tv flex-col items-center justify-between gap-2 px-6 sm:flex-row">
          <div className="flex gap-2 text-center">
            <a
              id="footer-facebook"
              rel="nofollow, noindex, noreferrer"
              aria-label="Link to facebook profile"
              target="_blank"
              href="https://facebook.com"
              className="h-6 w-6 duration-300 hover:text-main-blue"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              id="footer-twitter"
              rel="nofollow, noindex, noreferrer"
              aria-label="Link to twitter profile"
              target="_blank"
              href="https://twitter.com"
              className="h-6 w-6 duration-300 hover:text-main-blue"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              id="footer-instagram"
              rel="nofollow, noindex, noreferrer"
              aria-label="Link to instagram profile"
              target="_blank"
              href="https://instagram.com"
              className="h-6 w-6 duration-300 hover:text-main-blue"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              id="footer-pinterest"
              rel="nofollow, noindex, noreferrer"
              aria-label="Link to pinterest profile"
              target="_blank"
              href="https://pinterest.com"
              className="h-6 w-6 duration-300 hover:text-main-blue"
            >
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
          </div>
          <small className="text-center">
            &copy; Copyright {year} Certus Engineers Pvt. Ltd.
            <br className="min-[460px]:hidden" />
            All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
