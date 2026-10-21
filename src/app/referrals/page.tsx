import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Referrals",
  description:
    "Refer a landlord, agent or neighbour to JS Property Maintenance and earn 10% commission when they accept a quote.",
};

const steps = [
  { title: "Refer someone", body: "Send us their details using the form below — with their permission." },
  { title: "We quote", body: "We get in touch, scope the job and send them a clear price." },
  { title: "You earn 10%", body: "If they accept the quote, you earn 10% commission on the work." },
];

export default function ReferralsPage() {
  return (
    <>
      <PageHero eyebrow="Referrals" title="Know someone who needs us? Earn 10%.">
        Refer a landlord, agent or neighbour — if they accept a quote, you earn 10% commission on
        the work. No limit on referrals.
      </PageHero>

      <section id="how-it-works" className="scroll-mt-24 py-20">
        <div className="container-x">
          <h2 className="text-3xl font-semibold">How it works</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="card p-8">
                <span className="font-display text-4xl font-bold text-accent">{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="refer" className="scroll-mt-24 bg-sand py-20">
        <div className="container-x max-w-3xl">
          <h2 className="mb-8 text-3xl font-semibold">Refer someone</h2>
          <EnquiryForm kind="referral" />
        </div>
      </section>
    </>
  );
}
