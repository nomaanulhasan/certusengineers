import type { Metadata } from "next";
import { PageWrapper, Container } from "@/components";

export const metadata: Metadata = {
  title: "Courses - Certus Engineers",
};

export default function Courses() {
  return (
    <PageWrapper title="Courses">
      <Container>Courses Page Content - WIP</Container>
    </PageWrapper>
  );
}
