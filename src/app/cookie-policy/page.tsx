import Link from "next/link";
import { PolicyPage } from "@/components/policy-page";
import { pageMetadata } from "@/lib/seo";
import { brand, contact } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "What cookies and similar technologies OZZO uses on ozzo.co.in and in the OZZO web dashboard, why they are used, and how to control them.",
  path: "/cookie-policy",
  keywords: ["cookie policy", "OZZO cookies", "website cookies India"],
});

const EFFECTIVE_DATE = "27 September 2026";

export default function CookiePolicyPage() {
  return (
    <PolicyPage
      title="Cookie Policy"
      subtitle={`${brand.legalName} — ozzo.co.in and the OZZO web dashboard`}
      effectiveDate={EFFECTIVE_DATE}
    >
      <p>
        This policy explains what cookies and similar technologies {brand.legalName} uses, what they
        are for, and how you can control them. It should be read with our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>1. What a cookie is</h2>
      <p>
        A cookie is a small text file that a website asks your browser to store on your device. It
        lets the site recognise your browser on a later visit — for example, to keep you signed in
        so you are not asked for your password on every page.
      </p>
      <p>
        Related technologies work in a similar way. <strong>Local storage</strong> also keeps
        information in your browser, but is not sent back to the server with every request.
      </p>

      <h2>2. The kinds of cookie</h2>
      <ul>
        <li>
          <strong>Strictly necessary</strong> — without these the site cannot do what you have asked
          of it. Keeping you signed in is the main example. These cannot be switched off from within
          the site.
        </li>
        <li>
          <strong>Preference</strong> — remember a choice you have made, such as light or dark
          appearance.
        </li>
        <li>
          <strong>Analytics</strong> — help the site owner understand how the site is used.
        </li>
        <li>
          <strong>Advertising</strong> — used to build a profile of your interests and show you
          advertisements.
        </li>
      </ul>
      <p>
        <strong>OZZO uses the first two only.</strong> We do not use advertising cookies, we do not
        allow advertising networks to place cookies through our site, and we do not sell or share
        information about your visit for anyone else&rsquo;s advertising.
      </p>

      <h2>3. What we use</h2>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Type</th>
            <th>Set by</th>
            <th>How long</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Keeping you signed in.</strong> When you sign in to the OZZO dashboard, a
              session token is stored so that you stay signed in as you move between pages.
            </td>
            <td>Strictly necessary</td>
            <td>{brand.name}</td>
            <td>Until you sign out, or the session expires</td>
          </tr>
          <tr>
            <td>
              <strong>Security.</strong> Short-lived values used to protect sign-in and form
              submission against misuse.
            </td>
            <td>Strictly necessary</td>
            <td>{brand.name}</td>
            <td>The current session</td>
          </tr>
          <tr>
            <td>
              <strong>Your display preference.</strong> Remembers choices such as light or dark
              appearance so the interface looks the same next time.
            </td>
            <td>Preference</td>
            <td>{brand.name}</td>
            <td>Until you clear your browser storage</td>
          </tr>
        </tbody>
      </table>
      <p>
        This public website (ozzo.co.in) sets no cookies of its own for marketing purposes. If that
        changes — for example if we add website analytics — we will update this page and, where the
        law requires it, ask for your consent first.
      </p>

      <h2>4. Third-party content</h2>
      <p>
        Some pages embed content hosted elsewhere, such as a video player or a link to Google Play.
        Those providers may set their own cookies when their content loads, and we do not control
        them. Their own policies apply.
      </p>

      <h2>5. The mobile application</h2>
      <p>
        The OZZO SALES Android application does not use cookies. It stores a sign-in token and a
        local copy of your data on the device so that it works without a network. That storage is
        private to the application and is removed when you sign out. See our{" "}
        <Link href="/privacy">Privacy Policy</Link> for details.
      </p>

      <h2>6. How to control cookies</h2>
      <p>
        You can see, block and delete cookies through your browser settings — usually under
        &ldquo;Privacy&rdquo; or &ldquo;Site settings&rdquo;. Browsers also offer a private or
        incognito mode that discards them when you close the window.
      </p>
      <p>
        <strong>Blocking strictly necessary cookies will stop you signing in to OZZO.</strong> The
        dashboard cannot keep you authenticated without them, so it is not something we can work
        around.
      </p>

      <h2>7. Changes to this policy</h2>
      <p>
        If the cookies we use change, we will update this page and the effective date at the top of
        it.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about this policy: <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </PolicyPage>
  );
}
