import { ArrowUpRight } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* backdrop: grid + radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-5 font-mono text-sm text-primary">Hi, I&apos;m</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-4 max-w-2xl text-pretty font-mono text-base text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Master&apos;s student in Mechatronics, building reliable software
            from bare-metal firmware up to cloud-native edge infrastructure.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <GithubIcon className="size-4" />
              GitHub
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
