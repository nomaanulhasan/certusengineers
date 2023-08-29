import type { Metadata } from "next";
import { PageWrapper, Container } from "@/components";

export const metadata: Metadata = {
  title: "Contact - Certus Engineers",
};

export default function Conatct() {
  return (
    <PageWrapper title="Contact">
      <Container>Conatct Us Page Content</Container>
    </PageWrapper>
  );
}
