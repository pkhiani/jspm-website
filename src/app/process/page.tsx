import type { Metadata } from "next";
import Link from "next/link";
import { Advantages, PageHero } from "@/components/Sections";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A simple, organised process built for property professionals who need clear communication and reliable delivery.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="Simple, organised and built around you.">
        Our process is simple, organised and built for property professionals who need clear
        communication and reliable delivery.
      </PageHero>

      <section className="py-20">
        <div className="container-x">
          <ol className="grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <li key={step.title} className="card relative p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-navy font-display text-lg font-semibold text-accent">
                  {i + 1}
                </span>
                <h2 className="mt-6 text-xl font-semibold">{step.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link href="/contact" className="btn-dark">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <Advantages intro="Clear processes, vetted trades and consistent standards across all maintenance work — giving you confidence in every job we handle." />
    </>
  );
}
