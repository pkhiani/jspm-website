import Link from "next/link";
import { advantages, areas, audiences, site } from "@/lib/site";
import { Icon } from "./Icon";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Blueprint />
      <div className="container-x relative py-16 sm:py-20">
        {eyebrow && <p className="eyebrow text-accent">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">{title}</h1>
        {children && (
          <div className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{children}</div>
        )}
      </div>
    </section>
  );
}

/** Subtle grid pattern used behind dark heroes. */
export function Blueprint() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse at 70% 30%, #000 20%, transparent 75%)",
      }}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export function Audiences({
  heading = true,
  includeHomeowners = true,
  cta = true,
}: {
  heading?: boolean;
  includeHomeowners?: boolean;
  cta?: boolean;
}) {
  const list = includeHomeowners ? audiences : audiences.filter((a) => a.title !== "Homeowners");
  return (
    <section className="bg-sand py-20">
      <div className="container-x">
        {heading && (
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Who we work with"
              title="Maintenance shaped to how you operate."
              intro="Our maintenance service is shaped around how you operate, giving you flexible support that fits your schedule, your properties and the way you work."
            />
            {cta && (
              <Link href="/services" className="btn-outline shrink-0">
                Learn more <Icon name="arrow" className="h-4 w-4" />
              </Link>
            )}
          </div>
        )}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => (
            <li key={a.title} className="card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-accent">
                <Icon name={a.icon} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Areas() {
  return (
    <section className="py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Where we cover"
          title="Local to Teesside."
          intro="Local coverage across Teesside and surrounding areas — from terraces and student lets to new‑build homes and full portfolios."
        />
        <ul className="grid grid-cols-2 gap-3">
          {areas.map((a) => (
            <li
              key={a}
              className="flex items-center gap-3 rounded-xl border border-line px-4 py-3.5 text-sm font-semibold"
            >
              <Icon name="pin" className="h-4 w-4 shrink-0 text-accent-600" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Advantages({ intro }: { intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white">
      <Blueprint />
      <div className="container-x relative">
        <p className="eyebrow text-accent">Our advantages</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold sm:text-4xl">
          Why landlords and agents choose us.
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-lg text-white/70">{intro}</p>}
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
          {advantages.map((a) => (
            <li key={a.title} className="bg-ink p-8">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-ink">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{a.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link href="/request-a-quote" className="btn-primary">
            Get started <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ReferralBand() {
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="grid items-center gap-8 rounded-3xl bg-accent p-8 text-ink sm:p-12 lg:grid-cols-[auto_1fr_auto]">
          <p className="font-display text-5xl font-bold sm:text-6xl">10%</p>
          <div>
            <h2 className="text-2xl font-semibold">Know someone who needs us?</h2>
            <p className="mt-2 max-w-xl text-ink/80">
              Refer a landlord, agent or neighbour — if they accept a quote, you earn 10% commission
              on the work. No limit on referrals.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/referrals#how-it-works" className="btn border border-ink/20 hover:bg-ink/5">
              How it works
            </Link>
            <Link href="/referrals#refer" className="btn-dark">
              Refer someone
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to get your property sorted?",
  body = "Tell us about the job and we’ll come back with a clear price and next steps.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-sand py-16">
      <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-2 text-muted">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/request-a-quote" className="btn-dark">
            Request a quote
          </Link>
          <a href={site.phoneHref} className="btn-outline">
            <Icon name="phone" className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
