"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const WHY_CHOOSE_US_DATA = [
  {
    id: 1,
    title: "In-house company",
    desc: "Students will get direct benefits of ongoing projects",
    icon: "/images/enterprise.png",
  },
  {
    id: 2,
    title: "Interview Preparation",
    desc: "We will help you to practice your interview technique.",
    icon: "/images/interview.png",
  },
  {
    id: 3,
    title: "100% Job Assistance",
    desc: "We server 100% job oriented courses with end to end placement assistance",
    icon: "/images/businessman.png",
  },
  {
    id: 4,
    title: "In-house company",
    desc: "Students will get direct benefits of ongoing projects",
    icon: "/images/enterprise.png",
  },
  {
    id: 5,
    title: "Interview Preparation",
    desc: "We will help you to practice your interview technique.",
    icon: "/images/interview.png",
  },
  {
    id: 6,
    title: "100% Job Assistance",
    desc: "We server 100% job oriented courses with end to end placement assistance",
    icon: "/images/businessman.png",
  },
];

export default function Why2ChooseUs() {
  return (
    <div className="flex justify-center p-10 px-5 sm:p-20">
      <div className="w-full max-w-tv">
        <h4 className="mb-3 text-center font-semibold uppercase leading-loose text-section-head">
          Why to choose us?
        </h4>
        <h3 className="text-center text-2xl font-medium leading-loose text-primary-text md:text-3xl">
          Training Features
        </h3>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="ceSwiper mt-12 !pb-20"
        >
          {WHY_CHOOSE_US_DATA.map(({ id, title, desc, icon }) => (
            <SwiperSlide
              key={id}
              className="h-full rounded-md border bg-[#F1F1F2FC]"
            >
              <div
                className="
                  group flex flex-1 cursor-default flex-col items-center justify-center
                  gap-6 p-6 duration-300 hover:bg-white hover:shadow-lg
                "
              >
                <div
                  className="
                    relative flex h-[100px] w-[100px] items-center justify-center
                    rounded-full bg-white duration-300 group-hover:bg-[#F1F1F2FC]
                  "
                >
                  <Image src={icon} alt={title} width={70} height={70} />
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <h5 className="text-lg font-medium text-card-head">
                    {title}
                  </h5>
                  <p className="text-secondary-text duration-300 group-hover:text-main-orange">
                    {desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
