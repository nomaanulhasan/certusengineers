import type { Metadata } from "next";
import { PageWrapper, Container } from "@/components";

export const metadata: Metadata = {
  title: "Job Updates - Certus Engineers",
};

export default function JobUpdates() {
  return (
    <PageWrapper title="Job Updates">
      <Container>Job Updates Page Content</Container>
    </PageWrapper>
  );
}
