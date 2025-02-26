"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrendingUpIcon,
  BarChart3Icon,
  Maximize2Icon,
  RecycleIcon,
  TrashIcon,
} from "lucide-react"

const wasteMovementData = [
  { date: "2023-01", "Block A": 1200, "Block B": 900, "Block C": 1500, "Block D": 800 },
  { date: "2023-02", "Block A": 1300, "Block B": 950, "Block C": 1600, "Block D": 850 },
  { date: "2023-03", "Block A": 1100, "Block B": 1000, "Block C": 1550, "Block D": 900 },
  { date: "2023-04", "Block A": 1400, "Block B": 1050, "Block C": 1700, "Block D": 950 },
  { date: "2023-05", "Block A": 1350, "Block B": 1100, "Block C": 1650, "Block D": 1000 },
  { date: "2023-06", "Block A": 1450, "Block B": 1150, "Block C": 1800, "Block D": 1050 },
]

const performanceData = [
  { block: "Block A", efficiency: 85, recyclingRate: 40, wasteReduction: 10 },
  { block: "Block B", efficiency: 78, recyclingRate: 35, wasteReduction: 8 },
  { block: "Block C", efficiency: 92, recyclingRate: 45, wasteReduction: 15 },
  { block: "Block D", efficiency: 80, recyclingRate: 38, wasteReduction: 12 },
]

const getPerformanceColor = (value) => {
  if (value >= 90) return "#10B981"
  if (value >= 70) return "#F59E0B"
  return "#EF4444"
}

const blockColors = {
  "Block A": "#3B82F6",
  "Block B": "#10B981",
  "Block C": "#F59E0B",
  "Block D": "#EF4444",
}

export default function ReportsAndAnalytics() {
  const [timeRange, setTimeRange] = useState("monthly")

  const WasteMovementChart = ({ height }) => (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={wasteMovementData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {Object.keys(blockColors).map((block) => (
          <Area
            key={block}
            type="monotone"
            dataKey={block}
            stroke={blockColors[block]}
            fill={blockColors[block]}
            fillOpacity={0.3}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  )

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <h1 className="text-4xl font-bold mb-6 text-indigo-800">Reports & Analytics</h1>

      <Tabs defaultValue="waste-movement" className="space-y-4">
        <TabsList className="bg-white shadow-md rounded-lg p-1">
          <TabsTrigger
            value="waste-movement"
            className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white"
          >
            <TrendingUpIcon className="w-4 h-4 mr-2" />
            Waste Movement Insights
          </TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
            <BarChart3Icon className="w-4 h-4 mr-2" />
            Performance Comparison
          </TabsTrigger>
        </TabsList>

        <TabsContent value="waste-movement">
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-indigo-500">
            <CardHeader className="bg-indigo-50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl text-indigo-800">Waste Movement Trends</CardTitle>
                <div className="flex items-center space-x-2">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Maximize2Icon className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl">
                      <DialogHeader>
                        <DialogTitle>Waste Movement Trends</DialogTitle>
                      </DialogHeader>
                      <div className="h-[600px] mt-4">
                        <WasteMovementChart height="100%" />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[200px]">
                <WasteMovementChart height="100%" />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {Object.entries(blockColors).map(([block, color]) => (
              <Card
                key={block}
                className="bg-white shadow-md rounded-lg overflow-hidden border-t-4"
                style={{ borderColor: color }}
              >
                <CardHeader className="bg-opacity-10" style={{ backgroundColor: color }}>
                  <CardTitle className="text-xl" style={{ color: color }}>
                    {block}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Total Waste</span>
                    <span className="text-lg font-semibold" style={{ color: color }}>
                      {wasteMovementData[wasteMovementData.length - 1][block]} kg
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Trend</span>
                    <span className="text-sm font-medium flex items-center" style={{ color: color }}>
                      <ArrowUpIcon className="w-4 h-4 mr-1" />
                      5.2%
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-green-500">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-2xl text-green-800">Efficiency Comparison</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="block" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="efficiency" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-yellow-500">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-2xl text-yellow-800">Recycling Rate Comparison</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="block" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="recyclingRate" stroke="#F59E0B" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-purple-500">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-2xl text-purple-800">Block Performance Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {performanceData.map((block) => (
                  <Card key={block.block} className="bg-white shadow-sm border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg" style={{ color: blockColors[block.block] }}>
                        {block.block}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 flex items-center">
                            <BarChart3Icon className="w-4 h-4 mr-1" />
                            Efficiency
                          </span>
                          <span
                            className="text-sm font-medium"
                            style={{ color: getPerformanceColor(block.efficiency) }}
                          >
                            {block.efficiency}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 flex items-center">
                            <RecycleIcon className="w-4 h-4 mr-1" />
                            Recycling Rate
                          </span>
                          <span
                            className="text-sm font-medium"
                            style={{ color: getPerformanceColor(block.recyclingRate) }}
                          >
                            {block.recyclingRate}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 flex items-center">
                            <TrashIcon className="w-4 h-4 mr-1" />
                            Waste Reduction
                          </span>
                          <span className="text-sm font-medium text-green-500">
                            <ArrowDownIcon className="w-4 h-4 inline mr-1" />
                            {block.wasteReduction}%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

