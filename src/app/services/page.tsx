import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Audiences, CtaBand, PageHero, SectionHeading } from "@/components/Sections";
import { serviceTiers, trades } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Multi‑trade planned and reactive maintenance across Teesside — plumbing, electrical, joinery, plastering, decorating, flooring and general property upkeep.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Every trade, one contractor.">
        Multi‑trade planned and reactive maintenance across Teesside — covering plumbing,
        electrical, joinery, plastering, decorating, flooring and general property upkeep.
      </PageHero>

      <section className="py-20">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {serviceTiers.map((tier) => (
            <article
              key={tier.title}
              className={`card flex flex-col p-8 ${tier.comingSoon ? "bg-sand" : ""}`}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">{tier.title}</h2>
                {tier.comingSoon && (
                  <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
                    Coming soon
                  </span>
                )}
              </div>
              <p className="mt-3 text-muted">{tier.body}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {tier.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                    {p}
                  </li>
                ))}
              </ul>
              {!tier.comingSoon && (
                <Link href="/request-a-quote" className="btn-outline mt-8 self-start">
                  Get a quote <Icon name="arrow" className="h-4 w-4" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we cover"
            title="From everyday upkeep to multi‑trade projects."
            intro="We provide reliable maintenance services across all types of homes and rental properties."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trades.map((t) => (
              <li key={t.title} className="flex gap-4 rounded-2xl border border-line p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-600">
                  <Icon name={t.icon} />
                </span>
                <div>
                  <h3 className="font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Audiences includeHomeowners={false} cta={false} />
      <CtaBand />
    </>
  );
}
