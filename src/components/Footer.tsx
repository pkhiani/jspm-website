import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const company = [
  { href: "/about", label: "About" },
  { href: "/work-with-us", label: "Work with us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/referrals", label: "Referrals" },
  { href: "/contact", label: "Contact" },
  { href: "/request-a-quote", label: "Request a quote" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo className="text-white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Planned, reactive and managed maintenance across Teesside and the North East.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-accent hover:text-accent"
            >
              <Icon name="facebook" className="h-4 w-4" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-accent hover:text-accent"
            >
              <Icon name="instagram" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Hours</h2>
          <dl className="mt-4 space-y-3 text-sm">
            {site.hours.map((h) => (
              <div key={h.days}>
                <dt className="text-white/60">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <h2 className="mt-6 text-sm font-semibold text-white">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <FooterList title="Company" links={company} />
        <FooterList title="Legal" links={legal} />
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-white/50">
          © {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-accent">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
