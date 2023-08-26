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
      <div className="bg-main-blue flex min-h-[350px] justify-center py-8 md:min-h-[200px] md:max-[1064px]:min-h-[250px]">
        <div className="max-w-tv flex w-full flex-col flex-wrap items-center px-6 md:flex-row">
          <div
            className="
              flex w-full flex-1 items-center justify-start gap-4 min-[320px]:min-w-[280px] 
              md:min-w-[340px] md:justify-center
            "
          >
            <div className="bg-main-orange flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-base">Call us</small>
              <Link className="text-lg" href="tel:8007409709">
                <strong className="break-words text-lg sm:whitespace-nowrap">
                  8007 409 709
                </strong>
              </Link>
            </div>
          </div>

          <div
            className="
              border-footer-separator flex w-full flex-1 items-center justify-start gap-4 border-t min-[320px]:min-w-[280px] 
              md:min-w-[340px] md:justify-center md:border-l md:border-t-0
            "
          >
            <div className="bg-main-orange flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-base">Write to us</small>
              <Link className="text-lg" href="mailto:certusengineers@gmail.com">
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
              border-footer-separator flex w-full flex-1 items-center justify-start gap-4 border-t min-[320px]:min-w-[280px] 
              md:min-w-[340px] md:justify-center md:border-t-0 md:max-[1064px]:border-l-0 min-[1065px]:border-l
            "
          >
            <div className="bg-main-orange flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
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

      <div className="bg-main-orange flex min-h-[4rem] justify-center py-4 sm:p-0">
        <div className="max-w-tv flex w-full flex-col items-center justify-between gap-2 px-6 sm:flex-row">
          <div className="flex gap-2 text-center">
            <a
              target="_blank"
              href="https://facebook.com"
              className="hover:text-main-blue h-6 w-6"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              target="_blank"
              href="https://twiiter.com"
              className="hover:text-main-blue h-6 w-6"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              target="_blank"
              href="https://instagram.com"
              className="hover:text-main-blue h-6 w-6"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              target="_blank"
              href="https://pinterest.com"
              className="hover:text-main-blue h-6 w-6"
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
