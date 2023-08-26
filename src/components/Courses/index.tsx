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
    <div className="flex justify-center bg-[#F6F8FC] p-20">
      <div className="flex w-full max-w-tv flex-col justify-center">
        <h4 className="text-center font-semibold uppercase leading-loose text-section-head">
          Courses
        </h4>
        <h3 className="text-center text-3xl font-medium leading-loose text-primary-text">
          Popular Courses
        </h3>
        <div className="mt-8 mb-12 flex gap-8">
          {COURSES_DATA.map(({ id, title, icon }) => (
            <div
              key={id}
              className="flex flex-1 items-center flex-col gap-5 rounded-md border-card-border border-[2px] hover:border-transparent p-6 duration-300 hover:bg-white hover:shadow-lg"
            >
              <Image className="rounded-md" src={icon} alt={title} width={150} height={150} />
              <h5 className="font-medium text-primary-text whitespace-nowrap">{title}</h5>
            </div>
          ))}
        </div>
        <Link
          href="/courses"
          className="rounded-md m-auto bg-main-blue px-8 py-4 font-semibold text-white duration-300 hover:bg-main-orange"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}
