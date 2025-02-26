import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { date: "Mon", organic: 400, plastic: 240, paper: 200, glass: 100, metal: 50 },
  { date: "Tue", organic: 300, plastic: 200, paper: 180, glass: 80, metal: 40 },
  { date: "Wed", organic: 350, plastic: 220, paper: 190, glass: 90, metal: 45 },
  { date: "Thu", organic: 380, plastic: 250, paper: 210, glass: 110, metal: 55 },
  { date: "Fri", organic: 420, plastic: 260, paper: 220, glass: 120, metal: 60 },
  { date: "Sat", organic: 450, plastic: 280, paper: 230, glass: 130, metal: 65 },
  { date: "Sun", organic: 380, plastic: 230, paper: 200, glass: 100, metal: 50 },
]

export const DailyWasteCollectionChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="organic" stackId="a" fill="#8884d8" />
        <Bar dataKey="plastic" stackId="a" fill="#82ca9d" />
        <Bar dataKey="paper" stackId="a" fill="#ffc658" />
        <Bar dataKey="glass" stackId="a" fill="#ff8042" />
        <Bar dataKey="metal" stackId="a" fill="#0088FE" />
      </BarChart>
    </ResponsiveContainer>
  )
}

