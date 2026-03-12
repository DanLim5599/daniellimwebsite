"use client";

import { useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Productivity Calendar",
    description:
      "A deployed productivity calendar web app for tracking tasks and managing daily workflows efficiently.",
    tech: ["React", "Firebase", "TypeScript"],
    link: "https://productivity-calendar-3d674.web.app/",
    hasPreview: true,
  },
  {
    title: "Image Classification System",
    description:
      "Handwritten digit recognition system identifying numbers 0–9 using PyTorch neural networks. Built the full training pipeline including data loading, model architecture, and MNIST evaluation. Improved accuracy via batch normalization, learning rate scheduling, and dropout regularization.",
    tech: ["Python", "PyTorch", "NumPy", "Matplotlib"],
    link: null,
    hasPreview: false,
  },
  {
    title: "Secure Distributed File Sharing System",
    description:
      "A secure file sharing system in Go with end-to-end encryption - even the server cannot decrypt the contents. Uses RSA public-key cryptography for key exchange, digital signatures for authenticity, and AES-CTR symmetric encryption for fast file encryption at rest and in transit.",
    tech: ["Go", "Cryptography", "System Design"],
    link: null,
    hasPreview: false,
  },
];

export default function Projects() {
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
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="fade-in bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {project.hasPreview && project.link && (
                <div className="relative w-full h-48 bg-gray-100">
                  <iframe
                    src={project.link}
                    title={project.title}
                    className="w-full h-full border-0"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
