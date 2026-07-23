import { ServiceOperationsContent } from "@/components/site/ServiceOperationsContent";

export const metadata = {
  title: "Incident & Handover Workflow",
  description:
    "Technical-functional concept for logging, assigning, escalating and handing over service incidents with clear status, ownership, history and acceptance criteria.",
};

export default function ServiceOperationsCase() {
  return <ServiceOperationsContent />;
}
