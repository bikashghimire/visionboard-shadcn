import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

import Image from "next/image"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"

// Menu items.
const items = [
  {
    title: "Home", 
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

 const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
        <SidebarHeader className="py-4">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/">
                           <Image src="/swiftshiplogo.png" alt="Logo" width={40} height={40} />
                           <span>VisionBoard</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
          <SidebarSeparator />
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                           {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                      <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                               <item.icon />
                                                   <span>{item.title}</span>
                                            </a>
                                      </SidebarMenuButton>
                                              {item.title==="Inbox" && (
                                                <SidebarMenuBadge>24</SidebarMenuBadge>
                    )}
                                </SidebarMenuItem>
              ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus /> <span className="sr-only">Add Project</span>
                            </SidebarGroupAction>
                                <SidebarGroupContent>
                                  <SidebarMenu>
                                    <SidebarMenuItem>
                                      <SidebarMenuButton asChild>
                                        <Link href="/#">
                                             <Projector />
                                                 See All Projects
                                        </Link>
                                      </SidebarMenuButton>
                                      <SidebarMenuButton asChild>
                                          <Link href="/#">
                                            <Plus />
                                              Add Project
                                                </Link>
                                      </SidebarMenuButton>
           
                                    </SidebarMenuItem>
                                  </SidebarMenu>
                                </SidebarGroupContent>
      
              </SidebarGroup>
        { /* Collapsible */}
              <Collapsible defaultOpen className="group/collapsible">
                  <SidebarGroup>
                    <SidebarGroupLabel asChild>
                      <CollapsibleTrigger>
                         Collapsible Group
                           <ChevronDown className= "ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </CollapsibleTrigger>
                    </SidebarGroupLabel>
                      <CollapsibleContent>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                  <Link href="/#">
                                    <Projector />
                                       See All Projects
                                  </Link>
                                </SidebarMenuButton>
                                   <SidebarMenuButton asChild>
                                      <Link href="/#">
                                         <Plus />
                                            Add Project
                                      </Link>
                                </SidebarMenuButton>
           
                              </SidebarMenuItem>
        
                            </SidebarMenu>
                          </SidebarGroupContent>
                      </CollapsibleContent>
                  </SidebarGroup>
              </Collapsible>
                { /* NESTED */}
                       <SidebarGroup>
                    <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                  <Link href="/#">
                                    <Plus />
                                       See All Projects
                                  </Link>
                                </SidebarMenuButton>
                                   <SidebarMenuButton asChild>
                                      <Link href="/#">
                                         <Plus />
                                            Add Project
                                      </Link>
                                </SidebarMenuButton>
           
                              </SidebarMenuItem>
        
                            </SidebarMenu>
                          </SidebarGroupContent>
                  </SidebarGroup>
                
                  
            </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2/> Rohit Kumar <ChevronUp className="ml-auto"/>
                      </SidebarMenuButton>
                        </DropdownMenuTrigger> 
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Account</DropdownMenuItem>
                              <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Sign Out</DropdownMenuItem>
                          </DropdownMenuContent>
              </DropdownMenu>     
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}
export default AppSidebar