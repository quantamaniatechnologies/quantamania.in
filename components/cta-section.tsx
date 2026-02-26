import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.03)_0%,_transparent_60%)]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <h2 className="text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Ready to transform
          <br />
          how you learn?
        </h2>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Join thousands of learners already using InstaLearn to achieve their
          goals faster. Get early access today.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="gap-2 bg-foreground text-background hover:bg-foreground/90"
          >
            Get Early Access
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-border text-foreground hover:bg-secondary"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
