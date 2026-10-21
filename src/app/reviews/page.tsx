import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/Sections";
import { reviews } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What customers across Teesside say about JS Property Maintenance.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="What people are saying." />
      <section className="py-20">
        <div className="container-x columns-1 gap-5 md:columns-2 lg:columns-3">
          {reviews.map((r) => (
            <figure key={r.name} className="card mb-5 break-inside-avoid">
              <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" filled className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 leading-relaxed text-ink/85">“{r.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
