const stats = [
  { value: "10x", label: "Faster concept mastery" },
  { value: "95%", label: "Student satisfaction rate" },
  { value: "50K+", label: "Active learners" },
  { value: "200+", label: "Topics covered" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <span className="font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
