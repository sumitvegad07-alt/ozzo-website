import Link from "next/link";
import { PolicyPage } from "@/components/policy-page";
import { pageMetadata } from "@/lib/seo";
import { brand, contact } from "@/lib/site";
import { TRIAL_DAYS } from "@/lib/policies";

export const metadata = pageMetadata({
  title: "Delivery & Service Activation Policy",
  description:
    "OZZO is delivered electronically. How and when your account is activated after payment, and what you receive.",
  path: "/shipping-policy",
});

const EFFECTIVE_DATE = "27 September 2026";

export default function ShippingPolicyPage() {
  return (
    <PolicyPage
      title="Delivery & Service Activation Policy"
      subtitle={`${brand.legalName} — electronic delivery of the OZZO service`}
      effectiveDate={EFFECTIVE_DATE}
    >
      <p>
        {brand.name} is software delivered over the internet. <strong>No physical goods are
        shipped</strong>, and there is nothing to dispatch, track or deliver to an address. This
        page explains how and when you receive the service after paying for it, and exists because
        payment providers require a delivery policy to be published.
      </p>

      <h2>1. What you receive</h2>
      <ul>
        <li>Access to the OZZO web dashboard at your account address.</li>
        <li>
          Access to the <strong>OZZO SALES</strong> Android application, downloadable from Google
          Play, for each licensed user.
        </li>
        <li>The number of user logins covered by your plan.</li>
        <li>Onboarding assistance and support as described in your plan.</li>
      </ul>

      <h2>2. When your account is activated</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Activation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Free trial</td>
            <td>Immediately on sign-up. Valid {TRIAL_DAYS} days.</td>
          </tr>
          <tr>
            <td>Online payment</td>
            <td>
              Within <strong>24 working hours</strong> of the payment being confirmed, and usually
              the same working day.
            </td>
          </tr>
          <tr>
            <td>Bank transfer or cheque</td>
            <td>
              Within <strong>24 working hours</strong> of the funds clearing into our account.
            </td>
          </tr>
          <tr>
            <td>Adding users to an existing account</td>
            <td>Immediately once confirmed.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Working hours are {contact.hours}. Activation outside these hours is completed on the next
        working day.
      </p>

      <h2>3. How you are told</h2>
      <p>
        Login details are sent by email to the administrator named on your order. If you have not
        received them within the period above, write to{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> or call {contact.phoneDisplay} and
        we will resolve it the same working day.
      </p>

      <h2>4. Onboarding and data setup</h2>
      <p>
        Activation gives you a working account. Loading your existing products, customers,
        territories and team is carried out with our assistance and depends on how quickly your data
        is provided to us. This setup work is included in your plan, and is not a condition of
        activation — your account is live and usable from day one.
      </p>

      <h2>5. Duration of service</h2>
      <p>
        Once activated, the service runs continuously for the term you have paid for. Renewal,
        cancellation and late payment are covered in our{" "}
        <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.
      </p>

      <h2>6. Contact</h2>
      <p>
        <a href={`mailto:${contact.email}`}>{contact.email}</a> · {contact.phoneDisplay} ·{" "}
        {contact.hours}
      </p>
    </PolicyPage>
  );
}
