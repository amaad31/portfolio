import { skillGroups } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading index="04" title="Skills" />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.label}
            delay={(i % 3) * 80}
            className="rounded-lg border border-border bg-card p-5"
          >
            <h3 className="mb-4 flex items-center gap-2 font-mono text-sm text-primary">
              <span className="text-muted-foreground">#</span>
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
