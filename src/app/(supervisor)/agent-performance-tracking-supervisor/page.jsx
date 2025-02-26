"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset } from "@/components/ui/sidebar"
import { AgentList } from "@/components/agent-list"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, CalendarCheck, BarChart3, CalendarIcon, Star, TrendingUp, Award, Clock } from "lucide-react"
import Header from "@/components/header"
import { DashboardCard1, DashboardCard2 } from "@/components/dashboard-cards"
import { DateRangeCard } from "@/components/date-range-card"
import { AgentPerformanceRadarChart } from "@/components/charts/AgentPerformanceRadarChart"

export default function AgentPerformanceTracking() {
  const performanceMetrics = [
    {
      title: "Total Agents",
      value: "25",
      description: "+2 from last month",
      icon: Users,
      gradient: "from-violet-400 to-violet-700",
    },
    {
      title: "Active Agents",
      value: "22",
      description: "88% of total agents",
      icon: Users,
      gradient: "from-teal-400 to-teal-700",
    },
    {
      title: "Attendance Rate",
      value: "95%",
      description: "+2% from last week",
      icon: CalendarCheck,
      gradient: "from-yellow-400 to-yellow-700",
    },
    {
      title: "Avg. Performance Score",
      value: "8.7/10",
      description: "+0.3 from last month",
      icon: Star,
      gradient: "from-pink-400 to-pink-700",
    },
  ]

  const agentPerformanceData = [
    { name: "Agent A", performance: 9.5 },
    { name: "Agent B", performance: 8.7 },
    { name: "Agent C", performance: 9.2 },
    { name: "Agent D", performance: 8.9 },
    { name: "Agent E", performance: 9.8 },
  ]

  return (
    <SidebarInset>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-zinc-100">
          <h1 className="text-4xl font-bold mb-10">Agent Performance Tracking</h1>
          <Tabs defaultValue="today" className="mb-6">
            <TabsList className="rounded-full bg-white shadow-md">
              <TabsTrigger
                value="today"
                className="flex items-center gap-2 rounded-full data-[state=active]:bg-zinc-600 data-[state=active]:text-white"
              >
                <BarChart3 className="h-4 w-4" />
                Today's Performance
              </TabsTrigger>
              <TabsTrigger
                value="date-range"
                className="flex items-center gap-2 rounded-full data-[state=active]:bg-zinc-600 data-[state=active]:text-white"
              >
                <CalendarIcon className="h-4 w-4" />
                Date Range
              </TabsTrigger>
            </TabsList>

            <TabsContent value="today" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {performanceMetrics.map((metric, index) => (
                  <DashboardCard1
                    key={index}
                    title={metric.title}
                    value={metric.value}
                    description={metric.description}
                    icon={metric.icon}
                    gradient={metric.gradient}
                  />
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Agent Performance Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AgentPerformanceRadarChart />
                  </CardContent>
                </Card>

                {/* You can add another chart or component here */}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <DashboardCard2
                      title="Most Improved"
                      icon={TrendingUp}
                      gradient="from-green-400 to-green-700"
                      values={[
                        { label: "Agent", value: "John Doe", description: "" },
                        { label: "Improvement", value: "+15%", description: "From last month" },
                      ]}
                    />
                    <DashboardCard2
                      title="Top Performer"
                      icon={Award}
                      gradient="from-yellow-400 to-yellow-700"
                      values={[
                        { label: "Agent", value: "Jane Smith", description: "" },
                        { label: "Score", value: "9.8/10", description: "Consistently high" },
                      ]}
                    />
                    <DashboardCard2
                      title="Most Punctual"
                      icon={Clock}
                      gradient="from-blue-400 to-blue-700"
                      values={[
                        { label: "Agent", value: "Mike Johnson", description: "" },
                        { label: "On-time rate", value: "99%", description: "For this month" },
                      ]}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Agent Performance List</CardTitle>
                </CardHeader>
                <CardContent>
                  <AgentList />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="date-range" className="space-y-8">
              <div className="w-1/2">
                <DateRangeCard />
              </div>
              {/* Add date range specific performance components here */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </SidebarInset>
  )
}

