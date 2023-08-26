import {
  Courses,
  Hero,
  Highlights,
  JobUpdates,
  WhatWeDo,
  WhoWeAre,
  Why2ChooseUs,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col bg-white">
      <Hero />
      <WhatWeDo />
      <Why2ChooseUs />
      <Courses />
      <Highlights />
      <WhoWeAre />
      <JobUpdates />
    </main>
  );
}
