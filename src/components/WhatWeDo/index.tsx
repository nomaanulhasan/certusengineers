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
    <div className="flex justify-center bg-[#F6F8FC] py-10 px-5 sm:p-20">
      <div className="w-full max-w-tv">
        <h4 className="text-center font-semibold uppercase leading-loose text-section-head">
          What We Do
        </h4>
        <h3 className="text-center text-[1.35rem] sm:text-2xl md:text-3xl font-medium leading-loose text-primary-text">
          Training | Services | Consulting
        </h3>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHAT_WE_DO_DATA.map(({ id, title, desc, icon }) => (
            <div
              key={id}
              className="
                flex flex-col items-center md:items-start text-center md:text-left gap-4 md:flex-row md:gap-8 rounded-md border p-6 duration-300 hover:bg-white hover:shadow-lg cursor-default
              "
            >
              <i className={`${icon} text-7xl text-main-orange`} />
              <div className="flex flex-col gap-2">
                <h5 className="font-medium text-primary-text">{title}</h5>
                <p className="text-secondary-text">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
