import { about } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="rounded-lg border border-border bg-card p-5 font-mono text-sm">
            <div className="flex justify-between gap-4 py-2">
              <dt className="text-muted-foreground">role</dt>
              <dd className="text-right text-foreground">Werkstudent @ Siemens</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-border py-2">
              <dt className="text-muted-foreground">study</dt>
              <dd className="text-right text-foreground">M.Sc. Mechatronics</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-border py-2">
              <dt className="text-muted-foreground">location</dt>
              <dd className="text-right text-foreground">Erlangen, DE</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-border py-2">
              <dt className="text-muted-foreground">focus</dt>
              <dd className="text-right text-primary">software · infrastructure</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
