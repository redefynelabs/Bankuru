"use client";
import React, { useRef } from 'react'
import Image from 'next/image';
import { PlaceHolder } from '../ReuseableComponents/Icons';
import { motion, useInView } from "framer-motion";

const Message = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: false, margin: '-100px 0px' });
  const isContainerInView = useInView(containerRef, { once: false, margin: '-100px 0px' });

  return (
    <section id="founder-section" className="relative bg-transparent w-full md:px-15 px-5">
      <div className="flex flex-col md:-space-y-5 -space-y-2">
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: -30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-bold xl:text-[60px] lg:text-[45px] md:text-[35px] text-[30px] text-center gradient-text-alt1 inline-block"
        >
          More coming soon
        </motion.h2>
        <p className="xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] text-center gradient-text-alt2 inline-block mt-3">
          built in India, made for the world
        </p>
      </div>

      <motion.figure
        ref={containerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full xl:mt-[80px] md:mt-[70px] mt-[50px]"
      >
        <div className="relative overflow-hidden rounded-[20px] card-surface">
          {/* Oversized quote mark */}
          <svg
            aria-hidden="true"
            viewBox="0 0 64 48"
            className="absolute md:right-12 right-5 md:top-10 top-5 md:w-36 w-16 text-[#FFFFFF0F]"
            fill="currentColor"
          >
            <path d="M0 48V28.8C0 12.4 8.4 2.8 25.2 0l2.4 6.8C19.2 9.2 15 14 14.4 21.6H26V48H0zm38 0V28.8C38 12.4 46.4 2.8 63.2 0l.8 6.8C57.2 9.2 53 14 52.4 21.6H64V48H38z" />
          </svg>

          <div className="relative grid md:grid-cols-[auto_1fr] grid-cols-1 xl:gap-16 md:gap-12 gap-8 items-center xl:px-[80px] lg:px-[60px] md:px-[48px] px-6 xl:py-[72px] md:py-14 py-10">
            {/* Profile */}
            <figcaption className="flex flex-col items-center gap-5 text-center">
              <div className="relative shrink-0 rounded-full p-[3px] bg-[linear-gradient(135deg,#FFFDFA,#2D3467)]">
                <Image
                  unoptimized
                  src={PlaceHolder}
                  alt="Koushik, founder of Bankuru Services"
                  className="xl:w-64 lg:w-56 md:w-48 w-44 aspect-square rounded-full object-cover bg-black"
                />
                <span
                  aria-hidden="true"
                  className="absolute xl:bottom-5 xl:right-5 bottom-3 right-3 md:w-6 md:h-6 w-5 h-5 rounded-full bg-[#8B93D6] border-[3px] border-[#121212] shadow-[0_0_12px_#8B93D6]"
                />
              </div>
              <div className="flex flex-col">
                <span className="xl:text-[30px] md:text-[26px] text-[24px] font-semibold text-[#FFFDFA] leading-tight">
                  Koushik
                </span>
                <span className="md:text-[16px] text-[14px] text-[#BEBCBA] mt-1">
                  Founder, Bankuru Services
                </span>
              </div>
            </figcaption>

            {/* Message */}
            <div className="flex flex-col md:items-start items-center md:text-start text-center md:border-l md:border-t-0 border-t border-[#FFFFFF1A] xl:pl-16 md:pl-12 md:pt-0 pt-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FFFFFF1A] bg-[#FFFFFF08] px-4 py-1.5 text-[12px] uppercase text-[#BEBCBA]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B93D6]" />
                Our Founder
              </span>
              <blockquote className="mt-6 xl:text-[34px] lg:text-[30px] md:text-[24px] text-[20px] leading-snug font-medium text-[#FFFDFA]">
                &ldquo;Hi, I&apos;m Koushik, the founder of Bankuru Services. I started this journey with a
                vision to build solutions that truly make life better —{' '}
                <span className="text-[#BEBCBA]">not just for markets, but for people.</span>&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </motion.figure>
    </section>
  );
}

export default Message;
