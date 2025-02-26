import { SidebarInset } from "@/components/ui/sidebar"
import Header from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AgentList } from "@/components/agent-list";

export default function Page() {



  return (
    (<SidebarInset>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-zinc-100">
          <h1 className="text-4xl font-bold mb-10">Active Collection Agents List</h1>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Collection Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <AgentList status="Active" />
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarInset>)
  );
}

