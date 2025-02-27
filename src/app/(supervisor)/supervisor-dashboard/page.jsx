import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AgentList } from "@/components/agent-list"
import { WasteCollectionChart } from "@/components/waste-collection-chart"
import { AttendanceChart } from "@/components/waste-collected-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Trash2, Users, CalendarCheck, BarChart3, CalendarIcon, UserRoundCheck, TrendingUp, Tag, Truck, Zap, Trash, Droplets, DropletOff, PackageOpen, ServerCrash } from "lucide-react"
import Header from "@/components/header"
import { DashboardCard2 } from "@/components/dashboard-cards"
import { DateRangeCard } from "@/components/date-range-card"
import DashboardComponent from "@/components/dashboard-component"

export default function Dashboard() {

  const segregatedWaste = [
    {
      title: "Wet Waste",
      value: "25",
      description: "+2 from last month",
      icon: Droplets,
      gradient: "from-sky-400 to-sky-700",
    },
    {
      title: "Dry Waste",
      value: "25",
      description: "+2 from last month",
      icon: DropletOff,
      gradient: "from-orange-400 to-orange-700",
    },
    {
      title: "Sanitary Waste",
      value: "1,250 kg",
      description: "+15% from yesterday",
      icon: PackageOpen,
      gradient: "from-fuchsia-400 to-fuchsia-700",
    },
    {
      title: "e-Waste",
      value: "22",
      description: "88% of total agents",
      icon: ServerCrash,
      gradient: "from-lime-400 to-lime-700",
    },
  ]

  return (
    (<SidebarInset>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-zinc-100">
          <h1 className="text-4xl font-bold mb-10">Supervisor Agent Dashboard</h1>
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

              <DashboardComponent />


              {/* Summary */}
              <h1 className="text-2xl text-slate-600 font-bold">Summary</h1>
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
              </div>

            </TabsContent>

            <TabsContent value="date-range" className="space-y-8">
              <div className="w-1/2">
                <DateRangeCard />
              </div>
              <DashboardComponent />
            </TabsContent>
          </Tabs>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Waste Collection & Dumping Status</CardTitle>
              </CardHeader>
              <CardContent>
                <WasteCollectionChart />
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Attendance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <AttendanceChart />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarInset>)
  );
}

