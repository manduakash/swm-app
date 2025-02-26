"use client";

import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const COLORS = ["hsl(var(--chart-2))", "hsl(var(--chart-1))"];

export function SegregateNonSegregateWasteChart({ SegregatedWasteAmount = 0, NonSegregatedWasteAmount = 0 }) {
  const data = [
    { name: "Segregated", value: SegregatedWasteAmount },
    { name: "Mixed", value: NonSegregatedWasteAmount },
  ];

  return (
    <ChartContainer
      config={{
        segregatedWasteAmount: {
          label: "Segregated Waste (in KG)",
          color: "hsl(var(--chart-2))",
        },
        nonSegregatedWasteAmount: {
          label: "Non-Segregated Waste (in KG)",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
