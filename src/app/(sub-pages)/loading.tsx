import type { Metadata } from "next";
import { PageWrapper, Container } from "@/components";

export const metadata: Metadata = {
  title: "Loading - Certus Engineers",
};

export default function Loading() {
  return (
    <PageWrapper title="Loading...">
      <Container>Loading...</Container>
    </PageWrapper>
  );
}
