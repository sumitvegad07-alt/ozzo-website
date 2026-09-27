import Link from "next/link";
import { PolicyPage } from "@/components/policy-page";
import { pageMetadata } from "@/lib/seo";
import { brand, contact } from "@/lib/site";
import { GRIEVANCE_OFFICER, HOSTING, SUBPROCESSORS } from "@/lib/policies";

export const metadata = pageMetadata({
  title: "Data Security Policy",
  description:
    "How OZZO protects customer data: encryption, tenant isolation, access control, hosting location, sub-processors and incident response.",
  path: "/data-security",
  keywords: [
    "SaaS data security policy India",
    "field sales software security",
    "tenant isolation",
    "DPDP compliant CRM",
    "sub-processors",
  ],
});

const EFFECTIVE_DATE = "27 September 2026";

export default function DataSecurityPage() {
  return (
    <PolicyPage
      title="Data Security Policy"
      subtitle={`${brand.legalName} — how we protect your data`}
      effectiveDate={EFFECTIVE_DATE}
    >
      <p>
        This page describes the measures {brand.legalName} takes to protect data held in OZZO. It is
        written plainly so that a prospective customer&rsquo;s IT or compliance team can assess it
        without a call.
      </p>
      <p>
        We describe here what we actually do. Where something is planned rather than in place, it is
        marked as such.
      </p>

      <h2>1. Separation between customers</h2>
      <p>
        OZZO is a multi-tenant service: many organisations use the same application. Every record
        stored in OZZO carries the identity of the account it belongs to, and access is enforced in
        the <strong>database itself</strong> using row-level security, not only in the application.
      </p>
      <p>
        This matters: a mistake in application code cannot expose one customer&rsquo;s data to
        another, because the database refuses the read regardless of what the application asks for.
        Permissions within an account — what a field user may see compared with a manager or an
        administrator — are enforced the same way.
      </p>

      <h2>2. Encryption</h2>
      <ul>
        <li>
          <strong>In transit:</strong> all traffic between the mobile app, the web dashboard and our
          servers uses TLS (HTTPS). Plain HTTP is not accepted.
        </li>
        <li>
          <strong>At rest:</strong> databases, file storage and backups are encrypted on disk using
          AES-256.
        </li>
        <li>
          <strong>Passwords</strong> are never stored in readable form. They are stored as salted
          one-way hashes, and cannot be recovered by us — only reset.
        </li>
      </ul>

      <h2>3. Access control</h2>
      <ul>
        <li>
          Access to production systems is limited to personnel who require it, and is protected by
          multi-factor authentication.
        </li>
        <li>
          Administrative actions taken by {brand.name} staff on customer accounts are recorded in an
          audit log.
        </li>
        <li>
          Within your account, you control who has access and what they may do, through roles and
          permissions you configure yourself.
        </li>
        <li>Access is removed when it is no longer required.</li>
      </ul>

      <h2>4. Where your data is held</h2>
      <p>
        Customer data is currently hosted in <strong>{HOSTING.current}</strong>.
      </p>
      {HOSTING.migrationInProgress && (
        <p>
          <strong>Planned change:</strong> we are migrating to{" "}
          <strong>{HOSTING.planned}</strong> so that customer data is held within India. This page
          will be updated when the migration is complete. Customers will be notified in advance of
          any scheduled downtime.
        </p>
      )}

      <h2>5. Backups and recovery</h2>
      <p>
        Backups are taken automatically on a rolling schedule, are encrypted, and are held
        separately from the live database. Restoring from backup is a recovery measure for loss of
        the whole system; it is not used to recover individual records deleted by a user.
      </p>
      <p>
        Retention periods for live data are set out in our{" "}
        <Link href="/data-retention">Data Retention Policy</Link>.
      </p>

      <h2>6. The mobile application</h2>
      <ul>
        <li>
          The Android app stores data on the device so it works without a network, and syncs when
          connectivity returns. That local copy is confined to the app&rsquo;s private storage and is
          not readable by other applications.
        </li>
        <li>
          Location is collected only for users whose organisation has enabled tracking, and the app
          requests the relevant permission from the user.
        </li>
        <li>Signing out removes the local copy from the device.</li>
      </ul>

      <h2>7. Sub-processors</h2>
      <p>
        We use the following third parties to run OZZO. Each is bound by its own contractual
        obligations regarding the data it handles, and none is permitted to use customer data for
        its own purposes.
      </p>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Purpose</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {SUBPROCESSORS.map((s) => (
            <tr key={s.name}>
              <td>
                <strong>{s.name}</strong>
              </td>
              <td>
                {s.purpose}
                {s.whenEnabled && (
                  <span className="text-muted-foreground"> — only where the feature is enabled</span>
                )}
              </td>
              <td>{s.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        We do not sell customer data, and we do not use it to train artificial-intelligence models.
      </p>

      <h2>8. Application security practices</h2>
      <ul>
        <li>User-supplied content is sanitised before it is displayed, to prevent script injection.</li>
        <li>Database queries are parameterised, preventing SQL injection.</li>
        <li>
          Dependencies are kept current, and changes are reviewed before release, including a
          security review of changes that touch authentication or access control.
        </li>
        <li>Secrets and API keys are held server-side and are never shipped in the mobile app.</li>
      </ul>

      <h2>9. If something goes wrong</h2>
      <p>
        If we become aware of a breach of security leading to unauthorised access to, or loss of,
        personal data, we will:
      </p>
      <ul>
        <li>act immediately to contain it;</li>
        <li>
          notify affected account administrators <strong>without undue delay</strong>, with what we
          know, what is affected and what we are doing;
        </li>
        <li>notify the relevant authority where the law requires it;</li>
        <li>report afterwards on the cause and what has been changed to prevent a recurrence.</li>
      </ul>

      <h2>10. What we do not yet claim</h2>
      <p>
        We would rather state this than let a customer assume it. {brand.name} does{" "}
        <strong>not</strong> currently hold SOC 2, ISO 27001 or HIPAA certification, and does not
        currently offer single sign-on (SSO). If your organisation requires any of these, contact us
        before purchase so we can tell you honestly whether and when we can meet it.
      </p>

      <h2>11. Reporting a security problem</h2>
      <p>
        If you believe you have found a security vulnerability in OZZO, please write to{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> with enough detail to reproduce it.
        We will acknowledge your report and keep you informed. Please do not publish the details
        until we have had a reasonable opportunity to fix the issue.
      </p>

      <h2>12. Contact</h2>
      <p>
        Security and data-protection questions: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        . Our {GRIEVANCE_OFFICER.title} is {GRIEVANCE_OFFICER.name}, contactable at the same
        address, and will respond within {GRIEVANCE_OFFICER.responseDays} days.
      </p>
    </PolicyPage>
  );
}
