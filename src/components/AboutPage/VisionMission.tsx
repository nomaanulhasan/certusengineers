import Image from "next/image";

export default function VisionMission() {
  return (
    <div className="py-8">
      <div className="flex flex-col bg-[url('/images/world-map.jpg')] bg-cover bg-no-repeat text-white lg:flex-row lg:gap-8">
        <div className="flex flex-[2] flex-col py-12 sm:flex-row lg:p-0">
          <div className="flex flex-1 flex-col items-start justify-center gap-4 p-12 lg:px-4 lg:pl-16">
            <h1 className="text-3xl font-medium">Our Mission</h1>
            <p className="leading-loose">
              Our mission is to empower businesses, individuals, and students
              with the technology and skills they need to succeed in the digital
              age. Through our comprehensive IT training programs and
              high-quality IT services.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-start justify-center gap-4 p-12 lg:px-4 lg:pl-16">
            <h1 className="text-3xl font-medium">Our Vision</h1>
            <p className="leading-loose">
              Our vision is to empower businesses and individuals with the
              knowledge and technology they need to succeed in the digital age.
              We aim to be a trusted partner, providing expert training and
              unparalleled IT services to help our clients achieve their goals.
            </p>
          </div>
        </div>
        <div className="relative flex flex-1 flex-col items-start justify-center lg:order-3 xl:flex-[1.5]">
          <Image
            src="/images/mission-and-vision.jpg"
            alt="Mission and Vision"
            className="h-full w-full object-cover"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}
