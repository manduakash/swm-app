"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

export function DisposalComplianceChart() {
  const data = [
    { name: "Compliant", value: 85 },
    { name: "Non-Compliant", value: 15 },
  ]

  const COLORS = ["#00C49F", "#FF8042"]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

