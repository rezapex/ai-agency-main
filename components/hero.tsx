"use client";

import React, { useCallback } from 'react';
import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "./badge";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";
import { FaIndustry, FaLaptopCode, FaRocket } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const BentoGridDemo = dynamic(() => import('@/components/BentoGridDemo'), { ssr: false });

const useNavigateToBlog = () => {
  const router = useRouter();
  return useCallback(() => router.push("/blog/ai-for-small-business"), [router]);
};

const GreenHighlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-gradient-to-r from-[#199E75] to-[#20E3B2] text-transparent bg-clip-text transition-colors duration-300 hover:text-green-800">
    {children}
  </span>
);

export const Hero = () => {
  const handleBadgeClick = useNavigateToBlog();

  return (
    <>
      <Head>
        <title>AI Solutions for Your Business | Prosperus.ai</title>
        <meta name="description" content="Custom AI solutions for SMBs. Powerful, private AI that speaks your business language without the enterprise-level price tag." />
      </Head>
      {/* Main Hero Section */}
      <div className="flex flex-col min-h-screen pt-20 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex justify-center"
        >
          <Badge onClick={handleBadgeClick} aria-label="Read about AI for small business">
            AI Tailored, Business Empowered
          </Badge>
        </motion.div>
        <motion.h1 
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ ease: "easeOut", duration: 0.5 }}
  className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10"
>
<Balancer>
  <span className="text-4xl md:text-5xl lg:text-7xl font-bold">
    Empower Your Business with
    <br />
    <GreenHighlight>AI That Fits</GreenHighlight>
  </span>
</Balancer>
</motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          className="text-center mt-6 text-base md:text-l text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-8"
        >
          <Balancer>
            Automate your business with ProsperusAI. 
            We create powerful, scalebale and most importantly <GreenHighlight>Private AI Solutions </GreenHighlight> 
             that speaks your business language, without the enterprise-level price tag.
          </Balancer>
        </motion.p>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-6 relative z-10"
        >
          <Button className="w-full sm:w-auto" aria-label="Get Your Custom AI Quote">
            Get Your Custom AI Quote
          </Button>
          <Button
            variant="simple"
            as={Link}
            href="/contact"
            aria-label="Schedule a Consultation"
            className="w-full sm:w-auto flex justify-center space-x-2 items-center group"
          >
            <span>Schedule a Consultation</span>
            <HiArrowRight className="text-muted group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 dark:text-muted-dark" />
          </Button>
        </motion.div>
        
        {/* AI Services Section (Bento Grid) */}
        <div className="mt-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-200/20 dark:from-black/50 dark:to-black/20 rounded-3xl"></div>
          <div className="relative bg-white/70 dark:bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Our AI Services</h2>
            <BentoGridDemo />
          </div>
        </div>

        {/* Separator */}
        <div className="mt-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div>

        {/* How It Works Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.6 }}
          className="mt-24 md:mt-32 text-center"
        >
          <h3 className="text-3xl font-bold mb-12">How It Works</h3>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
            {[
              { icon: FaIndustry, title: "Analyze Your Business", description: "We dive deep into your business processes and identify AI opportunities." },
              { icon: FaLaptopCode, title: "Develop Custom AI", description: "Our experts create tailored AI solutions that fit your specific needs." },
              { icon: FaRocket, title: "Implement & Scale", description: "We deploy the AI, train your team, and help you scale for maximum impact." }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <div className="rounded-full bg-[var(--color-primary)] p-6 mb-4">
                  <step.icon className="h-10 w-10 text-[var(--color-text)]" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Down Button */}
        <motion.button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          aria-label="Scroll down for more content"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center items-start p-1">
            <motion.div
              className="w-1 h-2 bg-gray-300 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.button>
      </div>
    </>
  );
};