import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/Sections";
import { processSteps, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a quote",
  description:
    "Share a few details on your enquiry and we'll follow up with the next steps — or call us if it's urgent.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero eyebrow="Request a quote" title="Tell us about the job.">
        Share a few details on your enquiry and we’ll follow up with the next steps — or call us if
        it’s urgent.
      </PageHero>
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <EnquiryForm kind="quote" />
          <aside className="space-y-6">
            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="text-sm text-white/70">Urgent job?</p>
              <a href={site.phoneHref} className="mt-1 flex items-center gap-2 text-2xl font-semibold">
                <Icon name="phone" className="h-5 w-5 text-accent" /> {site.phone}
              </a>
              <p className="mt-2 text-sm text-white/60">Mon–Fri, 8am–4pm</p>
            </div>
            <div className="card">
              <h2 className="font-semibold">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {processSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-3 text-sm">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-ink">
                      {i + 1}
                    </span>
                    <span>
                      <span className="font-semibold">{s.title}</span>{" "}
                      <span className="text-muted">{s.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
