"use client";

import { useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";

export default function ResumeViewer() {
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
    <section id="resume" className="py-20 px-6 bg-gray-50">
      <div ref={ref} className="fade-in max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Resume
        </h2>
        <div className="flex justify-center mb-6">
          <a
            href="/Daniel_s_Software_Engineer_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FiDownload />
            Download Resume
          </a>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <iframe
            src="/Daniel_s_Software_Engineer_Resume.pdf"
            title="Resume"
            className="w-full"
            style={{ height: "800px" }}
          />
        </div>
      </div>
    </section>
  );
}
