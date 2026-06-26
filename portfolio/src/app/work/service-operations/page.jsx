import { ServiceOperationsContent } from "@/components/site/ServiceOperationsContent";

export const metadata = {
  title: "Service Operations Dashboard",
  description:
    "Concept case — one operational view of what's open at shift handover, so information stops getting lost between tools, paper and memory.",
};

export default function ServiceOperationsCase() {
  return <ServiceOperationsContent />;
}
