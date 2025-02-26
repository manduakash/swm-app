"use client";

import { usePathname } from "next/navigation";
import { Home, Truck, Users, Calendar, Settings, Award, FileBarChart2Icon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";

const menuItems = [
  { href: "/supervisor-dashboard", icon: Home, label: "Dashboard" },
  { href: "/agent-performance-tracking-supervisor", icon: Award, label: "Agents Performance" },
  { href: "/daily-collection-supervisor-report", icon: FileBarChart2Icon, label: "Collection Report" },
  { href: "/#", icon: Truck, label: "Collection Status" },
  { href: "/#", icon: Calendar, label: "Attendance" },
];

export function SupervisorSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center p-0 border-b-2 border-slate-300">
        <h2 className="text-lg text-center font-semibold py-4 bg-indigo-100 mx-0 w-full">
          Supervisor Agent
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(({ href, icon: Icon, label }, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link href={href} className={pathname === href ? "text-indigo-600 hover:text-indigo-600 bg-indigo-100 hover:bg-indigo-100 font-bold" : ""}>
                      <Icon className="mr-2 h-4 w-4" />
                      {label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
