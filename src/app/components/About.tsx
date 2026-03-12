"use client";

import { useEffect, useRef } from "react";
import { FiMapPin, FiBook, FiAward } from "react-icons/fi";

export default function About() {
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
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div ref={ref} className="fade-in max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              I&apos;m a Computer Science major and Data Science minor at the{" "}
              <span className="font-semibold text-gray-800">
                University of California, Berkeley
              </span>{" "}
              with a 3.8 GPA. I love building software that solves real
              problems - whether that&apos;s a native iOS app shipped to the App
              Store, a security scanning tool processing thousands of websites,
              or a responsive web platform for learners.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My experience spans full-stack development, iOS/SwiftUI, security
              engineering, and AI-powered tooling. I thrive in fast-paced
              environments where I can own projects end-to-end and ship quickly.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FiBook className="text-blue-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-gray-800">Education</p>
                <p className="text-sm text-gray-600">
                  B.S. Computer Science, UC Berkeley
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiAward
                className="text-blue-600 mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <p className="font-semibold text-gray-800">GPA</p>
                <p className="text-sm text-gray-600">3.8 / 4.0</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiMapPin
                className="text-blue-600 mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-sm text-gray-600">Berkeley, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
