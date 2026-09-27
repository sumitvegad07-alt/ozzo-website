import { Container } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { brand, contact } from "@/lib/site";
import Link from "next/link";
import { GRIEVANCE_OFFICER } from "@/lib/policies";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${brand.name} collects, uses and protects the information you share with us.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="pt-36 pb-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose-content mt-10 space-y-6 text-muted-foreground [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1">
          <p>
            This policy explains what information {brand.legalName} (&ldquo;{brand.name}&rdquo;,
            &ldquo;we&rdquo;) collects when you use this website and how we use it. It is a starting
            template — please have it reviewed by a legal professional before launch.
          </p>

          <h2>Information we collect</h2>
          <p>When you submit an inquiry or callback request, we collect the details you provide, such as:</p>
          <ul>
            <li>Your name and company name</li>
            <li>Your phone number, WhatsApp number and email address</li>
            <li>Your product interest, team size and any message you send us</li>
          </ul>
          <p>
            We also collect basic technical information (such as your browser type) to keep the site
            secure and working correctly.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To contact you about your inquiry, including calling or messaging you</li>
            <li>To understand your requirements and arrange a demo</li>
            <li>To improve our products and this website</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>Data storage</h2>
          <p>
            Inquiry details are stored securely in our systems and are accessible only to our team
            for the purpose of responding to you.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to access, correct or delete the information you have shared at any time by
            contacting us.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiry details are kept only as long as needed to respond to you and to keep a record
            of the conversation. How long we keep data inside the OZZO product is set out
            separately in our{" "}
            <Link href="/data-retention" className="font-semibold text-primary hover:underline">
              Data Retention Policy
            </Link>
            , and the measures protecting it are described in our{" "}
            <Link href="/data-security" className="font-semibold text-primary hover:underline">
              Data Security Policy
            </Link>
            .
          </p>

          <h2>Grievance Officer</h2>
          <p>
            In accordance with the Digital Personal Data Protection Act, 2023, the following person
            may be contacted about any complaint or request concerning your personal data:
          </p>
          <p>
            <strong className="text-foreground">{GRIEVANCE_OFFICER.name}</strong>
            <br />
            {GRIEVANCE_OFFICER.title}, {brand.legalName}
            <br />
            <a
              href={`mailto:${GRIEVANCE_OFFICER.email}`}
              className="font-semibold text-primary hover:underline"
            >
              {GRIEVANCE_OFFICER.email}
            </a>
          </p>
          <p>
            We will acknowledge your request and respond within{" "}
            {GRIEVANCE_OFFICER.responseDays} days.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold text-primary hover:underline">
              {contact.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </article>
  );
}
