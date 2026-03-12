"use client";

import { useEffect, useRef } from "react";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      "Java",
      "Python",
      "C/C++",
      "Go",
      "Swift",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML/CSS",
      "RISC-V Assembly",
    ],
  },
  {
    category: "Frameworks",
    skills: [
      "React",
      "SwiftUI",
      "REST APIs",
      "Firebase",
      "MongoDB",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      "Git",
      "VS Code",
      "Xcode",
      "IntelliJ",
      "Figma",
      "nmap",
      "OpenSSL",
      "Jira",
      "Bitbucket",
      "Confluence",
    ],
  },
  {
    category: "Libraries",
    skills: [
      "PyTorch",
      "NumPy",
      "Matplotlib",
      "Pandas",
      "CoreBluetooth",
      "Metal",
      "APNs",
      "Pydantic",
      "BeautifulSoup",
      "Selenium",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6">
      <div ref={ref} className="fade-in max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
