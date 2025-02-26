import { SupervisorSidebar } from "@/components/sidebars/supervisor-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"


export default function RootLayout({
  children
}) {
  return (
    (
      <SidebarProvider>
        <SupervisorSidebar />
        {children}
      </SidebarProvider>
    )
  );
}

