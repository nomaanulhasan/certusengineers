import type { Metadata } from "next";
import { PageWrapper, Container } from "@/components";

export const metadata: Metadata = {
  title: "About Us - Certus Engineers",
};

export default function About() {
  return (
    <PageWrapper title="About Us">
      <Container>About Us Page Content</Container>
    </PageWrapper>
  );
}
