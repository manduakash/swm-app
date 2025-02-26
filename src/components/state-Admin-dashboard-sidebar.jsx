"use client"

import { Home, TrendingUp, Map, FileText, Trash2 } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

export function DashboardSidebar() {
    return (
        (<Sidebar>
            <SidebarHeader className="flex items-center p-0 border-b-2 border-slate-300">
                <h2 className="text-lg  text-center font-semibold py-4 bg-indigo-100 mx-0 w-full">State Admin</h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/">
                                        <Home className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/agents">
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Total Waste Collected
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/collection">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Active Policies
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/attendance">
                                        <TrendingUp className="mr-2 h-4 w-4" />
                                        Recycling Rates
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/settings">
                                        <Map className="mr-2 h-4 w-4" />
                                        Regions Monitored
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>)
    );
}

