import Link from "next/link";
import { PolicyPage } from "@/components/policy-page";
import { pageMetadata } from "@/lib/seo";
import { brand, contact } from "@/lib/site";
import {
  GRIEVANCE_OFFICER,
  HOSTING,
  MACHINE_LOG_RETENTION_DAYS,
  POST_CANCELLATION_DAYS,
  STATUTORY_RECORD_YEARS,
  TRACKING_RETENTION_DAYS,
} from "@/lib/policies";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How OZZO collects, uses, shares, retains and protects personal data across the OZZO web dashboard, the OZZO SALES Android application and this website.",
  path: "/privacy",
  keywords: [
    "OZZO privacy policy",
    "field sales app privacy",
    "DPDP Act compliance",
    "data retention",
    "location data privacy India",
  ],
});

const EFFECTIVE_DATE = "27 September 2026";

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      subtitle={`${brand.legalName} — OZZO web dashboard, OZZO SALES Android application and ozzo.co.in`}
      effectiveDate={EFFECTIVE_DATE}
    >
      <p>
        This Privacy Policy explains how {brand.legalName} (&ldquo;{brand.name}&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, discloses, retains
        and protects information in connection with the OZZO web dashboard, the{" "}
        <strong>OZZO SALES — Field Sales CRM</strong> Android application, and this website
        (together, the &ldquo;Service&rdquo;). It applies to every product and page that links to
        it.
      </p>

      <h2>Who this policy is for</h2>
      <p>
        OZZO is a <strong>business-to-business</strong> Sales Force Automation and CRM platform. It
        is bought by a company or organisation (the &ldquo;Organisation&rdquo;) and provided by that
        Organisation to its own employees, field representatives, managers and administrators
        (&ldquo;Users&rdquo;).
      </p>
      <p>This distinction runs through the whole policy, so it is worth stating plainly:</p>
      <ul>
        <li>
          Where we decide why and how information is handled — for example, an enquiry you send us
          through this website — <strong>we are the controller</strong> of that information.
        </li>
        <li>
          Where your Organisation decides what goes into OZZO — customers, orders, attendance,
          location, photographs — <strong>the Organisation is the controller and we act as a
          processor</strong>, handling that data on the Organisation&rsquo;s instructions and for no
          purpose of our own.
        </li>
      </ul>
      <p>
        If you are a User and you want to know why your Organisation has enabled a particular
        feature, or you wish to have your information corrected or erased,{" "}
        <strong>your first point of contact is your Organisation</strong>. We will support them in
        answering you.
      </p>

      <h2>How this policy is organised</h2>
      <ul>
        <li>
          <strong>Part I</strong> — information {brand.name} collects and controls: website
          visitors, enquiries and account signup.
        </li>
        <li>
          <strong>Part II</strong> — information {brand.name} processes on your
          Organisation&rsquo;s behalf: everything inside the product, including how long it is kept
          and how it is protected.
        </li>
        <li>
          <strong>Part III</strong> — general matters: your rights, our Grievance Officer, changes
          to this policy, and how to contact us.
        </li>
      </ul>

      {/* ─────────────────────── PART I ─────────────────────── */}
      <h2>Part I — Information we collect and control</h2>

      <h3>1. Information you give us</h3>
      <ul>
        <li>
          <strong>Enquiries and demo requests.</strong> When you submit a form on this website we
          collect your name, business email address, telephone number, company name, team size,
          industry, and anything else you choose to write to us.
        </li>
        <li>
          <strong>Account signup.</strong> When an account is created we collect the administrator
          name, business email address, telephone number, company name and the plan selected.
        </li>
        <li>
          <strong>Support and sales conversations.</strong> We keep records of email, WhatsApp and
          telephone correspondence so that we can answer you and keep a history of what was agreed.
        </li>
        <li>
          <strong>Payment information.</strong> Where you pay us we record the fact of payment, the
          amount, the invoice and your billing and tax details.{" "}
          <strong>We do not store card numbers.</strong> Card details, where used, are handled by
          the payment provider and do not reach our servers.
        </li>
      </ul>

      <h3>2. Information collected automatically</h3>
      <ul>
        <li>
          <strong>Technical information</strong> — IP address, browser type and version, operating
          system, device model, language, time zone, referring page, and the date and time of
          access.
        </li>
        <li>
          <strong>Usage information</strong> — which pages and screens are opened and which features
          are used, so we can understand what helps and where people get stuck.
        </li>
        <li>
          <strong>Diagnostic information</strong> — error reports and performance measurements when
          something fails, so we can fix it.
        </li>
      </ul>

      <h3>3. Cookies</h3>
      <p>
        This website uses a small number of cookies. What they do and how to control them is set out
        in our <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>

      <h3>4. Why we use this information</h3>
      <ul>
        <li>to respond to your enquiry and to provide a demonstration or a quotation;</li>
        <li>to create, administer and support your account;</li>
        <li>to invoice you and keep the accounting records the law requires;</li>
        <li>to provide customer support and keep a record of it;</li>
        <li>to notify you about changes to the Service, to pricing, or to this policy;</li>
        <li>
          to improve the Service — to understand which features are used, find faults and measure
          performance;
        </li>
        <li>to protect the Service against fraud, abuse and security incidents;</li>
        <li>to comply with the law.</li>
      </ul>

      <h3>5. Marketing</h3>
      <p>
        We may contact you about OZZO products, features and offers where you have given us your
        details in a business context. Every marketing email carries an unsubscribe link, and you
        can ask us to stop at any time by writing to{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>. Opting out of marketing does not
        stop service messages such as invoices, security notices and renewal reminders, which are
        part of the Service itself.
      </p>

      <h3>6. When we share information</h3>
      <p>
        <strong>We do not sell personal information, and we never have.</strong> We do not share it
        for anyone else&rsquo;s advertising. We disclose it only in these situations:
      </p>
      <ul>
        <li>
          <strong>Service providers.</strong> We use a small number of carefully selected companies
          to host the Service, send email, deliver notifications and build our mobile application.
          They may handle personal data strictly to provide those functions to us, are bound by
          contract, and may not use it for their own purposes. A current list is available to
          customers on request.
        </li>
        <li>
          <strong>Your Organisation.</strong> If you are a User, information about your use of OZZO
          is visible to your Organisation&rsquo;s administrators and managers. That is the purpose
          of the product.
        </li>
        <li>
          <strong>Legal requirements.</strong> Where we are required to disclose information by law,
          by a court or by a competent authority; or where disclosure is necessary to establish,
          exercise or defend a legal claim.
        </li>
        <li>
          <strong>Business transfer.</strong> If {brand.legalName} is involved in a merger,
          acquisition or sale of assets, information may be transferred as part of that transaction.
          We would notify you before your information became subject to a different privacy policy.
        </li>
      </ul>

      <h3>7. Where information is held</h3>
      <p>
        Data is currently hosted in <strong>{HOSTING.current}</strong>.
        {HOSTING.migrationInProgress && (
          <>
            {" "}
            We are migrating to <strong>{HOSTING.planned}</strong> so that data is held within
            India. This page will be updated when that migration is complete.
          </>
        )}{" "}
        By using the Service you consent to your information being processed in the location stated
        above.
      </p>

      {/* ─────────────────────── PART II ─────────────────────── */}
      <h2>Part II — Information we process for your Organisation</h2>

      <h3>8. What this part covers</h3>
      <p>
        This part concerns the data your Organisation and its Users put into OZZO. Your Organisation
        decides what is entered, who may see it, and how it is used. We hold it on their behalf.
      </p>
      <p>Depending on the plan and the features switched on, this includes:</p>
      <ul>
        <li>
          <strong>Business records</strong> — customers, contacts, products, price lists,
          territories, routes, orders, invoices, payments, quotations, dispatches and stock
          movements.
        </li>
        <li>
          <strong>User records</strong> — names, business contact details, roles, reporting
          managers, assigned areas and device information.
        </li>
        <li>
          <strong>Work records</strong> — attendance, visits, tasks, leads, expenses, leave and
          route execution.
        </li>
        <li>
          <strong>Location data</strong> — see section 9.
        </li>
        <li>
          <strong>Photographs</strong> — see section 10.
        </li>
      </ul>

      <h3>9. Location data</h3>
      <p>Location is the most sensitive category OZZO handles, so we set it out in full.</p>
      <ul>
        <li>
          Location is collected <strong>only where the Organisation has enabled tracking</strong>{" "}
          for that User. It is not switched on by default for every feature or every plan.
        </li>
        <li>
          Where enabled, the OZZO SALES application records the device&rsquo;s position
          periodically during the working day, and at the moment a User marks attendance or checks
          in to or out of a customer visit.
        </li>
        <li>
          The application requests location permission through the standard Android prompt, and may
          collect location in the background so that the day&rsquo;s route is continuous. A User can
          withdraw that permission at any time in device settings, although the
          Organisation&rsquo;s attendance and visit features may then not work.
        </li>
        <li>
          Location is used to show attendance, the route travelled and distance covered, and to
          confirm that a visit took place at the customer&rsquo;s premises where the Organisation
          has enabled that check.
        </li>
        <li>
          <strong>Location is never used for any purpose of ours</strong>, is never sold, and is
          never shared outside the Organisation except as described in section 6.
        </li>
      </ul>

      <h3>10. Photographs</h3>
      <p>
        Where the Organisation has enabled the relevant features, the application captures
        photographs: an attendance selfie at punch-in and punch-out, photographs taken during a
        customer visit, and photographs of expense bills and odometer readings. These are stored
        against the record they belong to and are visible to the Organisation&rsquo;s managers and
        administrators.
      </p>

      <h3>11. The mobile application and offline working</h3>
      <p>
        OZZO SALES is designed to work without a network connection. To do this it keeps a copy of
        the User&rsquo;s own data on the device and synchronises when connectivity returns. That
        copy is held in the application&rsquo;s private storage, is not readable by other
        applications, and is removed when the User signs out.
      </p>

      <h3 id="retention">12. How long we keep data</h3>
      <p>Data in OZZO falls into two groups, and each has its own rule.</p>

      <h3>12.1 Business data — kept while the account is active</h3>
      <p>
        We do not age out the record of your business. The following are kept for as long as the
        Organisation&rsquo;s subscription remains active:
      </p>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Why it is kept</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Customers, contacts, products, price lists, territories, routes, schemes and other
              master records
            </td>
            <td>They are the configuration your business runs on.</td>
          </tr>
          <tr>
            <td>Orders, invoices, payments, quotations, dispatches and stock movements</td>
            <td>
              Financial records. Deleting them would corrupt outstanding balances and stock
              positions, and they are subject to statutory retention — see section 12.4.
            </td>
          </tr>
          <tr>
            <td>Visits, tasks, leads, deals, attendance, leave and expenses</td>
            <td>Your operating history, and the basis of every report in the product.</td>
          </tr>
          <tr>
            <td>Expense bills, payment receipts and odometer photographs</td>
            <td>
              Kept at full size with the financial record they evidence, for as long as that record
              is kept.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>12.2 Tracking data — kept for one year</h3>
      <p>
        High-volume material generated continuously by the mobile application is kept for{" "}
        <strong>{TRACKING_RETENTION_DAYS} days</strong> and then reduced, not discarded:
      </p>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Kept in full</th>
            <th>After that period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Location points — the detailed route shown on a map</td>
            <td>{TRACKING_RETENTION_DAYS} days</td>
            <td>
              Replaced by a daily summary for each User: distance travelled, first and last recorded
              location, time on field and customers visited. The summary is retained while the
              account is active, so distance and attendance reporting continues to work for earlier
              periods. The individual points are permanently deleted.
            </td>
          </tr>
          <tr>
            <td>Attendance selfies and visit photographs</td>
            <td>{TRACKING_RETENTION_DAYS} days at full resolution</td>
            <td>
              Replaced by a reduced-resolution copy, retained while the account is active. The
              photograph remains viewable as a record; only its file size is reduced.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>12.3 Technical logs — kept for {MACHINE_LOG_RETENTION_DAYS} days</h3>
      <p>
        Device health records, automation event logs, delivery records for notifications already
        sent, and import job histories are retained for {MACHINE_LOG_RETENTION_DAYS} days and then
        deleted. They exist for troubleshooting and contain no business content.
      </p>

      <h3>12.4 Statutory retention</h3>
      <p>
        Indian tax law requires businesses to preserve accounting records, including invoices and
        payment records, for <strong>{STATUTORY_RECORD_YEARS} years</strong>. Where the Organisation
        is subject to such an obligation, it remains the Organisation&rsquo;s responsibility, and the
        Organisation should export its records before closing its account. We may also retain
        limited information beyond the periods above where the law requires it, or where necessary
        to establish, exercise or defend a legal claim.
      </p>

      <h3>13. When a subscription ends</h3>
      <p>
        If a subscription is cancelled or lapses, the account is suspended but{" "}
        <strong>nothing is deleted for {POST_CANCELLATION_DAYS} days</strong>. During that period
        the Organisation may request a complete export of its data at no charge, and restoring the
        subscription restores full access. After {POST_CANCELLATION_DAYS} days the account&rsquo;s
        data is permanently deleted from our live systems. Deletion is irreversible.
      </p>

      <h3>14. Backups</h3>
      <p>
        Backup copies are taken for disaster recovery and are encrypted. Because a backup is a copy
        taken at a point in time, data deleted from the live system may continue to exist in a
        backup until that backup expires in the ordinary cycle. Backups are used to recover from
        loss of the system as a whole; they are not used to restore individual records deleted by a
        User.
      </p>

      <h3 id="security">15. How we protect data</h3>
      <p>
        We maintain technical and organisational measures appropriate to the nature of the data we
        hold. These include:
      </p>
      <ul>
        <li>
          <strong>Separation between Organisations.</strong> OZZO serves many Organisations from one
          application. Every record carries the identity of the account it belongs to, and access is
          enforced in the <strong>database itself</strong>, not only in application code. A fault in
          the application cannot expose one Organisation&rsquo;s data to another, because the
          database refuses the read regardless of what is asked of it.
        </li>
        <li>
          <strong>Encryption in transit.</strong> All traffic between the mobile application, the
          web dashboard and our servers is encrypted using TLS. Unencrypted connections are not
          accepted.
        </li>
        <li>
          <strong>Encryption at rest.</strong> Databases, stored files and backups are encrypted on
          disk.
        </li>
        <li>
          <strong>Passwords.</strong> Passwords are stored only as salted one-way hashes. They
          cannot be read by us or recovered — only reset.
        </li>
        <li>
          <strong>Permissions within an Organisation.</strong> What a field User may see, compared
          with a manager or an administrator, is enforced by the same database-level controls, not
          merely hidden in the interface.
        </li>
        <li>
          <strong>Restricted staff access.</strong> Access to production systems is limited to
          personnel who require it, protected by multi-factor authentication, recorded in an audit
          log, and withdrawn when no longer needed.
        </li>
        <li>
          <strong>Secure development.</strong> User-supplied content is sanitised before display;
          database queries are parameterised; secrets and keys are held server-side and are not
          shipped inside the mobile application; and changes affecting authentication or access
          control are reviewed before release.
        </li>
      </ul>
      <p>
        No method of transmission or storage is completely secure and we cannot guarantee absolute
        security. We do commit to applying the measures described above and to keeping them current.
      </p>

      <h3>16. The Organisation&rsquo;s responsibilities</h3>
      <p>
        Where we act as a processor, the Organisation is responsible for the lawfulness of what it
        does with OZZO. In particular, the Organisation should:
      </p>
      <ul>
        <li>
          inform its Users that OZZO is in use and what is collected — including, where enabled,
          location and photographs;
        </li>
        <li>obtain any consent its own obligations require before enabling tracking;</li>
        <li>
          give access only to those who need it, and remove access when a User leaves the
          Organisation;
        </li>
        <li>keep account credentials secure and not share logins between people;</li>
        <li>respond to its own Users&rsquo; requests about their personal data.</li>
      </ul>

      {/* ─────────────────────── PART III ─────────────────────── */}
      <h2>Part III — General</h2>

      <h3>17. Your rights</h3>
      <p>
        Under the Digital Personal Data Protection Act, 2023 and other applicable law, you may have
        the right to:
      </p>
      <ul>
        <li>obtain confirmation of whether we hold personal data about you, and a summary of it;</li>
        <li>have inaccurate or incomplete personal data corrected or completed;</li>
        <li>have personal data erased where it is no longer needed for the purpose it was given;</li>
        <li>withdraw a consent you have given, without affecting what was done before;</li>
        <li>nominate another person to exercise these rights in the event of death or incapacity;</li>
        <li>make a grievance, as described in section 19.</li>
      </ul>

      <h3>18. How to make a request</h3>
      <p>
        <strong>If you are a User of an Organisation&rsquo;s OZZO account</strong>, please make your
        request to that Organisation. They control the data and can act on it directly. If they ask
        us for help, we will assist them.
      </p>
      <p>
        <strong>Otherwise</strong>, write to{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>. We may need to verify your identity
        before acting, and we may be unable to comply in full where the law requires us to retain
        something.
      </p>

      <h3>19. Grievance Officer</h3>
      <p>
        In accordance with the Digital Personal Data Protection Act, 2023, the following person may
        be contacted regarding any complaint or request concerning personal data:
      </p>
      <p>
        <strong className="text-foreground">{GRIEVANCE_OFFICER.name}</strong>
        <br />
        {GRIEVANCE_OFFICER.title}, {brand.legalName}
        <br />
        <a href={`mailto:${GRIEVANCE_OFFICER.email}`}>{GRIEVANCE_OFFICER.email}</a>
      </p>
      <p>
        We will acknowledge your communication and respond within {GRIEVANCE_OFFICER.responseDays}{" "}
        days.
      </p>

      <h3>20. Children</h3>
      <p>
        OZZO is a workplace tool sold to businesses and is not directed at children. We do not
        knowingly collect personal data from anyone under 18. If you believe a child&rsquo;s data has
        been provided to us, contact us and we will delete it.
      </p>

      <h3>21. Artificial intelligence features</h3>
      <p>
        Certain features, where enabled by the Organisation, use artificial intelligence to assist
        with tasks such as answering product questions or summarising information.{" "}
        <strong>Customer data is not used to train artificial-intelligence models</strong>, whether
        ours or anyone else&rsquo;s. No decision producing a legal or similarly significant effect
        on an individual is taken by automated means without human involvement.
      </p>

      <h3>22. Third-party links</h3>
      <p>
        This website and the Service may link to sites we do not operate, including Google Play. We
        are not responsible for their content or their privacy practices, and we encourage you to
        read their policies.
      </p>

      <h3>23. Changes to this policy</h3>
      <p>
        We may update this policy as the Service develops or the law changes, and the effective date
        at the top of this page will change with it. Where a change materially affects how we handle
        personal data we will notify account administrators by email in advance. Continuing to use
        the Service after a change takes effect indicates acceptance of the updated policy.
      </p>

      <h3>24. Contact</h3>
      <p>
        {brand.legalName}
        <br />
        Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <br />
        Telephone: {contact.phoneDisplay} ({contact.hours})
      </p>
      <p>
        Commercial terms, including refunds and service activation, are in our{" "}
        <Link href="/terms">Terms of Service</Link>. Cookies are covered in our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>
    </PolicyPage>
  );
}
