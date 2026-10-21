import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Cookies" };

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie policy" updated="October 2026">
      <p>
        This website does not set any advertising or tracking cookies. We only use what is strictly
        necessary for the site to work, which does not require your consent.
      </p>
      <p>
        If we add analytics or other optional cookies in the future, we will update this page and
        ask for your consent first.
      </p>
      <p>
        Questions? Email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
