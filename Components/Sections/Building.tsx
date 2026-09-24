"use client";
import React, { useRef } from 'react';
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from 'framer-motion';
import {
  AppStoreBadge,
  BioAlphaLogo,
  BuildingImage1,
  DharmaLogo,
  FundLensLogo,
  PlayStoreBadge,
} from '../ReuseableComponents/Icons';

type Product = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  accent: string;
  glow: string;
  logo: StaticImageData;
  logoAlt: string;
  logoVariant: 'icon' | 'wordmark';
  backdrop?: StaticImageData;
  website?: string;
  stores?: { playStore: string; appStore: string };
};

const products: Product[] = [
  {
    name: 'Bio Alpha International',
    category: 'Sustainability',
    tagline: 'Consulting for a greener tomorrow.',
    description:
      'An ecosystem around sustainable consulting and environmental impact, blending expertise with technology.',
    features: ['Sustainable consulting', 'Environmental impact', 'Tech-led'],
    accent: '#C9A227',
    glow: 'rgba(22,120,70,0.35)',
    logo: BioAlphaLogo,
    logoAlt: 'Bio Alpha International logo',
    logoVariant: 'wordmark',
    backdrop: BuildingImage1,
    website: 'https://www.thebioalpha.com/',
  },
  {
    name: 'Dharma Scriptures',
    category: 'Mobile app · AI',
    tagline: 'Sacred scripture, AI-guided.',
    description:
      '97,000+ verses across three sacred texts — word-by-word meaning, transliteration, and AI-guided commentary, all in one app.',
    features: ['97,000+ verses', 'Transliteration', 'AI commentary'],
    accent: '#E8C66A',
    glow: 'rgba(212,160,23,0.30)',
    logo: DharmaLogo,
    logoAlt: 'Dharma Scriptures app icon',
    logoVariant: 'icon',
    website: 'https://dharmascriptures.com/',
    stores: {
      playStore: 'https://play.google.com/store/apps/details?id=com.bankuru.dharma',
      appStore: 'https://apps.apple.com/app/dharma-scriptures/id6800773378',
    },
  },
  {
    name: 'FundLens',
    category: 'Fintech · Web',
    tagline: 'Where is smart money flowing this month?',
    description:
      'Institutional ownership intelligence for Indian equities — track which AMCs and mutual funds are buying, selling and exiting stocks, straight from AMFI monthly disclosures.',
    features: ['AMC holdings', 'Ownership scores', 'Sector allocation'],
    accent: '#10E6A0',
    glow: 'rgba(16,230,160,0.22)',
    logo: FundLensLogo,
    logoAlt: 'FundLens logo',
    logoVariant: 'icon',
    website: 'https://thefundlens.com',
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px 0px' });
  const reversed = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full overflow-hidden rounded-[20px] card-surface"
    >
      <div
        className={`relative flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch md:gap-10 gap-6 xl:p-10 md:p-8 p-5`}
      >
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative md:w-[42%] w-full md:min-h-[320px] min-h-[220px] flex items-center justify-center overflow-hidden rounded-[20px] border border-[#FFFFFF14] bg-[#0B0B0B]"
        >
          {product.backdrop && (
            <>
              <Image
                unoptimized
                src={product.backdrop}
                alt=""
                aria-hidden="true"
                fill
                className="object-cover opacity-40 blur-[2px] scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />
            </>
          )}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{ background: `radial-gradient(circle at 50% 55%, ${product.glow}, transparent 65%)` }}
          />

          {product.logoVariant === 'icon' ? (
            <Image
              unoptimized
              src={product.logo}
              alt={product.logoAlt}
              className="relative xl:w-48 md:w-40 w-32 h-auto rounded-[28%] border border-[#FFFFFF1F] shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="relative rounded-[20px] bg-[#FFFDFA] md:px-8 px-6 md:py-6 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-105">
              <Image
                unoptimized
                src={product.logo}
                alt={product.logoAlt}
                className="xl:w-72 md:w-60 w-52 h-auto"
              />
            </div>
          )}
        </motion.div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-[13px]">
            <span className="text-[#FFFFFF4D] font-medium tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="h-px w-8 bg-[#FFFFFF26]" />
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF1A] bg-[#FFFFFF08] px-3 py-1 uppercase text-[#BEBCBA] text-[12px]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: product.accent }} />
              {product.category}
            </span>
          </div>

          <h3 className="xl:text-[40px] lg:text-[34px] md:text-[30px] text-[26px] font-semibold text-white leading-tight mt-5">
            {product.name}
          </h3>
          <p className="md:text-[20px] text-[17px] mt-2" style={{ color: product.accent }}>
            {product.tagline}
          </p>
          <p className="md:text-[17px] text-[15px] text-[#BEBCBA] leading-relaxed mt-4">
            {product.description}
          </p>

          <ul className="flex flex-wrap gap-2 mt-6">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="rounded-full border border-[#FFFFFF1A] bg-[#FFFFFF0A] px-3.5 py-1.5 md:text-[14px] text-[13px] text-[#DEDCD9]"
              >
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 md:mt-8 mt-6">
            {product.website && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold px-6  h-[46px] text-[15px] transition-colors hover:bg-[#E8E6E3]"
              >
                Visit website
                <ArrowIcon />
              </motion.a>
            )}
            {product.stores && (
              <>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={product.stores.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get ${product.name} on Google Play`}
                >
                  <Image unoptimized src={PlayStoreBadge} alt="Get it on Google Play" className="md:h-[52px] h-[46px] w-auto" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={product.stores.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${product.name} on the App Store`}
                >
                  <Image unoptimized src={AppStoreBadge} alt="Download on the App Store" className="md:h-[52px] h-[46px] w-auto" />
                </motion.a>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Building = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: '-100px 0px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id='building-section' aria-labelledby="building-heading" className="relative bg-transparent w-full md:px-15 px-5 py-10">
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={isHeaderInView ? "show" : "hidden"}
        variants={containerVariants}
        className="flex flex-col justify-center items-center text-center px-2"
      >
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF1A] bg-[#FFFFFF08] backdrop-blur-md px-4 py-1.5 text-[13px] uppercase text-[#BEBCBA]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B93D6]" />
          Our products
        </motion.span>

        <motion.h2
          id="building-heading"
          variants={itemVariants}
          className="font-bold xl:text-[60px] lg:text-[45px] md:text-[35px] text-[30px] text-center text-white inline-block gradient-text-alt3 mt-5"
        >
          What We&apos;re Building
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-[20px] text-[#BEBCBA] mt-3"
        >
          We&apos;re currently developing innovative digital products that combine <br className="hidden sm:inline" />
          real user needs with the power of modern AI
        </motion.p>
      </motion.div>

      {/* Products */}
      <div className="flex flex-col items-center md:gap-10 gap-6 md:mt-14 mt-10 w-full">
        {products.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Building;
