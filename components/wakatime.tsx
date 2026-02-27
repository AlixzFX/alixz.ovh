import { MyBarChart, MyBarChartError } from "./bar-chart";

type WakatimeLanguage = {
  name: string
  total_seconds: number
  text: string
}

export async function Wakatime({ className }: { className?: string }) {
  try {
    const response = await fetch("https://wakatime.com/api/v1/users/alixz/stats/last_30_days", {
      method: "GET",
      headers: {
        "Authorization": `Basic ${process.env.WAKATIME}`
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) return <MyBarChartError className={className} />;

    const res = await response.json();

    if (!res?.data?.languages?.length) {
      return <MyBarChartError className={className} />;
    }

    const data = res.data.languages.slice(0, 5).map((lang: WakatimeLanguage) => ({
      language: lang.name,
      total_seconds: lang.total_seconds,
      label: `${lang.name} (${lang.text})`,
    }));

    return <MyBarChart className={className} data={data} />;
  } catch {
    return <MyBarChartError className={className} />;
  }
}