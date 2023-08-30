import type { Metadata } from "next";
import { PageWrapper, Container } from "@/components";

export const metadata: Metadata = {
  title: "Contact Us - Certus Engineers",
};

export default function Conatct() {
  return (
    <PageWrapper title="Contact Us">
      <Container>Conatct Us Page Content - WIP</Container>
    </PageWrapper>
  );
}
