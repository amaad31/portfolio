"use client"

import { useState } from "react"
import { Play, Video } from "lucide-react"

type Props = {
  // YouTube embed URL, direct video file, or leave empty for a placeholder.
  videoUrl?: string
  title: string
}

export function ProjectVideo({ videoUrl, title }: Props) {
  const [playing, setPlaying] = useState(false)

  if (!videoUrl) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border bg-secondary/40 text-muted-foreground">
        <Video className="size-6" aria-hidden="true" />
        <span className="font-mono text-xs">demo video coming soon</span>
      </div>
    )
  }

  const isYouTube = /youtube\.com|youtu\.be/.test(videoUrl)

  if (isYouTube) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-md border border-border bg-black">
        <iframe
          src={videoUrl}
          title={`${title} demo`}
          className="size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border border-border bg-secondary/40"
        aria-label={`Play ${title} demo`}
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
          <Play className="size-6 translate-x-0.5" />
        </span>
      </button>
    )
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-md border border-border bg-black">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video src={videoUrl} controls autoPlay className="size-full" />
    </div>
  )
}
