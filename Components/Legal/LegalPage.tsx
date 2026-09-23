import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CompanyLogo } from '../ReuseableComponents/Icons';
import { siteConfig } from '@/lib/site';

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  lastUpdated: string;
  sections: LegalSection[];
};

const LegalPage = ({ eyebrow, title, intro, lastUpdated, sections }: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#BEBCBA]">
      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-center px-3 md:pt-5 pt-3">
        <div className="flex items-center justify-between w-full max-w-5xl rounded-full border border-[#FFFFFF1F] bg-[#0B0B0B]/70 backdrop-blur-xl py-2 pl-5 pr-2 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
          <Link href="/" aria-label="Bankuru Services home">
            <Image unoptimized src={CompanyLogo} alt="Bankuru Services" className="w-[96px] h-auto" priority />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF2E] px-5 py-2.5 text-[14px] text-white transition-colors hover:bg-[#FFFFFF33]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      <main className="w-full md:px-15 px-5 md:pt-20 pt-12 pb-20">
        {/* Title */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF1A] bg-[#FFFFFF08] px-4 py-1.5 text-[13px] uppercase text-[#BEBCBA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B93D6]" />
            {eyebrow}
          </span>
          <h1 className="gradient-text font-bold xl:text-[60px] lg:text-[50px] md:text-[42px] text-[34px] leading-[1.1] mt-5">
            {title}
          </h1>
          <p className="text-[14px] text-[#807F7D] mt-4">Last updated: {lastUpdated}</p>
          <div className="md:text-[18px] text-[16px] leading-relaxed mt-6 space-y-4">{intro}</div>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] grid-cols-1 gap-8 md:mt-14 mt-10">
          {/* Table of contents */}
          <nav aria-label="On this page" className="lg:sticky lg:top-28 self-start rounded-[20px] card-surface p-5">
            <p className="text-[12px] uppercase text-[#807F7D] mb-3">On this page</p>
            <ol className="space-y-2 text-[14px]">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="flex gap-2 hover:text-white transition-colors">
                    <span className="text-[#FFFFFF4D] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="flex flex-col gap-4">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-[20px] card-surface md:p-8 p-6"
              >
                <h2 className="flex items-baseline gap-3 md:text-[24px] text-[20px] font-semibold text-white">
                  <span className="text-[14px] text-[#FFFFFF4D] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  {section.title}
                </h2>
                <div className="legal-content mt-4 md:text-[16px] text-[15px] leading-relaxed space-y-3">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-[#FFFFFF14]">
        <div className="md:px-15 px-5 py-6 flex md:flex-row flex-col items-center justify-between gap-3 text-[13px] text-[#807F7D]">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegalPage;
