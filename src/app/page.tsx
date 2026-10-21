import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Advantages, Areas, Audiences, Blueprint, ReferralBand } from "@/components/Sections";
import { site, trades } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <Blueprint />
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl"
        />
        <div className="container-x relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-accent">Teesside & the North East</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] sm:text-6xl">
              One local team for <span className="text-accent">every trade.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Planned, reactive and managed maintenance for landlords, lettings, serviced
              accommodation and homeowners.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/request-a-quote" className="btn-primary">
                Request a quote <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn-ghost">
                <Icon name="phone" className="h-4 w-4" /> Call {site.phone}
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-3 gap-3" aria-label="Trades we cover">
            {trades.map((t) => (
              <li
                key={t.title}
                className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center text-xs font-semibold text-white/85"
              >
                <Icon name={t.icon} className="h-6 w-6 text-accent" />
                {t.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">One team for every trade.</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted">
              Whether it’s a one-off repair, an upgrade or renovating an existing property, our aim
              is to make property maintenance simple, stress-free and reliable.
            </p>
            <Link href="/services" className="btn-outline mt-6">
              Explore all services <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Audiences />
      <Areas />
      <Advantages />
      <ReferralBand />
    </>
  );
}
