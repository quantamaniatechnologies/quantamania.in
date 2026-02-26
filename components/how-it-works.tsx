const steps = [
  {
    number: "01",
    title: "Sign Up",
    description:
      "Create your account and tell us about your learning goals. InstaLearn starts building your profile immediately.",
  },
  {
    number: "02",
    title: "AI Assessment",
    description:
      "Our AI evaluates your current knowledge and learning style through a brief, adaptive assessment.",
  },
  {
    number: "03",
    title: "Personalized Path",
    description:
      "Receive a custom learning path tailored to your goals, pace, and preferred learning style.",
  },
  {
    number: "04",
    title: "Learn & Grow",
    description:
      "Engage with interactive content that evolves with you. Track your progress and celebrate milestones.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            How It Works
          </span>
          <h2 className="text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Start learning in minutes.
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Getting started with InstaLearn is simple. Four steps to a
            completely personalized learning experience.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="group flex flex-col gap-4">
              <span className="font-mono text-4xl font-bold text-border transition-colors group-hover:text-muted-foreground">
                {step.number}
              </span>
              <div className="h-px w-full bg-border transition-colors group-hover:bg-muted-foreground" />
              <h3 className="font-mono text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
