import { ChevronRight } from "lucide-react"
import { experiences } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8"
    >
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>

      <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-8">
        {experiences.map((exp, i) => (
          <Reveal as="li" key={exp.company} delay={i * 100} className="relative">
            {/* Timeline node */}
            <span
              className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-primary bg-background sm:-left-[39px]"
              aria-hidden="true"
            />
            <div className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40 sm:p-6">
              <p className="mb-1 font-mono text-xs uppercase tracking-wider text-primary">
                {exp.period}
              </p>
              <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
              <p className="text-sm text-muted-foreground">{exp.role}</p>

              <ul className="mt-4 space-y-2">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
