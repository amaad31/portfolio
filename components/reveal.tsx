"use client"

// Fade-and-slide-in wrapper. Triggers once when the element enters the viewport.
// Uses IntersectionObserver – no framer-motion needed.

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Tag = "div" | "section" | "li" | "article"

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  as?: Tag
}

export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )

    io.observe(node)
    return () => io.disconnect()
  }, [])

  const props = {
    ref: ref as React.Ref<HTMLElement>,
    style: { transitionDelay: `${delay}ms` },
    className: cn("reveal", visible && "is-visible", className),
  }

  if (as === "section") return <section {...(props as React.HTMLAttributes<HTMLElement>)}>{children}</section>
  if (as === "li") return <li {...(props as React.HTMLAttributes<HTMLLIElement>)}>{children}</li>
  if (as === "article") return <article {...(props as React.HTMLAttributes<HTMLElement>)}>{children}</article>
  return <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>
}
