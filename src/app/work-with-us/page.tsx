import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Work with us",
  description:
    "We're expanding our trade network across Teesside. Professional contractors — apply to work with JS Property Maintenance.",
};

const perks = [
  "Steady flow of planned and reactive work",
  "Jobs scoped and priced before you arrive",
  "One coordinator — no chasing clients for payment",
  "Work across Teesside and the North East",
];

export default function WorkWithUsPage() {
  return (
    <>
      <PageHero eyebrow="Work with us" title="Join our trade network.">
        We’re actively expanding our trade network to help meet demand as we continue to grow. If
        you’re a professional contractor with experience and would like to work with us, complete
        the form below and we’ll be in touch with the next steps.
      </PageHero>
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="text-2xl font-semibold">Why work with JSPM?</h2>
            <ul className="mt-6 space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <EnquiryForm kind="trade" />
        </div>
      </section>
    </>
  );
}
