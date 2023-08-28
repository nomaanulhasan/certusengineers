import Image from "next/image";

export default function Highlights() {
  return (
    <div
      className="
        flex items-center justify-center bg-[#0E1E2A] bg-[url(/images/highlights.png)] bg-right bg-no-repeat
        px-5 py-16 text-white sm:p-28
      "
    >
      <div className="w-full max-w-5xl">
        <div className="m-auto flex flex-col gap-6 text-center lg:flex-row lg:text-left">
          <div className="flex flex-1 justify-center lg:justify-start">
            <Image
              src="/images/About-us-570x450.jpg"
              alt="Our Highlights"
              width={540}
              height={426}
            />
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <h1 className="font-semibold uppercase leading-loose">
              Our Highlights
            </h1>
            <h2 className="text-2xl font-medium leading-loose md:text-3xl">
              Preparing for your success
            </h2>

            <div className="flex flex-col gap-5">
              <p>
                Our team of experienced IT professionals has the knowledge and
                expertise to help you navigate the ever-changing world of
                technology. We offer a wide range of services, including IT
                consulting, training, and support.
              </p>
              <p>
                We understand that every business has unique needs and goals.
                That&apos;s why we take the time to understand your specific
                situation and tailor our services to fit your needs. We pride
                ourselves on our ability to deliver high-quality solutions that
                are both cost-effective and easy to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
