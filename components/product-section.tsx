import { Zap, Brain, BookOpen, BarChart3 } from "lucide-react"

export function ProductSection() {
  return (
    <section id="product" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Our Product
          </span>
          <h2 className="text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            InstaLearn
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            An AI-powered learning platform that adapts to every student in real
            time. InstaLearn understands how you learn and delivers content that
            sticks.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          <FeatureCard
            icon={<Brain className="h-5 w-5" />}
            title="Adaptive Intelligence"
            description="Our AI engine continuously analyzes learning patterns and adjusts content difficulty, pacing, and style to match each student's unique needs."
          />
          <FeatureCard
            icon={<Zap className="h-5 w-5" />}
            title="Instant Feedback"
            description="Get real-time explanations and corrections as you learn. No waiting for grades. Know exactly where you stand at every moment."
          />
          <FeatureCard
            icon={<BookOpen className="h-5 w-5" />}
            title="Comprehensive Content"
            description="From fundamentals to advanced topics, InstaLearn covers a wide range of subjects with AI-curated learning paths."
          />
          <FeatureCard
            icon={<BarChart3 className="h-5 w-5" />}
            title="Progress Analytics"
            description="Detailed insights into learning progress, strengths, and areas for improvement. Data-driven education at its finest."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-secondary/50 lg:p-10">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
        {icon}
      </div>
      <h3 className="font-mono text-lg font-semibold text-foreground">{title}</h3>
      <p className="leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
