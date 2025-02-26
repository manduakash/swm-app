import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"


export default function RootLayout({
  children
}) {
  return (
    (
      <SidebarProvider>
        <DashboardSidebar />
        {children}
      </SidebarProvider>
    )
  );
}

