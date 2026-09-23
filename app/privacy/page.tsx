import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/Components/Legal/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.legalName} collects, uses and protects your personal information on ${siteConfig.url.replace("https://", "")}.`,
  alternates: { canonical: "/privacy/" },
};

const email = <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>;

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <p>We only collect information you choose to give us. When you submit the contact form on our website, we collect:</p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your contact number</li>
          <li>Your website (optional)</li>
          <li>The message you write to us</li>
        </ul>
        <p>
          We do not ask for sensitive personal data such as financial, health or biometric information through this
          website. Please do not include such information in your message.
        </p>
      </>
    ),
  },
  {
    id: "automatic-information",
    title: "Information collected automatically",
    content: (
      <>
        <p>
          We do not use analytics tools, advertising trackers or cookies on this website. Like most websites, our hosting
          provider may automatically record standard server logs — such as your IP address, browser type, and the date and
          time of your visit — to keep the website secure and running.
        </p>
        <p>
          Some images and videos on this website are delivered by Cloudinary, a media delivery service. When your browser
          loads them, Cloudinary receives technical information such as your IP address, as needed to deliver the file.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    content: (
      <>
        <p>We use the information you share with us to:</p>
        <ul>
          <li>Respond to your enquiry or message</li>
          <li>Discuss partnerships, collaborations, internships or roles you have asked about</li>
          <li>Keep a record of our correspondence with you</li>
          <li>Protect our website against misuse and comply with legal obligations</li>
        </ul>
        <p><strong>We do not sell, rent or trade your personal information.</strong> We do not use it for advertising.</p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How your information is shared",
    content: (
      <>
        <p>
          Contact form submissions are processed and stored using Google services (Google Apps Script and Google
          Workspace), which act on our behalf. Our website is hosted by a third-party hosting provider. These providers
          only process your information to provide their services to us.
        </p>
        <p>
          We may also disclose information if required by law, court order or a government authority, or to protect the
          rights, property or safety of {siteConfig.name}, our users or others.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    content: (
      <p>
        We keep contact form submissions only for as long as needed to respond to you and maintain a reasonable record of
        our conversation, or as required by law. You can ask us to delete your information at any time.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        We take reasonable technical and organisational measures to protect your information, and our website is served
        over a secure HTTPS connection. However, no method of transmission over the internet is completely secure, and we
        cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: (
      <>
        <p>
          In line with applicable Indian law, including the Digital Personal Data Protection Act, 2023, you may ask us to:
        </p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Correct or update inaccurate information</li>
          <li>Delete your information</li>
          <li>Withdraw your consent for us to use your information</li>
        </ul>
        <p>To make a request, email us at {email}. We will respond within a reasonable time.</p>
      </>
    ),
  },
  {
    id: "our-products",
    title: "Our products and other websites",
    content: (
      <p>
        This policy covers the {siteConfig.url.replace("https://", "")} website only. Our products — such as Dharma
        Scriptures and FundLens — and third-party websites we link to, including the Google Play Store and Apple App
        Store, have their own privacy policies. Please review them before using those services.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    content: (
      <p>
        This website is not directed at children under 18. We do not knowingly collect personal information from
        children. If you believe a child has shared information with us, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will change the &ldquo;Last updated&rdquo;
        date at the top of this page. Please check back periodically.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact & grievances",
    content: (
      <>
        <p>
          If you have any questions, concerns or complaints about this policy or how we handle your information, please
          contact us:
        </p>
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

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="23 September 2026"
      intro={
        <p>
          Your privacy matters to us. This Privacy Policy explains how {siteConfig.legalName} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses and protects your personal information when you visit our
          website.
        </p>
      }
      sections={sections}
    />
  );
}
