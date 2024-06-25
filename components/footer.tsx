import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  const services = [
    { name: "Custom AI Solutions", href: "/services/custom-ai" },
    { name: "Data Analysis", href: "/services/data-analysis" },
    { name: "AI Consulting", href: "/services/consulting" },
    { name: "SMB AI Integration", href: "/services/integration" },
  ];
  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];
  const socials = [
    { name: "Twitter", href: "https://twitter.com/AutomateSMB", icon: <FaTwitter /> },
    { name: "LinkedIn", href: "https://linkedin.com/company/AutomateSMB", icon: <FaLinkedin /> },
    { name: "GitHub", href: "https://github.com/AutomateSMB", icon: <FaGithub /> },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo />
            <p className="text-base text-gray-500 dark:text-gray-400">
              Empowering SMBs with custom AI solutions that fit your business and budget.
            </p>
            <div className="flex space-x-6">
              {socials.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {links.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  {services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 py-4">
        <p className="text-center text-5xl md:text-7xl lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 dark:from-neutral-200 to-neutral-400 dark:to-neutral-500">
        &copy; {new Date().getFullYear()} AutomateSMB. All rights reserved.        </p>
      </div>
    </footer>
  );
};
