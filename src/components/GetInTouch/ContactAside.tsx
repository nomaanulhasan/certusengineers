import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactAside() {
  return (
    <div className="w-full rounded-md bg-section-head p-6 text-white lg:max-w-[370px]">
      <h2 className="mb-6 text-2xl font-medium capitalize lg:text-3xl">
        Don&apos;t hesitate{" "}
        <span className="whitespace-nowrap">to contact us</span>
      </h2>
      <div className="flex flex-col flex-wrap items-center gap-8">
        <div className="flex w-full flex-1 items-center justify-start gap-4">
          <Link
            id="footer-call-icon"
            aria-label="Footer call icon"
            href="tel:8007409709"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4070c8]"
          >
            <FontAwesomeIcon icon={faPhone} />
          </Link>
          <div className="flex flex-col gap-1">
            <small className="text-base text-[#b8caea]">Call us</small>
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

        <div className="flex w-full flex-1 items-center justify-start gap-4">
          <Link
            id="footer-email-icon"
            aria-label="Footer email icon"
            href="mailto:certusengineers@gmail.com"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4070c8]"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <div className="flex flex-col gap-1">
            <small className="text-base text-[#b8caea]">Write to us</small>
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

        <div className="flex w-full flex-1 items-center justify-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4070c8]">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="flex flex-col gap-1">
            <small className="text-base text-[#b8caea]">Office hours</small>
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
  );
}
