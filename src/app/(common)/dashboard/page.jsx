"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AgentList } from "@/components/agent-list"
import { WasteCollectedChart } from "@/components/waste-collected-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Trash2, Users, CalendarCheck, BarChart3, CalendarIcon, UserRoundCheck, TrendingUp, Tag, Truck, Zap, Trash, Droplets, DropletOff, PackageOpen, ServerCrash } from "lucide-react"
import Header from "@/components/header"
import { DashboardCard2 } from "@/components/dashboard-cards"
import { DateRangeCard } from "@/components/date-range-card"
import DashboardComponent from "@/components/dashboard-component"
import { getUserData } from "@/utils/cookies"
import { getWasteManagementDashboard } from "@/app/commonAPIs"
import { useEffect, useState } from "react"
import { AgentsAttendanceChart } from "@/components/agents-attendance-chart"
import { SegregateNonSegregateWasteChart } from "@/components/segregate-non-segregate-waste-chart"

export default function Dashboard() {
  const user_details = getUserData();
  const [dashboardData, setDashboardData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {

        const result = await getWasteManagementDashboard();

        if (result.success) {
          console.log("result", result);

          setDashboardData(result?.data?.dashboard);
          setChartData(result?.data?.chartData);
        } else {
          setError("Failed to fetch data");
        }
      } catch (err) {
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);
  return (
    (<SidebarInset>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-zinc-100">
          <h1 className="text-4xl font-bold mb-10">Dashboard</h1>
          <Tabs defaultValue="today" className="mb-6">
            <TabsList className="rounded-full bg-white shadow-md">
              <TabsTrigger value="today" className="flex items-center gap-2 rounded-full data-[state=active]:bg-zinc-600 data-[state=active]:text-white">
                <BarChart3 className="h-4 w-4" />
                Today's Overview
              </TabsTrigger>
              <TabsTrigger value="date-range" className="flex items-center gap-2 rounded-full data-[state=active]:bg-zinc-600 data-[state=active]:text-white">
                <CalendarIcon className="h-4 w-4" />
                Date Range
              </TabsTrigger>
            </TabsList>

            <TabsContent value="today" className="space-y-8">

              <DashboardComponent
                dashboardData={dashboardData}
                loading={loading}
                error={error}
              />


              {/* Summary */}
              {/* <h1 className="text-2xl text-slate-600 font-bold">Summary</h1>
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                <DashboardCard2
                  title="Tags Summary"
                  icon={Tag}
                  gradient="from-sky-400 to-sky-700"
                  values={[
                    { label: "Total tags", value: "2,839", description: "+5% this week" },
                    { label: "Scanned", value: "828", description: "Stable" },
                    { label: "Unscanned", value: "2,011", description: "+2% this month" },
                  ]}
                />
                <DashboardCard2
                  title="Staff Summary"
                  icon={Users}
                  gradient="from-sky-400 to-sky-700"
                  values={[
                    { label: "Tottal Staffs", value: "250", description: "+5% this week" },
                    { label: "Regular", value: "100", description: "Stable" },
                    { label: "Contractual", value: "150", description: "+2% this month" },
                  ]}
                />
                <DashboardCard2
                  title="Compactor Summary"
                  icon={Truck}
                  gradient="from-sky-400 to-sky-700"
                  values={[
                    { label: "Total Compactor", value: "60", description: "+5% this week" },
                    { label: "On-road", value: "20", description: "Stable" },
                    { label: "Off-road", value: "40", description: "+2% this month" },
                  ]}
                />
              </div> */}

            </TabsContent>

            <TabsContent value="date-range" className="space-y-8">
              <div className="w-1/2">
                <DateRangeCard />
              </div>
              <DashboardComponent
                dashboardData={dashboardData}
                loading={loading}
                error={error}
              />
            </TabsContent>
          </Tabs>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
            {/* <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Waste Collection & Dumping Status</CardTitle>
              </CardHeader>
              <CardContent>
                <WasteCollectionChart />
              </CardContent>
            </Card> */}

            {/* Waste Collection Overview */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Waste Collection Overview (Today)</CardTitle>
              </CardHeader>
              <CardContent>
                <WasteCollectedChart WasteCollectedToday={chartData?.WasteCollectedToday} WasteNotCollectedToday={chartData?.WasteNotCollectedToday} />
              </CardContent>
            </Card>

            {/* Segregated Waste v/s Non-Segregated Waste */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Segregated Waste v/s Non-Segregated Waste (in KG)</CardTitle>
              </CardHeader>
              <CardContent>
                <SegregateNonSegregateWasteChart SegregatedWasteAmount={parseFloat(chartData?.SegregatedWasteAmount)} NonSegregatedWasteAmount={parseFloat(chartData?.NonSegregatedWasteAmount)} />
              </CardContent>
            </Card>

            {/* Collection Agents Attendance */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Collection Agents Attendance </CardTitle>
              </CardHeader>
              <CardContent>
                <AgentsAttendanceChart ActiveWasteCollectors={chartData?.ActiveWasteCollectors} InactiveWasteCollectors={chartData?.InactiveWasteCollectors} />
              </CardContent>
            </Card>


          </div>
        </main>
      </div>
    </SidebarInset>)
  );
}

