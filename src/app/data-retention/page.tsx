import Link from "next/link";
import { PolicyPage } from "@/components/policy-page";
import { pageMetadata } from "@/lib/seo";
import { brand, contact } from "@/lib/site";
import {
  MACHINE_LOG_RETENTION_DAYS,
  POST_CANCELLATION_DAYS,
  STATUTORY_RECORD_YEARS,
  TRACKING_RETENTION_DAYS,
} from "@/lib/policies";

export const metadata = pageMetadata({
  title: "Data Retention Policy",
  description:
    "How long OZZO keeps your data. Business records are kept for as long as your account is active; location trails and photos are kept for one year.",
  path: "/data-retention",
  keywords: [
    "data retention policy",
    "how long is field sales data kept",
    "GPS data retention India",
    "DPDP data retention",
  ],
});

const EFFECTIVE_DATE = "27 September 2026";
const TRACKING_YEARS = TRACKING_RETENTION_DAYS / 365;

export default function DataRetentionPage() {
  return (
    <PolicyPage
      title="Data Retention Policy"
      subtitle={`${brand.legalName} — how long we keep your data`}
      effectiveDate={EFFECTIVE_DATE}
    >
      <p>
        This policy states how long {brand.legalName} keeps each kind of data you put into OZZO, and
        what happens to it afterwards. It is written to be specific: you should be able to read a
        row below and know exactly what is still available to you.
      </p>
      <p>
        OZZO is a business-to-business service. The company that buys OZZO decides what is entered
        into it and is the controller of that data; OZZO stores and processes it on that
        company&rsquo;s instructions.
      </p>

      <h2>1. The two rules</h2>
      <p>Everything in OZZO falls into one of two groups.</p>
      <ul>
        <li>
          <strong>Business data is kept for as long as your account is active.</strong> This is the
          record of your business — customers, products, orders, payments, visits and so on. We do
          not age it out, because deleting it would damage your own records.
        </li>
        <li>
          <strong>Tracking data is kept for {TRACKING_YEARS === 1 ? "one year" : `${TRACKING_RETENTION_DAYS} days`}.</strong>{" "}
          This is the high-volume material a field app produces continuously — location points and
          photographs. After that period it is reduced to a summary, not simply thrown away.
        </li>
      </ul>

      <h2>2. What is kept, and for how long</h2>

      <h3>2.1 Business data — kept while your account is active</h3>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Customers, contacts, products, price lists, territories, routes, schemes</td>
            <td>Your master records. Never aged out.</td>
          </tr>
          <tr>
            <td>Orders, invoices, payments, quotations, dispatches, stock movements</td>
            <td>
              Financial records. Also subject to statutory retention — see section 4.
            </td>
          </tr>
          <tr>
            <td>Visits, tasks, leads, deals, attendance records, leave records, expenses</td>
            <td>Your operating history, and the basis of every report.</td>
          </tr>
          <tr>
            <td>Expense bills, payment receipts and odometer photographs</td>
            <td>
              Kept with the financial record they belong to, at full size, because they are
              evidence for it.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>2.2 Tracking data — kept for one year</h3>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Kept</th>
            <th>Then</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Location points (the minute-by-minute route on a map)</td>
            <td>{TRACKING_RETENTION_DAYS} days</td>
            <td>
              Replaced by a daily summary for each user — distance travelled, first and last
              recorded location, time on field and customers visited. The summary is kept while your
              account is active, so distance and attendance reporting continues to work for earlier
              periods.
            </td>
          </tr>
          <tr>
            <td>Attendance selfies and visit photographs</td>
            <td>{TRACKING_RETENTION_DAYS} days at full size</td>
            <td>
              Replaced by a reduced-size copy, which is kept while your account is active. The
              photograph remains viewable as proof; only its resolution is reduced.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>2.3 Technical logs — kept for {MACHINE_LOG_RETENTION_DAYS} days</h3>
      <p>
        Device health records, automation event logs, delivery records for notifications already
        sent, and import job histories are kept for {MACHINE_LOG_RETENTION_DAYS} days and then
        deleted. These exist for troubleshooting and hold no business content.
      </p>

      <h2>3. If your subscription ends</h2>
      <p>
        If you cancel, or your subscription lapses, your account is suspended but{" "}
        <strong>nothing is deleted for {POST_CANCELLATION_DAYS} days</strong>. During that period
        you may request a complete export of your data at no charge, and restoring the account
        restores everything.
      </p>
      <p>
        After {POST_CANCELLATION_DAYS} days, all data belonging to the account is permanently
        deleted from our live systems. Deletion is irreversible.
      </p>
      <p>
        Cancellation terms are set out in our <Link href="/refund-policy">Refund &amp;
        Cancellation Policy</Link>.
      </p>

      <h2>4. Statutory retention</h2>
      <p>
        Indian tax law requires businesses to preserve accounting records — including invoices and
        payment records — for <strong>{STATUTORY_RECORD_YEARS} years</strong>. Where you are
        required to keep such records, you should export them before your account is deleted, as we
        cannot retain them for you once deletion has taken place.
      </p>
      <p>
        We may retain a limited amount of information beyond the periods above where the law
        requires it, or where it is necessary to establish or defend a legal claim.
      </p>

      <h2>5. Backups</h2>
      <p>
        Backups are taken and held on a rolling basis for disaster recovery, and are encrypted.
        Because backups are point-in-time copies, data deleted from the live system may persist in a
        backup until that backup expires in the ordinary cycle. Backups are never used to restore
        individual deleted records on request.
      </p>

      <h2>6. Different retention periods</h2>
      <p>
        The periods above are the standard for every OZZO account. If your organisation needs a
        longer period for a specific reason, contact us before your subscription begins and we will
        tell you whether we can accommodate it.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Under the Digital Personal Data Protection Act, 2023, individuals have rights over their
        personal data, including the right to seek correction and erasure. Because OZZO holds such
        data on behalf of the organisation that employs or engages you, please raise requests with
        that organisation first; we will support them in responding. Our contact for data
        protection matters is in our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>8. Changes</h2>
      <p>
        We will update this page if these periods change, and the effective date above will change
        with it. Where a change materially shortens a retention period, we will notify account
        administrators in advance.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about this policy: <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </PolicyPage>
  );
}
