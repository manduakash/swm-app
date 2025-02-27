"use client"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, Recycle, User } from "lucide-react"
import { Separator } from "./ui/separator"
import Image from "next/image"
import logo from "@/assets/logo.jpg";

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between px-4 border-b bg-violet-200">
      <div className="flex items-center">
        <SidebarTrigger />
        <Separator orientation="vertical" className="ml-3 h-6 w-[1.5px] bg-slate-100" />
        <h1 className="ml-4 text-2xl font-semibold text-zinc-600 flex items-end justify-center gap-1"><Image src={logo} alt="logo" className="h-8 w-8 rounded-full shadow-md"/> <span>Smart Solid Waste Management System</span></h1>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 p-0 rounded-full bg-slate-50 border-2 border-slate-400/80">
            <User className="h-10 w-10 rounded-full"/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">username</p>
              <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

export default Header

