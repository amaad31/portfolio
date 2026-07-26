import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  index: string
  title: string
  className?: string
}

export function SectionHeading({ index, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex items-center gap-4", className)}>
      <h2 className="flex items-baseline gap-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        <span className="font-mono text-base font-normal text-primary">{index}.</span>
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}
