import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions, quotes or an emergency — here's how to reach JS Property Maintenance.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Questions, quotes or an emergency?">
        Here’s how to reach us. Use the form to drop us a message and we’ll get back to you as soon
        as we can.
      </PageHero>
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <ContactDetails />
          <EnquiryForm kind="contact" />
        </div>
      </section>
    </>
  );
}

function ContactDetails() {
  const items = [
    { icon: "phone" as const, label: "Phone", value: site.phone, href: site.phoneHref },
    { icon: "mail" as const, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} className="card flex items-center gap-4 transition-colors hover:border-navy/30">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-accent">
              <Icon name={item.icon} />
            </span>
            <span>
              <span className="block text-sm text-muted">{item.label}</span>
              <span className="font-semibold">{item.value}</span>
            </span>
          </a>
        </li>
      ))}
      <li className="card flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-accent">
          <Icon name="clock" />
        </span>
        <span>
          <span className="block text-sm text-muted">Hours</span>
          {site.hours.map((h) => (
            <span key={h.days} className="block font-semibold">
              {h.days}: <span className="font-normal">{h.time}</span>
            </span>
          ))}
        </span>
      </li>
    </ul>
  );
}
