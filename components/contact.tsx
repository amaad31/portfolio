"use client"

import { useState } from "react"
import { Check, Copy, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard blocked – ignore silently
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading index="05" title="Contact" />
      </Reveal>

      <Reveal>
        <div className="rounded-lg border border-border bg-card p-6 sm:p-10">
          <p className="font-mono text-sm text-primary">// get in touch</p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
            Let&apos;s build something.
          </h3>
          <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Open to working-student roles, thesis collaborations, and systems
            projects. The quickest way to reach me is email or LinkedIn.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email to clipboard"}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-primary" />
                  copied
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  copy
                </>
              )}
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>

      <footer className="mt-16 border-t border-border pt-6 text-center font-mono text-xs text-muted-foreground">
        <p>
          © 2026 {profile.name} ·{" "}
          <span className="text-primary">Next.js</span> +{" "}
          <span className="text-primary">Tailwind CSS</span>
        </p>
      </footer>
    </section>
  )
}
