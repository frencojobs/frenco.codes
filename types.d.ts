const technologies = ['TypeScript', 'Dart', 'VSCode'] as const

type Tech = typeof technologies[number]

interface Project {
  name: string
  tagline: string
  cover?: string
  url: string
  stack: Array<Tech>
  repo: {
    owner: string
    name: string
  }
}

interface Experience {
  name: string
  cover?: string
  url: string
  position: string
  duration: string
}
