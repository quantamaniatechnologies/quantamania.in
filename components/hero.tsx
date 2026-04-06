import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            AI-First Education Technology
          </span>
        </div>

        <h1 className="text-balance font-mono text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          The future of learning
          <br />
          <span className="text-muted-foreground">is intelligent.</span>
        </h1>

        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Quantamania Technologies builds AI-powered tools that transform how
          people learn. Our flagship product, InstaLearn, delivers personalized
          education at scale.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="gap-2 bg-foreground text-background hover:bg-foreground/90"
            asChild
          >
            <Link
              href="https://instalearnapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore InstaLearn
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-border text-foreground hover:bg-secondary"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
