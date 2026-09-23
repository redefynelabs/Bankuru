import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/Components/Legal/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions for using the ${siteConfig.legalName} website.`,
  alternates: { canonical: "/terms/" },
};

const email = <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>;

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    content: (
      <p>
        By accessing or using this website, you agree to be bound by these Terms &amp; Conditions. If you do not agree
        with any part of them, please do not use the website.
      </p>
    ),
  },
  {
    id: "about-us",
    title: "About us",
    content: (
      <p>
        This website is owned and operated by {siteConfig.legalName}, a company based in {siteConfig.address}. It
        provides information about our company, our vision and the products we build.
      </p>
    ),
  },
  {
    id: "use-of-website",
    title: "Use of the website",
    content: (
      <>
        <p>You agree to use this website only for lawful purposes. You must not:</p>
        <ul>
          <li>Use the website in any way that breaks any applicable law or regulation</li>
          <li>Attempt to gain unauthorised access to the website, its servers or any connected systems</li>
          <li>Introduce viruses, malware or any other harmful material</li>
          <li>Submit false, misleading, abusive or spam content through our contact form</li>
          <li>Copy, scrape or reproduce the website&apos;s content for commercial purposes without our permission</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <p>
        All content on this website — including text, graphics, logos, product names, images, videos, 3D models and
        design — is owned by or licensed to {siteConfig.legalName} and is protected by applicable intellectual property
        laws. You may view and share links to our pages for personal, non-commercial use. Any other use requires our prior
        written permission.
      </p>
    ),
  },
  {
    id: "products",
    title: "Our products",
    content: (
      <p>
        This website describes products we build, such as Dharma Scriptures and FundLens. Each product may have its own
        terms of use and privacy policy, which apply when you use that product. Product descriptions on this website are
        for general information and may change as our products evolve.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    content: (
      <p>
        This website contains links to third-party websites and services, including the Google Play Store, Apple App
        Store and social media platforms. We do not control and are not responsible for their content, policies or
        practices. Visiting them is at your own risk.
      </p>
    ),
  },
  {
    id: "communications",
    title: "Submissions and communications",
    content: (
      <p>
        When you contact us through the website, you confirm that the information you provide is accurate and that you
        have the right to share it. Sending us a message does not create any business, employment or other relationship
        with us. We handle your information as described in our <Link href="/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    content: (
      <p>
        This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While
        we try to keep the information accurate and up to date, we make no warranties of any kind about its completeness,
        accuracy or availability. Nothing on this website is professional, financial, legal or investment advice.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    content: (
      <p>
        To the fullest extent permitted by law, {siteConfig.legalName} will not be liable for any direct, indirect,
        incidental or consequential loss or damage arising from your use of, or inability to use, this website or any
        content on it.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: (
      <p>
        These Terms &amp; Conditions are governed by the laws of India. Any disputes arising from them will be subject to
        the exclusive jurisdiction of the courts in Hyderabad, Telangana.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: (
      <p>
        We may update these Terms &amp; Conditions from time to time. The &ldquo;Last updated&rdquo; date at the top of
        this page shows when they were last changed. Continuing to use the website after changes means you accept the
        updated terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <>
        <p>If you have any questions about these Terms &amp; Conditions, please contact us:</p>
        <ul>
          <li><strong>{siteConfig.legalName}</strong></li>
          <li>Email: {email}</li>
          <li>Phone: {siteConfig.phone}</li>
          <li>Address: {siteConfig.address}</li>
        </ul>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      lastUpdated="23 September 2026"
      intro={
        <p>
          Please read these Terms &amp; Conditions carefully before using the {siteConfig.name} website. They set out the
          rules for using our website and the content on it.
        </p>
      }
      sections={sections}
    />
  );
}
