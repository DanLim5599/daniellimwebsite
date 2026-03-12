"use client";

import { FiFileText, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">
        <p className="text-blue-600 font-medium mb-4 animate-fade-in">
          Hi, my name is
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-4">
          Daniel Lim
        </h1>
        <h2 className="text-2xl sm:text-3xl text-gray-500 mb-6">
          Software Engineer
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
          UC Berkeley CS graduate building robust software - from native iOS
          apps to security tools and full-stack web platforms.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FiFileText />
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
          >
            <FiMail />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
