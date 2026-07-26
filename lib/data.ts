// Single source of truth for all portfolio content.
// Change anything here and it flows through to every section.

export const profile = {
  name: "Amaad Ashraf Khan",
  tagline: "Embedded & Cloud · FAU Erlangen-Nürnberg",
  email: "amaadk07@gmail.com",
  linkedin: "https://www.linkedin.com/in/amaad-k-b2a55b1a5",
  github: "https://github.com/amaad31",
}

export const about = [
  "I'm a Master's student in Mechatronics at FAU Erlangen-Nürnberg and a working student at Siemens Mobility. My work sits at the intersection of hardware and software!",
  "My background spans embedded systems, distributed systems, DevOps, and machine learning. I'm especially drawn to cloud infrastructure, DevOps, and building reliable, scalable systems.",
]

export type Experience = {
  company: string
  role: string
  period: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    company: "Siemens Mobility",
    role: "Working Student – Software Development & Test Tooling",
    period: "Jan 2024 – present",
    points: [
      "Built internal tooling to automate repository maintenance and cleanup workflows.",
      "Developed embedded and automation systems for hardware control and monitoring.",
      "Created APIs and utilities to support internal infrastructure and resource management.",
      "Improved CI/CD pipelines to increase reliability and reduce build times.",
      "Implemented tooling for remote device control and reusable project templates.",
    ],
  },
  {
    company: "Fraunhofer IIS",
    role: "Robotics Software Developer Intern",
    period: "Apr 2022 – Jul 2022",
    points: [
      "Developed a magnet localization robot in Arduino C.",
      "Collaborated within a team of 8 across firmware and control logic.",
    ],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  github: string
  badge?: string
  videoUrl?: string
}

export const projects: Project[] = [
  {
    title: "Edge Kubernetes Provisioning Platform",
    badge: "Master Project",
    description:
      "Zero-touch Day-0 provisioning that turns unconfigured bare-metal and virtual machines into ready Kubernetes nodes over the network, power-on to cluster-ready in ~4.5 minutes, across x86_64 and ARM64. Built on Tinkerbell, k3s, iPXE and cloud-init, managed via GitOps with Argo CD. Includes a documented root-cause analysis of a Layer-2 ARP conflict between kube-vip and k3s servicelb (RFC 5227).",
    tags: ["Kubernetes", "k3s", "Tinkerbell", "iPXE", "ARM64", "GitOps", "Edge"],
    github: "https://github.com/amaad31/edge-k8s-provisioning",
  },
  {
    title: "Encrypted File Sync & P2P Clipboard",
    description:
      "A lightweight encrypted file-sync daemon and peer-to-peer clipboard tool. Watches folders for changes and syncs only changed chunks (delta sync) to a self-hosted MinIO backend, using AES-256-GCM. Java 17, multi-module Maven, 120+ tests, CI via GitHub Actions.",
    tags: ["Java", "AES-256-GCM", "MinIO", "P2P", "Docker"],
    github: "https://github.com/amaad31/synclip",
  },
  {
    title: "Real-Time Embedded GUI for RF Power Amplifier",
    badge: "Bachelor Thesis",
    description:
      "A real-time touch GUI on the STM32H750B-DK using LVGL, with a bidirectional loop that visualizes live measurements and pushes parameter changes back to the RF hardware. Custom bootloader-based memory layout running the application from external QSPI flash, with LTDC/DMA2D hardware acceleration.",
    tags: ["C", "STM32", "LVGL", "Bare-Metal", "Firmware"],
    github: "https://github.com/amaad31/lvgl-based-embedded-gui",
  },
]

export type SkillGroup = {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Python", "C/C++", "Java", "JavaScript"] },
  { label: "Web", items: ["React", "Next.js", "Node.js", "Express", "REST", "MongoDB"] },
  { label: "DevOps", items: ["Docker", "Git", "CI/CD", "GitLab"] },
  { label: "Embedded", items: ["STM32", "Raspberry Pi", "Arduino", "LVGL", "Qt", "Pico SDK"] },
  { label: "Cloud / Infra", items: ["Kubernetes", "k3s", "Helm", "Tinkerbell", "iPXE", "cloud-init"] },
  { label: "Spoken", items: ["German", "English", "Hindi"] },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]
