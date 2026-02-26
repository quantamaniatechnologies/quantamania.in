import { Check } from "lucide-react"

const features = [
  "AI-generated personalized study plans",
  "Real-time concept explanations",
  "Spaced repetition for long-term retention",
  "Multi-modal learning (text, visual, interactive)",
  "Performance tracking and analytics dashboard",
  "Seamless integration with existing curricula",
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.02)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Why InstaLearn
            </span>
            <h2 className="text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Built for the way
              <br />
              <span className="text-muted-foreground">people actually learn.</span>
            </h2>
            <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Traditional education forces everyone through the same path.
              InstaLearn uses advanced AI to create learning experiences that are
              as unique as each student.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:bg-secondary/50"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                  <Check className="h-3 w-3 text-background" />
                </div>
                <span className="text-sm leading-relaxed text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
