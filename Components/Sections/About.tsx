"use client";
import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from "framer-motion";

const highlights = [
  { value: '2024', label: 'Founded' },
  { value: '3', label: 'Products shipped' },
  { value: 'India', label: 'Headquartered' },
];

const pillars = ['Innovation', 'Simplicity', 'Long-term vision'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const state = isInView ? 'show' : 'hidden';

  return (
    <section
      id="about-section"
      aria-labelledby="about-heading"
      className="relative flex items-center justify-center bg-transparent w-full lg:py-16 py-10"
    >
      <div
        ref={ref}
        className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-16 gap-10 w-full md:px-15 px-5"
      >
        {/* Contents */}
        <div className="flex flex-col lg:items-start items-center lg:text-start text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={state}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF1A] bg-[#FFFFFF08] backdrop-blur-md px-4 py-1.5 text-[13px] uppercase text-[#BEBCBA]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B93D6] " />
            Who we are
          </motion.span>

          <motion.h2
            id="about-heading"
            variants={fadeUp}
            initial="hidden"
            animate={state}
            custom={1}
            className="font-bold xl:text-[60px] lg:text-[45px] md:text-[35px] text-[30px] leading-[1.1] text-white mt-5"
          >
            About us
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={state}
            custom={2}
            className="gradient-text xl:text-[26px] lg:text-[22px] md:text-[20px] text-[18px] font-semibold leading-snug mt-4"
          >
            Bankuru Services Private Limited is a modern startup studio based in India.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={state}
            custom={3}
            className="text-[#BEBCBA] xl:text-[18px] md:text-[16px] text-[15px] leading-relaxed mt-4"
          >
            We focus on designing scalable, impactful solutions across industries — rooted in
            innovation, simplicity, and long-term vision. We&apos;re building tools, platforms, and
            experiences that redefine how people live, work, and connect.
          </motion.p>

          {/* Pillars */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate={state}
            custom={4}
            className="flex flex-wrap lg:justify-start justify-center gap-2 mt-6"
          >
            {pillars.map((pillar) => (
              <li
                key={pillar}
                className="rounded-full border border-[#FFFFFF1A] bg-[#FFFFFF0A] px-4 py-2 text-[14px] text-[#DEDCD9]"
              >
                {pillar}
              </li>
            ))}
          </motion.ul>

          {/* Highlights */}
          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate={state}
            custom={5}
            className="grid grid-cols-3 w-full mt-8 rounded-[20px] border border-[#FFFFFF1A] bg-[#FFFFFF06] backdrop-blur-md divide-x divide-[#FFFFFF14]"
          >
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col items-center lg:items-start md:px-6 px-3 md:py-5 py-4">
                <dt className="order-2 text-[#BEBCBA] md:text-[14px] text-[12px] mt-1">{item.label}</dt>
                <dd className="order-1 text-white font-semibold md:text-[28px] text-[20px] leading-none">
                  {item.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          {/* Soft accent glow behind the visual */}
          <div
            aria-hidden="true"
            className="absolute inset-[10%] rounded-full bg-[#2D3467] opacity-50 blur-[90px]"
          />
          <div className="relative rounded-[28px] border border-[#FFFFFF1A] bg-[#FFFFFF05] overflow-hidden">
            <Image
              unoptimized
              src="https://res.cloudinary.com/dek8wxl7o/image/upload/v1750075876/for-ios_nffr0f.gif"
              alt="Animated 3D model of the Bankuru Services studio building"
              width={1000}
              height={1000}
              className="object-cover w-full md:h-[500px] h-[280px]"
              style={{
                willChange: 'auto',
                backfaceVisibility: 'hidden'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About
