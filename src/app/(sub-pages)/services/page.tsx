import type { Metadata } from "next";
import { PageWrapper, Container } from "@/components";

export const metadata: Metadata = {
  title: "Services - Certus Engineers",
};

export default function Services() {
  return (
    <PageWrapper title="Services">
      <Container>Services Page Content - WIP</Container>
    </PageWrapper>
  );
}
