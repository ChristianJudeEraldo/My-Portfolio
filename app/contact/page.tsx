"use client";

import { useState } from "react";
import { Mail, Globe, GitBranch, MapPin, Send, Loader2 } from "lucide-react";
import { sendEmail } from "../actions/sendEmail";
import { Toaster, toast } from "sonner";

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Message sent successfully! I'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }

    setIsPending(false);
  }

  return (
    <div className="pb-20 pt-8 animate-fade-up stagger-1">
      <Toaster position="bottom-right" theme="system" />
      <section className="space-y-6">
        <p className="bryl-label">
          01 &mdash; CONTACT
        </p>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold tracking-tight lowercase leading-[1.05] max-w-2xl text-(--ink)">
          let&apos;s build something meaningful.
        </h1>
        <p className="max-w-2xl text-[17px] font-serif leading-relaxed text-(--gray-500)">
          If you&apos;re hiring, collaborating, or discussing a project, I&apos;m open to
          conversations around full-stack web development, AI-integrated systems, and
          product-focused engineering.
        </p>
      </section>

      <div className="bryl-hairline my-12 animate-fade-up stagger-2" />

      <section className="flex flex-col gap-12 animate-fade-up stagger-3">
        <div className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-[17px] font-semibold tracking-tight text-(--ink)">Reach Me Directly</h2>
            <p className="text-[15px] leading-relaxed text-(--gray-500)">
              I usually respond within 24-48 hours. For faster coordination, email is the
              best channel.
            </p>
          </div>

          <ul className="space-y-0 border-t border-(--gray-200)">
            <li>
              <a
                href="mailto:christian.eraldo@lpunetwork.edu.ph"
                className="group flex items-center justify-between gap-4 border-b border-(--gray-200) py-4"
              >
                <div className="flex items-center gap-4 text-(--gray-400)">
                  <Mail size={18} strokeWidth={1.5} />
                  <span className="text-[15px] font-medium text-(--ink)">Email</span>
                </div>
                <span className="bryl-label group-hover:text-(--ink) transition-colors">
                  cjeraldo@outlook.ph
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/christian-jude-eraldo-012718251/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-(--gray-200) py-4"
              >
                <div className="flex items-center gap-4 text-(--gray-400)">
                  <Globe size={18} strokeWidth={1.5} />
                  <span className="text-[15px] font-medium text-(--ink)">LinkedIn</span>
                </div>
                <span className="bryl-label group-hover:text-(--ink) transition-colors">
                  Profile ↗
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ChristianJudeEraldo"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-(--gray-200) py-4"
              >
                <div className="flex items-center gap-4 text-(--gray-400)">
                  <GitBranch size={18} strokeWidth={1.5} />
                  <span className="text-[15px] font-medium text-(--ink)">GitHub</span>
                </div>
                <span className="bryl-label group-hover:text-(--ink) transition-colors">
                  @ChristianJudeEraldo ↗
                </span>
              </a>
            </li>
            <li className="flex items-center justify-between gap-4 py-4 border-b border-(--gray-200)">
              <div className="flex items-center gap-4 text-(--gray-400)">
                <MapPin size={18} strokeWidth={1.5} />
                <span className="text-[15px] font-medium text-(--ink)">Location</span>
              </div>
              <span className="bryl-label">Philippines</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bryl-card space-y-6">
          <h2 className="text-[17px] font-semibold tracking-tight text-(--ink)">Send a Message</h2>
          
          <div className="hidden" aria-hidden="true">
            <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="bryl-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                placeholder="John Doe"
                className="w-full rounded-md border border-(--gray-200) bg-(--background) px-4 py-3 text-[14px] text-(--ink) outline-none focus:border-(--gray-400) transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="bryl-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-md border border-(--gray-200) bg-(--background) px-4 py-3 text-[14px] text-(--ink) outline-none focus:border-(--gray-400) transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="bryl-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me briefly about your project or opportunity."
              className="w-full resize-none rounded-md border border-(--gray-200) bg-(--background) px-4 py-3 text-[14px] leading-relaxed text-(--ink) outline-none focus:border-(--gray-400) transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="bryl-button w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest font-mono text-[11px]"
          >
            {isPending ? <Loader2 size={16} className="animate-spin" /> : <Send size={14} />}
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </div>
  );
}