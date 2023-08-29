import type { Metadata } from "next";
import {
  PageWrapper,
  ItSupport4Business,
  VisionMission,
  GetInTouch,
} from "@/components";

export const metadata: Metadata = {
  title: "About Us - Certus Engineers",
};

export default function About() {
  return (
    <PageWrapper title="About Us">
      <ItSupport4Business />
      <VisionMission />
      <GetInTouch />
    </PageWrapper>
  );
}
