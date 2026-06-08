/* eslint-disable react/no-unescaped-entities */
"use client";

import type React from "react";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cpu,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Globe,
} from "lucide-react";

export default function Portfolio() {
  const aboutRef = useRef<HTMLElement>(null);
  const webRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLElement>(null);
  const iotRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f5e6c8] text-[#333333] font-mono">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#333333] text-[#f5e6c8] z-50 border-b-4 border-[#ff6b6b] px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-wider">
            QA Portfolio
          </h1>
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-[#ff6b6b] transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection(webRef)}
              className="hover:text-[#ff6b6b] transition-colors"
            >
              QA
            </button>
            <button
              onClick={() => scrollToSection(mobileRef)}
              className="hover:text-[#ff6b6b] transition-colors"
            >
              MOBILE QA
            </button>
            <button
              onClick={() => scrollToSection(iotRef)}
              className="hover:text-[#ff6b6b] transition-colors"
            >
              AUTOMATION
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="border-r border-[#333333]"></div>
            ))}
          </div>
          <div className="grid grid-rows-20 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="border-b border-[#333333]"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-[#ff6b6b] text-[#f5e6c8] px-3 py-1 mb-4 text-sm">
              QA PORTFOLIO
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              QA
              <br />
              ENGINEER<span className="text-[#ff6b6b]">_</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Testing web and mobile products with a risk-based mindset.
              Focused on test cases, bug analysis, API validation, and automation.
            </p>
    
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <ChevronDown size={32} className="text-[#333333]" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-16 md:py-24 px-4 bg-[#333333] text-[#f5e6c8]"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#ff6b6b]"></div>
              <div className="relative bg-[#444444] p-1">
                <div className="aspect-square w-full max-w-md mx-auto overflow-hidden">
                  <div className="aspect-square w-full max-w-md mx-auto overflow-hidden">
                    <Image
                      src="/pixel-laptop.svg"
                      alt="Retro Laptop"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover pixel-image hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block bg-[#ff6b6b] text-[#f5e6c8] px-3 py-1 mb-4 text-sm">
                ABOUT ME
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                BACKGROUND & PROFILE<span className="text-[#ff6b6b]">_</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p>
                  Hello, my name is Faishal. I am an Informatics student focused
                  on Quality Assurance, software testing, and product quality.
                  I enjoy breaking down requirements into clear test scenarios,
                  finding edge cases, documenting defects, and helping teams ship
                  more stable web and mobile applications. My programming
                  background in Python, JavaScript, and Flutter helps me
                  understand how systems work and build practical test automation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-[#ff6b6b] pl-4">
                  <h3 className="font-bold mb-1">EDUCATION</h3>
                  <p className="text-sm text-[#f5e6c8]/80">
                    Computer Science, B.Sc.
                  </p>
                </div>
                <div className="border-l-4 border-[#ff6b6b] pl-4">
                  <h3 className="font-bold mb-1">LOCATION</h3>
                  <p className="text-sm text-[#f5e6c8]/80">
                    Yogyakarta, Indonesia
                  </p>
                </div>
                <div className="border-l-4 border-[#ff6b6b] pl-4">
                  <h3 className="font-bold mb-1">LANGUAGES</h3>
                  <p className="text-sm text-[#f5e6c8]/80">
                    Indonesian, English
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Link
                  href="https://github.com/faishaltsq"
                  className="text-[#f5e6c8] hover:text-[#ff6b6b]"
                  target="_blank"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/muhammad-faishal-tsaqief-7775b3248/"
                  className="text-[#f5e6c8] hover:text-[#ff6b6b]"
                  target="_blank"
                >
                  <Linkedin size={24} />
                </Link>
                <Link href="mailto:faishaltsq@gmail.com" target="_blank" className="text-[#f5e6c8] hover:text-[#ff6b6b]">
                  <Mail size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QA Testing Section */}
      <section
        ref={webRef}
        className="py-16 md:py-24 px-4 bg-[#f5e6c8] text-[#333333] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="border-r border-[#333333]"></div>
            ))}
          </div>
          <div className="grid grid-rows-20 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="border-b border-[#333333]"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-[#ff6b6b] text-[#f5e6c8] px-3 py-1 mb-4 text-sm">
                Manual & API Testing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                QUALITY ASSURANCE<span className="text-[#ff6b6b]">_</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p>
                  I design test scenarios from requirements, validate core user
                  flows, and report bugs with clear reproduction steps, expected
                  results, actual results, severity, and evidence.
                </p>
                <p>
                  My QA approach covers functional testing, regression testing,
                  exploratory testing, API validation, and basic database checks
                  to reduce release risk.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Code size={24} />
                  </div>
                  <span className="font-bold">Test Cases</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Code size={24} />
                  </div>
                  <span className="font-bold">Bug Reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Code size={24} />
                  </div>
                  <span className="font-bold">API Testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Globe size={24} />
                  </div>
                  <span className="font-bold">Regression</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#ff6b6b]"></div>
                <div className="relative bg-[#333333] p-6 text-[#f5e6c8] font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4 border-b border-[#f5e6c8]/20 pb-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff6b6b]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffcc5c]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#88d8b0]"></div>
                    <span className="ml-2 text-xs opacity-70">test-case.md</span>
                  </div>
                  <pre className="overflow-x-auto">
                    <code>
                      {`Feature: Login

Scenario: User logs in with valid account
Given user opens login page
When user enters valid email and password
And user clicks Login
Then dashboard page is displayed

Negative case:
- Empty password shows validation message
- Invalid credential shows error alert`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile QA Section */}
      <section
        ref={mobileRef}
        className="py-16 md:py-24 px-4 bg-[#4a6b8a] text-[#f5e6c8]"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-[#ff6b6b] text-[#f5e6c8] px-3 py-1 mb-4 text-sm">
                Android & Cross-Platform
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                MOBILE APP TESTING<span className="text-[#ff6b6b]">_</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p>
                  I test Android and cross-platform mobile apps across key user
                  journeys, screen states, input validation, permissions, and
                  network conditions.
                </p>
                <p>
                  My mobile QA checklist covers install/update flow, offline
                  behavior, responsive layout, crash observation, usability, and
                  regression after fixes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Smartphone size={24} />
                  </div>
                  <span className="font-bold">Android QA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-[#f5e6c8] rounded-full">
                    <Smartphone size={24} />
                  </div>
                  <span className="font-bold">Flutter Apps</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative max-w-[300px]">
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#ff6b6b]"></div>
                <div className="relative">
                  <div className="w-[240px] h-[480px] bg-[#333333] rounded-[36px] p-3 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-[#333333] rounded-b-lg z-10"></div>
                    <div className="w-full h-full bg-[#f5e6c8] rounded-[28px] overflow-hidden relative">
                      <div className="w-full h-[60px] bg-[#ff6b6b] flex items-center justify-center">
                        <h3 className="text-[#f5e6c8] font-bold">QA CHECK</h3>
                      </div>
                      <div className="p-4">
                        <div className="w-full h-[100px] bg-[#333333] rounded-lg mb-4"></div>
                        <div className="w-full h-[20px] bg-[#333333] rounded-lg mb-2 opacity-80"></div>
                        <div className="w-3/4 h-[20px] bg-[#333333] rounded-lg mb-4 opacity-80"></div>

                        <div className="w-full h-[60px] bg-[#333333] rounded-lg mb-4 opacity-60"></div>
                        <div className="w-full h-[60px] bg-[#333333] rounded-lg mb-4 opacity-60"></div>
                        <div className="w-full h-[60px] bg-[#333333] rounded-lg opacity-60"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-[#333333] flex justify-around items-center px-4">
                        <div className="w-[40px] h-[40px] rounded-full bg-[#f5e6c8] flex items-center justify-center">
                          <Smartphone size={20} className="text-[#333333]" />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full bg-[#f5e6c8] flex items-center justify-center">
                          <Smartphone size={20} className="text-[#333333]" />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full bg-[#f5e6c8] flex items-center justify-center">
                          <Smartphone size={20} className="text-[#333333]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section
        ref={iotRef}
        className="py-16 md:py-24 px-4 bg-[#2a2a2a] text-[#f5e6c8]"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-[#ff6b6b] text-[#f5e6c8] px-3 py-1 mb-4 text-sm">
                Automation & Technical QA
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                TEST AUTOMATION<span className="text-[#ff6b6b]">_</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p>
                  I use programming skills to support repeatable QA work,
                  including UI automation, API checks, test data preparation,
                  and simple scripts for validation.
                </p>
                <p>
                  I am comfortable reading logs, checking integrations, and
                  validating IoT-related flows where hardware, sensors, and
                  applications need to work together reliably.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#ff6b6b] text-[#f5e6c8] rounded-full">
                    <Cpu size={24} />
                  </div>
                  <span className="font-bold">Playwright</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#ff6b6b] text-[#f5e6c8] rounded-full">
                    <Cpu size={24} />
                  </div>
                  <span className="font-bold">Postman</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#ff6b6b] text-[#f5e6c8] rounded-full">
                    <Cpu size={24} />
                  </div>
                  <span className="font-bold">JavaScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#ff6b6b] text-[#f5e6c8] rounded-full">
                    <Cpu size={24} />
                  </div>
                  <span className="font-bold">Python</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#ff6b6b]"></div>
                <div className="relative bg-[#1a1a1a] p-6 rounded-lg">
                  <div className="bg-[#111111] p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-[#ff6b6b] font-bold">
                        QA DASHBOARD
                      </h3>
                      <div className="w-3 h-3 rounded-full bg-[#88d8b0] animate-pulse"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-[#222222] p-3 rounded-lg">
                        <div className="text-xs text-[#f5e6c8]/60 mb-1">
                          PASSED TESTS
                        </div>
                        <div className="text-2xl font-bold">86%</div>
                        <div className="w-full bg-[#333333] h-2 rounded-full mt-2">
                          <div
                            className="bg-[#ff6b6b] h-2 rounded-full"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="bg-[#222222] p-3 rounded-lg">
                        <div className="text-xs text-[#f5e6c8]/60 mb-1">
                          COVERAGE
                        </div>
                        <div className="text-2xl font-bold">68%</div>
                        <div className="w-full bg-[#333333] h-2 rounded-full mt-2">
                          <div
                            className="bg-[#4a6b8a] h-2 rounded-full"
                            style={{ width: "68%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#222222] p-3 rounded-lg mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-xs text-[#f5e6c8]/60 mb-1">
                            RELEASE STATUS
                          </div>
                          <div className="text-lg font-bold">READY</div>
                        </div>
                        <Cpu size={24} className="text-[#ff6b6b]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#111111] p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff6b6b] animate-pulse"></div>
                      <div className="text-xs font-mono text-[#f5e6c8]/60">
                        AUTOMATION-SUITE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#333333] text-[#f5e6c8] border-t-4 border-[#ff6b6b]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold tracking-wider mb-2">
                faishaltsq
              </h2>
              <p className="text-sm text-[#f5e6c8]/70">
                © {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>

            <div className="flex gap-6">
              <Link href="https://github.com/faishaltsq" target="_blank" className="text-[#f5e6c8] hover:text-[#ff6b6b]">
                <Github size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-faishal-tsaqief-7775b3248/" target="_blank" className="text-[#f5e6c8] hover:text-[#ff6b6b]">
                <Linkedin size={20} />
              </Link>
              <Link href="mailto:faishaltsq@gmail.com" target="_blank" className="text-[#f5e6c8] hover:text-[#ff6b6b]">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
