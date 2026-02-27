"use client"

import { Bar, BarChart, LabelList, XAxis, YAxis, Cell } from "recharts"
import { cn } from "@/lib/utils"

import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

const COLORS = [
  "#4ade80",
  "#60a5fa",
  "#f87171",
  "#fb923c",
  "#c084fc",
]

const chartConfig = {
  total_seconds: {
    label: "Seconds",
  },
} satisfies ChartConfig

type ChartData = {
  language: string
  total_seconds: number
  label: string
}

interface MyBarChartProps {
  data: ChartData[]
  className?: string
}

interface MyBarChartSkeletonProps {
  className?: string
}

export function MyBarChart({ data, className }: MyBarChartProps) {
  return (
    <ChartContainer
      config={chartConfig}
      className={cn("w-full overflow-visible", className)}
      style={{ height: data.length * 28 }}
    >
      <BarChart
        accessibilityLayer
        data={data}
        layout="vertical"
        margin={{ right: 0, left: 0, top: 0, bottom: 0 }}
        barSize={20}
        barCategoryGap="10%"
        style={{ overflow: "visible" }}
      >
        <YAxis dataKey="language" type="category" hide />
        <XAxis dataKey="total_seconds" type="number" hide />
        <Bar dataKey="total_seconds" layout="vertical" radius={4} isAnimationActive={false}>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
          <LabelList
            dataKey="label"
            position="insideLeft"
            offset={8}
            fontSize={12}
            content={({ x, y, height, value }) => (
              <text
                x={Number(x) + 10}
                y={Number(y) + Number(height) / 2}
                dominantBaseline="central"
                fontSize={12}
                className="fill-foreground"
                style={{ whiteSpace: "nowrap" }}
              >
                {String(value)}
              </text>
            )}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}

export function MyBarChartSkeleton({ className }: MyBarChartSkeletonProps) {
  const fakeData = [
    { language: "a", total_seconds: 102000 },
    { language: "b", total_seconds: 59000 },
    { language: "c", total_seconds: 41000 },
    { language: "d", total_seconds: 28000 },
    { language: "e", total_seconds: 17000 },
  ]

  return (
    <ChartContainer
      config={chartConfig}
      className={cn("w-full overflow-visible animate-pulse", className)}
      style={{ height: fakeData.length * 28 }}
    >
      <BarChart
        data={fakeData}
        layout="vertical"
        margin={{ right: 0, left: 0, top: 0, bottom: 0 }}
        barSize={20}
        barCategoryGap="10%"
      >
        <YAxis dataKey="language" type="category" hide />
        <XAxis dataKey="total_seconds" type="number" hide />
        <Bar
          dataKey="total_seconds"
          layout="vertical"
          fill="#6b7280"
          radius={4}
          opacity={0.3}
          isAnimationActive={false}
        />
      </BarChart>
    </ChartContainer>
  )
}

export function MyBarChartError({ className }: MyBarChartSkeletonProps) {
  const fakeData = [
    { language: "a", total_seconds: 102000 },
    { language: "b", total_seconds: 59000 },
    { language: "c", total_seconds: 41000 },
    { language: "d", total_seconds: 28000 },
    { language: "e", total_seconds: 17000 },
  ]

  return (
    <div className={cn("relative w-full overflow-hidden", className)} style={{ height: fakeData.length * 28 }}>
      <ChartContainer
        config={chartConfig}
        className="w-full overflow-visible"
        style={{ height: fakeData.length * 28 }}
      >
        <BarChart
          data={fakeData}
          layout="vertical"
          margin={{ right: 0, left: 0, top: 0, bottom: 0 }}
          barSize={20}
          barCategoryGap="10%"
        >
          <YAxis dataKey="language" type="category" hide />
          <XAxis dataKey="total_seconds" type="number" hide />
          <Bar
            dataKey="total_seconds"
            layout="vertical"
            fill="#7f1d1d"
            radius={4}
            opacity={0.6}
            isAnimationActive={false}
          />
        </BarChart>
      </ChartContainer>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-red-400 font-semibold text-sm select-none">
          Failed to fetch Wakatime stats :/
        </span>
      </div>
    </div>
  )
}