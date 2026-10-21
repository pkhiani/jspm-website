import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <LegalPage title="Website terms" updated="October 2026">
      <p>
        These terms apply to your use of this website. By using it you accept them. Separate terms
        apply to any work we carry out and will be confirmed with your quote.
      </p>
      <h2>Information on this site</h2>
      <p>
        We aim to keep the information on this website accurate and up to date, but it is provided
        for general information only. Services, coverage areas and availability may change.
      </p>
      <h2>Quotes</h2>
      <p>
        Submitting a form is an enquiry, not a booking. A job is only confirmed once we have issued a
        quote and you have accepted it.
      </p>
      <h2>Referral scheme</h2>
      <p>
        Referral commission is paid at 10% of the value of work invoiced to a referred customer who
        accepts a quote, once that invoice has been paid. We may change or end the scheme at any
        time; referrals already accepted will still be honoured.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> or call {site.phone}.
      </p>
    </LegalPage>
  );
}
