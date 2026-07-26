import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { projects } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ProjectVideo } from "@/components/project-video"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading index="03" title="Projects" />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            as="article"
            key={project.title}
            delay={(i % 2) * 100}
            className="flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40 sm:p-6"
          >
            <ProjectVideo videoUrl={project.videoUrl} title={project.title} />

            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                {project.badge && (
                  <p className="mb-1 font-mono text-xs uppercase tracking-wider text-primary">
                    {project.badge}
                  </p>
                )}
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
                aria-label={`${project.title} on GitHub`}
              >
                <GithubIcon className="size-5" />
              </a>
            </div>

            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-border bg-secondary/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-1.5 self-start font-mono text-sm text-primary"
            >
              view source
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
