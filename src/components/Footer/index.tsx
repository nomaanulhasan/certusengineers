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
              flex min-w-[280px] flex-1 items-center justify-start gap-4 
              md:min-w-[340px] md:justify-center
            "
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-main-orange">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-base">Call us</small>
              <Link className="text-lg" href="tel:8007409709">
                <strong className="whitespace-nowrap text-lg">
                  8007 409 709
                </strong>
              </Link>
            </div>
          </div>

          <div
            className="
              flex min-w-[280px] flex-1 items-center justify-start gap-4 border-t border-footer-separator 
              md:min-w-[340px] md:justify-center md:border-l md:border-t-0
            "
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-main-orange">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-base">Write to us</small>
              <Link
                className="whitespace-nowrap text-lg"
                href="mailto:certusengineers@gmail.com"
              >
                <strong>certusengineers@gmail.com</strong>
              </Link>
            </div>
          </div>

          <div
            className="
              flex min-w-[280px] flex-1 items-center justify-start gap-4 border-t border-footer-separator 
              md:min-w-[340px] md:justify-center md:border-t-0 md:max-[1064px]:border-l-0 min-[1065px]:border-l
            "
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-main-orange">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-base">Office hours</small>
              <strong className="whitespace-nowrap text-lg">
                Mon-Sat 10:00 AM - 8:00 PM
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-[4rem] justify-center bg-main-orange py-4 sm:p-0">
        <div className="flex w-full max-w-tv flex-col items-center justify-between gap-2 px-6 sm:flex-row">
          <div className="flex gap-2 text-center">
            <a
              target="_blank"
              href="https://facebook.com"
              className="h-6 w-6 hover:text-main-blue"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              target="_blank"
              href="https://twiiter.com"
              className="h-6 w-6 hover:text-main-blue"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              target="_blank"
              href="https://instagram.com"
              className="h-6 w-6 hover:text-main-blue"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              target="_blank"
              href="https://pinterest.com"
              className="h-6 w-6 hover:text-main-blue"
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
