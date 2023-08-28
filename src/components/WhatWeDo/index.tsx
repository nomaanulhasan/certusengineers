const WHAT_WE_DO_DATA = [
  {
    id: 1,
    title: "IT Training",
    desc: "Upgrade your tech skills with our comprehensive IT training courses. From beginner to advanced, we cover the latest technologies and trends to help you succeed in your career.",
    icon: "flaticon flaticon-website",
  },
  {
    id: 2,
    title: "IT Services",
    desc: "Our IT Services team provides comprehensive technology solutions for businesses of all sizes. We deliver reliable and cost-effective support to keep your technology running smoothly.",
    icon: "flaticon flaticon-education",
  },
  {
    id: 3,
    title: "Consulting",
    desc: "Get expert guidance and tailored solutions for your business with our Consulting services. Our team provides personalized strategies for success and reach your full potential.",
    icon: "flaticon flaticon-idea",
  },
];

export default function WhatWeDo() {
  return (
    <div className="flex justify-center bg-[#F6F8FC] px-5 py-10 sm:p-20">
      <div className="w-full max-w-tv">
        <h1 className="mb-3 text-center font-semibold uppercase leading-loose text-section-head">
          What We Do
        </h1>
        <h2 className="text-center text-[1.35rem] font-medium leading-loose text-primary-text sm:text-2xl md:text-3xl">
          Training | Services | Consulting
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {WHAT_WE_DO_DATA.map(({ id, title, desc, icon }) => (
            <div
              key={id}
              className="
                flex cursor-default flex-col items-center gap-4 rounded-md border-[2px] p-6 text-center duration-300 hover:bg-white hover:shadow-lg md:flex-row md:items-start md:gap-8 md:text-left
              "
            >
              <i className={`${icon} text-7xl text-main-orange`} />
              <div className="flex flex-col gap-2">
                <h5 className="text-lg font-medium text-primary-text">
                  {title}
                </h5>
                <p className="text-secondary-text">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
