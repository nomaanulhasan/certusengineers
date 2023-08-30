import type { Metadata } from "next";
import { PageWrapper, Container } from "@/components";

export const metadata: Metadata = {
  title: "Consultancy - Certus Engineers",
};

export default function Consultancy() {
  return (
    <PageWrapper title="Consultancy">
      <Container>Consultancy Page Content - WIP</Container>
    </PageWrapper>
  );
}
