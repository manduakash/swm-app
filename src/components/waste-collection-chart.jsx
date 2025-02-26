"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { time: "6AM", collected: 200, dumped: 150 },
  { time: "9AM", collected: 500, dumped: 400 },
  { time: "12PM", collected: 800, dumped: 700 },
  { time: "3PM", collected: 1100, dumped: 1000 },
  { time: "6PM", collected: 1400, dumped: 1300 },
  { time: "9PM", collected: 1600, dumped: 1550 },
]

export function WasteCollectionChart() {
  return (
    (<ChartContainer
      config={{
        collected: {
          label: "Collected",
          color: "hsl(var(--chart-1))",
        },
        dumped: {
          label: "Dumped",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="collected"
            stroke="var(--color-collected)"
            strokeWidth={2} />
          <Line
            type="monotone"
            dataKey="dumped"
            stroke="var(--color-dumped)"
            strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>)
  );
}

