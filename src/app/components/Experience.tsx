"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Karass",
    location: "Mountain View, CA",
    dates: "January 2026 – Present",
    bullets: [
      "Designed, implemented, and deployed a native iOS app from the ground up using Swift and SwiftUI, owning the full development lifecycle from system architecture and Firestore data modeling to App Store submission.",
      "Built the complete front end by translating Figma design specs into custom SwiftUI views and reusable components, including onboarding flows, animated beacon status screens, and Metal GPU shader effects.",
      "Deployed a serverless backend on Firebase Cloud Functions in TypeScript with Firestore, handling user authentication, real-time data synchronization, push notifications via APNs, and role-based admin controls.",
      "Leveraged agentic instances of Claude Code to accelerate work cycles, automate code reviews, generate test suites, and rapidly prototype features.",
      "Communicated with testers and users to identify and deliver timely bug fixes, ensuring smooth operation.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Kitecyber",
    location: "San Jose, CA",
    dates: "May 2025 – August 2025",
    bullets: [
      "Built a Python tool that automatically sorts and labels 50,000+ websites into a 640-category system for company-wide security policy enforcement using Pydantic for structured data validation.",
      "Integrated Perplexity AI APIs to automate classification and threat-labeling of websites, replacing a slow manual review process with a verification pipeline.",
      "Designed a security scanning tool that scores websites for risk across 5 categories using OpenSSL, nmap, BeautifulSoup, DNSSEC validation, and integrity verification.",
      "Automated inspection of dynamic web pages using Selenium with headless Chrome, catching security issues that standard static scanners would miss.",
    ],
  },
  {
    title: "Front End Developer Intern",
    company: "Superflow",
    location: "Mountain View, CA",
    dates: "June 2024 – August 2024",
    bullets: [
      "Built responsive pages for a learning platform using React, TypeScript, and Firebase from Figma mockups, creating reusable components and interactive features.",
      "Owned manual QA across the entire web application, systematically testing every page, form, and interaction for edge cases and boundary conditions.",
      "Participated in daily standups and agile sprints, tracking tasks in Jira and managing version control through Bitbucket.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const cards = ref.current?.querySelectorAll(".fade-in");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="fade-in border-l-4 border-blue-600 pl-6 py-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-500">{exp.dates}</span>
              </div>
              <p className="text-blue-600 font-medium mb-3">
                {exp.company}{" "}
                <span className="text-gray-400 font-normal">
                  · {exp.location}
                </span>
              </p>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-gray-600 text-sm leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-600"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
