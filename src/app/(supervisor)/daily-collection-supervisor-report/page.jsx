"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trash2, BarChart3, CalendarIcon, Droplets, PackageOpen, MapPin } from "lucide-react"
import { DropletIcon as DropletOff } from "lucide-react"
import Header from "@/components/header"
import { DashboardCard1, DashboardCard2 } from "@/components/dashboard-cards"
import { DateRangeCard } from "@/components/date-range-card"
import { WasteCompositionPieChart } from "@/components/charts/WasteCompositionPieChart"
import { DailyWasteCollectionChart } from "@/components/charts/DailyWasteCollectionChart"

export default function DailyCollectionReport() {
  const collectionMetrics = [
    {
      title: "Total Waste Collected",
      value: "1,250 kg",
      description: "+15% from yesterday",
      icon: Trash2,
      gradient: "from-cyan-400 to-cyan-700",
    },
    {
      title: "Wet Waste",
      value: "750 kg",
      description: "+10% from yesterday",
      icon: Droplets,
      gradient: "from-blue-400 to-blue-700",
    },
    {
      title: "Dry Waste",
      value: "400 kg",
      description: "+5% from yesterday",
      icon: DropletOff,
      gradient: "from-orange-400 to-orange-700",
    },
    {
      title: "Hazardous Waste",
      value: "100 kg",
      description: "-2% from yesterday",
      icon: PackageOpen,
      gradient: "from-red-400 to-red-700",
    },
  ]

  const areaChartData = [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 1100 },
    { name: "Mar", total: 1300 },
    { name: "Apr", total: 1400 },
    { name: "May", total: 1350 },
    { name: "Jun", total: 1500 },
  ]

  return (
    <SidebarInset>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-zinc-100">
          <h1 className="text-4xl font-bold mb-10">Daily Collection Report</h1>
          <Tabs defaultValue="today" className="mb-6">
            <TabsList className="rounded-full bg-white shadow-md">
              <TabsTrigger
                value="today"
                className="flex items-center gap-2 rounded-full data-[state=active]:bg-zinc-600 data-[state=active]:text-white"
              >
                <BarChart3 className="h-4 w-4" />
                Today's Report
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
                {collectionMetrics.map((metric, index) => (
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
                    <CardTitle>Waste Composition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <WasteCompositionPieChart />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Daily Waste Collection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <DailyWasteCollectionChart />
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Collection Hotspots</CardTitle>
                </CardHeader>
                <CardContent>
                  <DashboardCard2
                    title="Top Collection Areas"
                    icon={MapPin}
                    gradient="from-emerald-400 to-emerald-700"
                    values={[
                      { label: "Downtown", value: "450 kg", description: "36% of total" },
                      { label: "Suburb A", value: "350 kg", description: "28% of total" },
                      { label: "Industrial Zone", value: "300 kg", description: "24% of total" },
                    ]}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="date-range" className="space-y-8">
              <div className="w-1/2">
                <DateRangeCard />
              </div>
              {/* Add date range specific report components here */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </SidebarInset>
  )
}

