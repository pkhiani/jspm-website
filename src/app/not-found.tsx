import Link from "next/link";
import { PageHero } from "@/components/Sections";

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="We couldn’t find that page.">
      <div className="mt-2 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/contact" className="btn-ghost">
          Contact us
        </Link>
      </div>
    </PageHero>
  );
}
