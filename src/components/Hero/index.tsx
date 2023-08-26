import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-screen after:absolute after:inset-0 after:z-10 after:bg-[#104cba3d]">
      <div className="relative h-[80vh] w-full">
        <Image
          src="/images/it-services.webp"
          className="object-cover"
          alt="Hero Section"
          fill
        />
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
        <div className="flex max-w-tv flex-col items-center gap-8 text-center">
          <h2 className="text-sm font-medium uppercase duration-300 md:text-xl">
            Certus Engineers Pvt. Ltd.
          </h2>
          <h1 className="text-2xl font-semibold leading-snug duration-300 sm:text-4xl sm:leading-snug md:text-6xl md:leading-snug">
            Elevating Businesses <br />
            Through Expert IT Training, <br />
            Services &amp; Consultation.
          </h1>
          <Link
            href="/contact-us"
            className="w-auto rounded-md bg-main-blue px-8 py-4 font-semibold duration-300 md:px-12"
          >
            Let&apos;s Start
          </Link>
        </div>
      </div>
    </div>
  );
}
