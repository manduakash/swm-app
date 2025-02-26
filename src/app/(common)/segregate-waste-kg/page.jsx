import { SidebarInset } from "@/components/ui/sidebar"
import Header from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AgentList } from "@/components/agent-list";
import { WasteSegregated } from "@/components/waste-segregated";

export default function Page() {



  return (
    (<SidebarInset>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-zinc-100">
          <h1 className="text-4xl font-bold mb-10">Waste Collected From Properties</h1>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Collection Information</CardTitle>
            </CardHeader>
            <CardContent>
              <WasteSegregated />
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarInset>)
  );
}

