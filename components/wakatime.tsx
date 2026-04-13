import { MyBarChart, MyBarChartError, MyBarChartSkeleton } from "./bar-chart"

type WakatimeLanguage = {
  name: string
  total_seconds: number
  text: string
}

export async function Wakatime({ className }: { className?: string }) {
  const response = await fetch(
    "https://wakatime.com/api/v1/users/alixz/stats/last_30_days",
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${process.env.WAKATIME}`,
      },
      next: { revalidate: 3600 },
    }
  )

  if (!response.ok) {
    return (
      <div className={className}>
        <MyBarChartError bars={5} />
        <div className="h-6" />
        <MyBarChartError bars={2} />
      </div>
    )
  }

  const res = await response.json()
  const stats = res?.data

  if (!stats?.languages?.length) {
    return (
      <div className={className}>
        <MyBarChartError bars={5} />
        <div className="h-6" />
        <MyBarChartError bars={2} />
      </div>
    )
  }

  const languagesData = stats.languages.slice(0, 5).map((lang: WakatimeLanguage) => ({
    language: lang.name,
    total_seconds: lang.total_seconds,
    label: `${lang.name} (${lang.text})`,
  }))

  const additionsData = [
    {
      language: "Human",
      total_seconds: stats.human_additions,
      label: `Human (${stats.human_additions.toLocaleString()} lines written)`,
    },
    {
      language: "AI",
      total_seconds: stats.ai_additions,
      label: `AI (${stats.ai_additions.toLocaleString()} lines written)`,
    },
  ]

  return (
    <div className={className}>
      <MyBarChart data={languagesData} />
      <div className="h-6" />
      <MyBarChart data={additionsData} />
    </div>
  )
}