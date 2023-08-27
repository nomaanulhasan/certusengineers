import Image from "next/image";
import Link from "next/link";

const COURSES_DATA = [
  {
    id: 1,
    title: "IT Training",
    icon: "/images/A-150x150.jpg",
  },
  {
    id: 2,
    title: "IT Services",
    icon: "/images/N-150x150.jpg",
  },
  {
    id: 3,
    title: "Consulting",
    icon: "/images/1-1-150x150.png",
  },
  {
    id: 4,
    title: "Consulting",
    icon: "/images/Graphics-Design-150x150.jpg",
  },
];

export default function Courses() {
  return (
    <div className="flex justify-center bg-[#F6F8FC] p-10 sm:p-20">
      <div className="flex w-full max-w-tv flex-col justify-center">
        <h4 className="mb-3 text-center font-semibold uppercase leading-loose text-section-head">
          Courses
        </h4>
        <h3 className="text-center text-2xl font-medium leading-loose text-primary-text md:text-3xl">
          Popular Courses
        </h3>

        <div className="mb-8 mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES_DATA.map(({ id, title, icon }) => (
            <div
              key={id}
              className="flex flex-1 flex-col items-center gap-5 rounded-md border-[2px] border-card-border p-6 duration-300 hover:border-transparent hover:bg-white hover:shadow-lg"
            >
              <Image
                className="rounded-md"
                src={icon}
                alt={title}
                width={150}
                height={150}
              />
              <h5 className="whitespace-nowrap text-lg font-medium text-primary-text">
                {title}
              </h5>
            </div>
          ))}
        </div>
        <Link
          href="/courses"
          className="m-auto rounded-md bg-main-blue px-8 py-4 font-semibold text-white duration-300 hover:bg-main-orange"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}
