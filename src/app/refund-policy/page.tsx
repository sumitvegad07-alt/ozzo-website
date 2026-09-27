import Link from "next/link";
import { PolicyPage } from "@/components/policy-page";
import { pageMetadata } from "@/lib/seo";
import { brand, contact } from "@/lib/site";
import { GRACE_DAYS, POST_CANCELLATION_DAYS, TRIAL_DAYS } from "@/lib/policies";

export const metadata = pageMetadata({
  title: "Refund & Cancellation Policy",
  description:
    "How OZZO handles cancellations, refunds, free trials and late payments. Subscriptions run for the full paid term; access continues until the term ends.",
  path: "/refund-policy",
});

const EFFECTIVE_DATE = "27 September 2026";

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      title="Refund & Cancellation Policy"
      subtitle={`${brand.legalName} — OZZO subscriptions`}
      effectiveDate={EFFECTIVE_DATE}
    >
      <p>
        This policy explains what happens when you cancel an OZZO subscription, when refunds are
        and are not given, and how free trials and late payments are handled. It applies to every
        OZZO plan bought by a business (&ldquo;you&rdquo;) from {brand.legalName}
        (&ldquo;{brand.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
      </p>

      <h2>1. In short</h2>
      <ul>
        <li>You pay in advance for a fixed term — a quarter, a half-year or a year.</li>
        <li>You may cancel at any time. Your subscription then simply does not renew.</li>
        <li>
          <strong>Payments already made are not refunded</strong>, but you keep full access for the
          rest of the term you have paid for.
        </li>
        <li>A free trial of {TRIAL_DAYS} days is available before you pay anything.</li>
      </ul>

      <h2>2. Free trial</h2>
      <p>
        New accounts may use OZZO free for <strong>{TRIAL_DAYS} days</strong>. No payment or card
        details are required to start a trial. At the end of the trial, access stops unless you
        choose a paid plan. Nothing is charged automatically, and there is nothing to cancel.
      </p>
      <p>
        Data entered during a trial is kept for {POST_CANCELLATION_DAYS} days after the trial ends,
        so an account that converts later loses nothing. See our{" "}
        <Link href="/data-retention">Data Retention Policy</Link>.
      </p>

      <h2>3. Cancelling a paid subscription</h2>
      <p>
        You can cancel by writing to <a href={`mailto:${contact.email}`}>{contact.email}</a> or by
        telling your OZZO contact. There is no notice period and no cancellation fee.
      </p>
      <p>
        Cancellation stops the <strong>next</strong> renewal. It does not end the term you are
        currently in — you keep full access to OZZO, for all your users, until the last day of the
        period you have paid for.
      </p>

      <h2>4. Refunds</h2>
      <p>
        <strong>OZZO subscription fees are non-refundable.</strong> A subscription is sold as a
        fixed term paid in advance, and the full term is delivered to you whether or not you use it.
        We do not refund unused months, unused users, or a term cut short by your own cancellation.
      </p>
      <p>This applies equally to:</p>
      <ul>
        <li>reducing your number of users part-way through a term;</li>
        <li>switching to a smaller plan part-way through a term;</li>
        <li>periods during which you chose not to use the service.</li>
      </ul>
      <p>
        Adding users or upgrading a plan mid-term is charged for the remaining part of the term, and
        takes effect immediately.
      </p>

      <h3>4.1 When we do refund</h3>
      <p>We will refund you in full where:</p>
      <ul>
        <li>you were charged in error, or charged twice for the same period;</li>
        <li>you were charged after cancelling, for a term that had not yet started;</li>
        <li>
          we are unable to provide the service for an extended period for reasons within our
          control, and we cannot put it right.
        </li>
      </ul>
      <p>
        Approved refunds are returned to the original payment method within{" "}
        <strong>7 to 10 working days</strong>. Your bank may take longer to show it.
      </p>

      <h2>5. Late payment</h2>
      <p>
        If a renewal payment is not received by the due date, your account continues to work for a
        grace period of <strong>{GRACE_DAYS} days</strong>. The product warns your administrators
        before expiry so a renewal is never a surprise.
      </p>
      <p>
        After the grace period, access is suspended — users cannot sign in and the mobile app stops
        syncing. <strong>Your data is not deleted.</strong> It is kept for{" "}
        {POST_CANCELLATION_DAYS} days, and access is restored as soon as payment is received.
      </p>

      <h2>6. What happens to your data</h2>
      <p>
        Whether you cancel or your subscription lapses, your data is retained for{" "}
        <strong>{POST_CANCELLATION_DAYS} days</strong>, during which you may ask us for a complete
        export of it at no charge. After that period it is permanently deleted. The full rules are
        in our <Link href="/data-retention">Data Retention Policy</Link>.
      </p>

      <h2>7. Taxes</h2>
      <p>
        Prices are exclusive of GST unless stated otherwise. Where a refund is made, any GST charged
        is refunded with it, in line with applicable tax rules.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about billing, cancellation or a refund:{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> or {contact.phoneDisplay} (
        {contact.hours}).
      </p>
    </PolicyPage>
  );
}
