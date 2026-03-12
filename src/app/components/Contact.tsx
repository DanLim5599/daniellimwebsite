"use client";

import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please email me directly.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div ref={ref} className="fade-in max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-10">
          I&apos;m always open to new opportunities and conversations. Feel free
          to reach out!
        </p>

        {submitted ? (
          <div className="text-center py-12 bg-green-50 rounded-xl border border-green-200">
            <p className="text-green-700 font-semibold text-lg">
              Thanks for reaching out!
            </p>
            <p className="text-green-600 mt-1">I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FiSend />
              Send Message
            </button>
          </form>
        )}

        <p className="text-center text-gray-500 text-sm mt-8">
          Or email me directly at{" "}
          <a
            href="mailto:daniellim@berkeley.edu"
            className="text-blue-600 hover:underline"
          >
            daniellim@berkeley.edu
          </a>
        </p>
      </div>
    </section>
  );
}
