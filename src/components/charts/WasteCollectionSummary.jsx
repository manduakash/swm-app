"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function WasteCollectionSummary() {
  const data = [
    { name: "Mon", total: 1200 },
    { name: "Tue", total: 1100 },
    { name: "Wed", total: 1300 },
    { name: "Thu", total: 1400 },
    { name: "Fri", total: 1350 },
    { name: "Sat", total: 1500 },
    { name: "Sun", total: 1200 },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}kg`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

