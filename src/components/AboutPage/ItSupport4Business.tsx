import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function ItSupport4Business() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-12">
      <div className="m-auto flex flex-col gap-10 text-center lg:flex-row lg:text-left">
        <div className="flex flex-1 items-center justify-center lg:justify-start">
          <Image
            src="/images/About-us-570x450.jpg"
            alt="It Support for Business"
            className="h-full w-full object-cover"
            width={540}
            height={426}
          />
        </div>
        <div className="flex flex-1 flex-col gap-5 text-secondary-text">
          <h1 className="font-semibold uppercase leading-loose text-section-head">
            It Support For Business
          </h1>
          <h2 className="text-2xl font-medium text-primary-text md:text-3xl md:leading-normal">
            Preparing for your success <br className="max-[320px]:hidden" />
            trusted source in IT services.
          </h2>

          <div className="flex flex-col gap-5 leading-loose opacity-80">
            <p>
              At Certus Engineers and Consultants Pvt. Ltd., we specialize in
              providing comprehensive IT training, services, and consulting
              solutions for individuals and organizations alike. Our team of
              expert professionals are committed to delivering top-quality
              services that cater to the specific needs of our clients.
            </p>
            <p>
              Our IT training courses are designed to equip you with the
              knowledge and skills required to succeed in today&apos;s rapidly
              evolving technology landscape. Whether you&apos;re looking to
              upskill your existing skill set or acquire new knowledge, our
              training courses are tailored to meet your unique needs.
            </p>
          </div>
          <div className="flex justify-around gap-4 lg:justify-between">
            <div className="flex w-36 items-center gap-2 lg:w-1/2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-section-head text-white">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span>IT Training</span>
            </div>
            <div className="flex w-36 items-center gap-2 lg:w-1/2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-section-head text-white">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span>IT Services</span>
            </div>
          </div>
          <div className="flex justify-around gap-4 lg:justify-between">
            <div className="flex w-36 items-center gap-2 lg:w-1/2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-section-head text-white">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span>Consulting</span>
            </div>
            <div className="flex w-36 items-center gap-2 lg:w-1/2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-section-head text-white">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span>Outsourcing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
