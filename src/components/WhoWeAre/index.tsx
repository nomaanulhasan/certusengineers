import Image from "next/image";
import Link from "next/link";

const WHO_WE_ARE_DATA = [
  {
    id: 1,
    title: "IT Training",
    desc: "Upgrade your tech skills with our comprehensive IT training courses. From beginner to advanced, we cover the latest technologies and trends to help you succeed in your career.",
    icon: "/images/computer-services-150x150.png",
  },
  {
    id: 2,
    title: "IT Services",
    desc: "Our IT Services team provides comprehensive technology solutions for businesses of all sizes. We deliver reliable and cost-effective support to keep your technology running smoothly.",
    icon: "/images/software-150x150.png",
  },
  {
    id: 3,
    title: "Consulting",
    desc: "Get expert guidance and tailored solutions for your business with our Consulting services. Our team provides personalized strategies for success and reach your full potential.",
    icon: "/images/web-development2-150x150.png",
  },
];

export default function WhoWeAre() {
  return (
    <div className="flex justify-center bg-[url('/images/who-we-are-bg.jpg')] bg-no-repeat px-5 py-10 sm:p-20">
      <div className="flex w-full max-w-tv flex-col gap-8">
        <div>
          <h3 className="mb-3 text-center font-semibold uppercase leading-loose text-section-head">
            Who We Are
          </h3>
          <h4 className="text-center text-xl font-medium leading-loose text-primary-text sm:text-2xl md:text-3xl">
            We deal with the aspects of professional IT Services
          </h4>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {WHO_WE_ARE_DATA.map(({ id, title, desc, icon }) => (
              <div
                key={id}
                className="
                flex cursor-default flex-col items-center justify-center gap-4 rounded-md border-[2px] bg-white
                p-6 duration-300 hover:shadow-lg md:gap-8
              "
              >
                <Image src={icon} alt={title} width={150} height={150} />
                <div className="flex flex-col gap-2 text-center">
                  <h5 className="text-lg font-medium text-primary-text">
                    {title}
                  </h5>
                  <p className="text-secondary-text">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
          id="all-services"
          href="/services"
          className="m-auto rounded-md bg-main-blue px-8 py-4 font-semibold text-white duration-300 hover:bg-main-orange"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
}
