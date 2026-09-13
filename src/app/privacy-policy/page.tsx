import { Container } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { brand, contact } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy — OZZO SALES app",
  description: `How the OZZO SALES (Field Sales CRM) mobile app collects, uses, shares and protects your data.`,
  path: "/privacy-policy",
});

const EFFECTIVE_DATE = "13 September 2026";

export default function AppPrivacyPolicyPage() {
  return (
    <article className="pt-36 pb-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-lg font-semibold text-foreground">
          OZZO SALES — Field Sales CRM (mobile application)
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Effective date: {EFFECTIVE_DATE} · Last updated: {EFFECTIVE_DATE}
        </p>

        <div className="prose-content mt-10 space-y-6 text-muted-foreground [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:font-semibold [&_th]:text-foreground [&_th]:py-2 [&_td]:py-2 [&_td]:align-top [&_td]:pr-4 [&_a]:text-primary [&_a]:font-medium hover:[&_a]:underline">
          <p>
            This Privacy Policy explains how {brand.legalName} (&ldquo;{brand.name}&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, shares and protects information in
            connection with the <strong>OZZO SALES — Field Sales CRM</strong> mobile application
            (the &ldquo;App&rdquo;) and the related web dashboard and services (together, the
            &ldquo;Service&rdquo;).
          </p>
          <p>
            OZZO SALES is a <strong>business-to-business (B2B) Sales Force Automation tool</strong>.
            It is provided to field-sales employees and users by the company or organisation that
            employs or engages them (the &ldquo;Organisation&rdquo;). In most cases your Organisation
            is the <strong>data controller</strong> of the information you enter, and OZZO acts as a
            <strong> data processor</strong> on the Organisation&rsquo;s behalf. If you have questions
            about how your Organisation uses your data, please contact your Organisation directly.
          </p>

          <h2>1. Information we collect</h2>

          <h3>a. Information you provide</h3>
          <ul>
            <li>
              <strong>Account &amp; profile:</strong> your name, work email address, phone number,
              profile photo, role and the Organisation you belong to. Authentication credentials are
              handled by our authentication provider; we do not store your password in plain text.
            </li>
            <li>
              <strong>Business records you create:</strong> customers, contacts, leads, orders,
              quotations, payments/collections, expenses, visit notes, attendance and leave records,
              and similar sales data you enter while doing your job.
            </li>
          </ul>

          <h3>b. Location information</h3>
          <p>
            With your permission, the App collects <strong>precise (GPS) location</strong> to deliver
            core field-sales features:
          </p>
          <ul>
            <li>Recording check-in / check-out coordinates for attendance and customer visits;</li>
            <li>Geo-fencing (confirming a visit happens at the customer&rsquo;s location);</li>
            <li>
              Recording your route and field activity <strong>in the background while you are on an
              active shift / punched in</strong>, so your Organisation can see field coverage.
            </li>
          </ul>
          <p>
            Background location is collected <strong>only while you are punched in</strong> to a shift
            and is used solely for the field-activity features above. You control this through the
            Android location permission and can revoke it at any time in your device settings; doing
            so will disable the features that depend on it.
          </p>

          <h3>c. Camera &amp; photos</h3>
          <p>
            With your permission, the App uses the <strong>camera</strong> and lets you attach images
            for punch-in selfies, geo-tagged visit photos, and proof for expenses or collections. We
            do not record audio or video.
          </p>

          <h3>d. Device &amp; technical information</h3>
          <ul>
            <li>Device model, operating-system version and app version, for diagnostics and support;</li>
            <li>Basic connectivity status, to support offline capture and later sync;</li>
            <li>Log and error information needed to keep the Service secure and working.</li>
          </ul>
          <p>
            The App does <strong>not</strong> use third-party advertising SDKs, and we do not build
            advertising profiles. The App does not contain ads.
          </p>

          <h2>2. How we use information</h2>
          <ul>
            <li>To provide the Service — attendance, visits, routes, order-taking, collections and reporting;</li>
            <li>To authenticate you and keep your account and your Organisation&rsquo;s data secure;</li>
            <li>To sync your offline-captured data when connectivity is restored;</li>
            <li>To give your Organisation the field-activity, sales and attendance reports it relies on;</li>
            <li>To provide customer support and diagnose technical issues;</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p>We do <strong>not</strong> sell your personal information.</p>

          <h2>3. How information is shared</h2>
          <ul>
            <li>
              <strong>With your Organisation:</strong> data you record in the App (including location,
              attendance, visits and sales records) is visible to authorised administrators and
              managers within your Organisation, according to their role and permissions. This is the
              core purpose of the App.
            </li>
            <li>
              <strong>Service providers (sub-processors):</strong> we use trusted providers to run the
              Service, including <strong>Supabase</strong> (secure database, authentication and file
              storage) and <strong>Resend</strong> (transactional email). They process data only on our
              instructions.
            </li>
            <li>
              <strong>Legal:</strong> we may disclose information if required by law or to protect the
              rights, safety and security of users and the Service.
            </li>
          </ul>
          <p>We do not share your personal information with third parties for their own marketing.</p>

          <h2>4. Data storage, security &amp; retention</h2>
          <p>
            Data is stored on managed cloud infrastructure and transmitted over encrypted connections
            (HTTPS/TLS). Access is restricted by row-level security and role-based permissions so users
            see only the data they are authorised to see. We retain personal data for as long as your
            account is active or as needed to provide the Service to your Organisation, and thereafter
            as required to comply with legal obligations, resolve disputes and enforce agreements.
          </p>

          <h2>5. Your rights &amp; choices</h2>
          <ul>
            <li>You can access and update your profile information within the App.</li>
            <li>
              You can grant or revoke device permissions (location, camera) at any time in your device
              settings.
            </li>
            <li>
              You may request access to, correction of, or deletion of your personal data. Because your
              Organisation controls most of your data, we may direct or coordinate such requests with
              your Organisation. To make a request, contact us using the details below.
            </li>
          </ul>

          <h3>Account &amp; data deletion</h3>
          <p>
            To request deletion of your account and associated personal data, email{" "}
            <a href={`mailto:${contact.email}?subject=Account%20deletion%20request%20-%20OZZO%20SALES`}>
              {contact.email}
            </a>{" "}
            with the subject &ldquo;Account deletion request&rdquo; from your registered email address.
            We will verify and action the request in line with applicable law and our obligations to
            your Organisation. Certain records may be retained where required by law.
          </p>

          <h2>6. Children</h2>
          <p>
            The Service is intended for use by employees and businesses and is not directed to children
            under 18. We do not knowingly collect personal data from children.
          </p>

          <h2>7. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be reflected by
            updating the &ldquo;Last updated&rdquo; date above and, where appropriate, through in-app or
            email notice.
          </p>

          <h2>8. Contact us</h2>
          <p>
            {brand.legalName}
            <br />
            Email:{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <br />
            Phone: {contact.phoneDisplay}
            <br />
            Website:{" "}
            <a href="https://ozzo.co.in" target="_blank" rel="noopener noreferrer">
              https://ozzo.co.in
            </a>
          </p>
        </div>
      </Container>
    </article>
  );
}
