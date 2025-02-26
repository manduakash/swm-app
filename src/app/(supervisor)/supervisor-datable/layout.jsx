import { SidebarProvider } from "@/components/ui/sidebar"
import { SupervisorSidebar } from "@/components/sidebars/supervisor-sidebar";


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

