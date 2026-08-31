import { Container } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { brand, contact } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms that govern your use of the ${brand.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="pt-36 pb-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-6 text-muted-foreground [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
          <p>
            These terms govern your use of the {brand.name} marketing website operated by{" "}
            {brand.legalName}. This is a starting template — please have it reviewed by a legal
            professional before launch.
          </p>

          <h2>Use of this website</h2>
          <p>
            You may use this website to learn about our products and to contact us. You agree not to
            misuse the site or attempt to disrupt its operation.
          </p>

          <h2>Inquiries</h2>
          <p>
            Submitting an inquiry does not create a contract or obligation to purchase. Product
            availability, features and pricing shown here may change and are confirmed at the time of
            purchase.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The {brand.name} name, logo and content on this site are the property of {brand.legalName}
            and may not be used without permission.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            This website is provided &ldquo;as is&rdquo;. To the extent permitted by law, we are not
            liable for any loss arising from your use of it.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email us at{" "}
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
