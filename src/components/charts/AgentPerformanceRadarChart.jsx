import React from "react"
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"

const data = [
  { subject: "Efficiency", A: 120, B: 110, fullMark: 150 },
  { subject: "Punctuality", A: 98, B: 130, fullMark: 150 },
  { subject: "Accuracy", A: 86, B: 130, fullMark: 150 },
  { subject: "Teamwork", A: 99, B: 100, fullMark: 150 },
  { subject: "Communication", A: 85, B: 90, fullMark: 150 },
  { subject: "Initiative", A: 65, B: 85, fullMark: 150 },
]

export const AgentPerformanceRadarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Agent A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Agent B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}

