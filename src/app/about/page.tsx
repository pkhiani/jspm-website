import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Areas, CtaBand, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Planned and reactive property maintenance across Teesside and the North East, with every trade under one point of contact.",
};

const pillars = [
  { title: "One call", body: "Every trade under one point of contact." },
  { title: "Clear communication", body: "Updates, photos and summaries on every job." },
  { title: "Done when promised", body: "Work scheduled properly and completed on time." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="A maintenance partner you can trust long‑term.">
        JS Property Maintenance delivers planned and reactive maintenance across Teesside and the
        North East, supporting landlords, letting agents, serviced accommodation operators and
        homeowners.
      </PageHero>

      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              We bring every trade under one point of contact — joinery, plumbing, electrics,
              decorating, repairs, kitchens, bathrooms and more.
            </p>
            <p className="font-semibold text-ink">
              One call, clear communication and work completed when promised.
            </p>
            <p>
              We’re built for property professionals who need reliability, organisation and a
              maintenance partner they can trust long‑term.
            </p>
            <Link href="/services" className="btn-outline">
              Explore all services <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-4">
            {pillars.map((p, i) => (
              <li key={p.title} className="card flex items-start gap-5">
                <span className="font-display text-3xl font-bold text-accent">0{i + 1}</span>
                <div>
                  <h2 className="text-lg font-semibold">{p.title}</h2>
                  <p className="mt-1 text-sm text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="border-t border-line">
        <Areas />
      </div>
      <CtaBand />
    </>
  );
}
