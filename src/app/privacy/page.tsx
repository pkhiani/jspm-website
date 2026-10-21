import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="October 2026">
      <p>
        {site.name} (“we”, “us”) respects your privacy. This notice explains what personal
        information we collect through this website and how we use it.
      </p>
      <h2>What we collect</h2>
      <p>When you contact us, request a quote, refer someone or apply to join our trade network, we collect the details you provide, such as:</p>
      <ul>
        <li>your name, phone number and email address;</li>
        <li>property address or postcode and details of the work required;</li>
        <li>for trade applications, your trade, experience and coverage area;</li>
        <li>for referrals, the contact details of the person you refer (with their permission).</li>
      </ul>
      <h2>How we use it</h2>
      <p>
        We use this information only to respond to your enquiry, provide quotes, carry out and
        invoice work, manage referrals and assess trade applications. Our lawful bases are taking
        steps at your request before entering into a contract, performing a contract, and our
        legitimate interest in running our business.
      </p>
      <h2>Sharing</h2>
      <p>
        Your details may be shared with a member of our team or a trade from our network assigned to
        your job. We use trusted service providers (for example email delivery and website hosting)
        to operate this website. We never sell your data.
      </p>
      <h2>Retention</h2>
      <p>
        We keep enquiry information for as long as needed to deal with it, and job and invoice
        records for as long as required for accounting and legal purposes.
      </p>
      <h2>Your rights</h2>
      <p>
        Under UK GDPR you can ask to access, correct or delete your personal data, or object to how
        we use it. Contact us at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
        You can also complain to the Information Commissioner’s Office (ico.org.uk).
      </p>
    </LegalPage>
  );
}
