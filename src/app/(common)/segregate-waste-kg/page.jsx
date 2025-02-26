import { SidebarInset } from "@/components/ui/sidebar"
import Header from "@/components/header"

export default function Page() {



  return (
    (<SidebarInset>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-zinc-100">
         active waste collection agents
        </main>
      </div>
    </SidebarInset>)
  );
}

