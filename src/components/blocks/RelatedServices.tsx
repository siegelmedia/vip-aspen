import { RelatedLinks } from "@/components/site/Shared";
import type { RelatedService } from "@/types";

interface RelatedServicesProps {
  items?: RelatedService[];
}

/**
 * Related-service links for a page. Keeps internal linking dense for SEO and
 * gives visitors a clear next step.
 */
const RelatedServices = ({ items }: RelatedServicesProps) => <RelatedLinks items={items} paper />;

export default RelatedServices;
