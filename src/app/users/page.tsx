import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Shield } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
  <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
              <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/users">Users</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
  
        <BreadcrumbSeparator />
      
          <BreadcrumbPage>Adigns Burges</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
      {/* CONTAINER */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* Left Side */}
                <div className="w-full xl:w-1/3 space-y-6">
                {/* USER BADGES CONTAINER */}
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <h1 className="text-xl font-semibold">User Badges</h1>
                    <div className="flex gap-4 mt-4">
                        <HoverCard>
                            <HoverCardTrigger>
                                <BadgeCheck className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" size={36} />
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Verified User</h1>
                                <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                            </HoverCardContent>
                        </HoverCard>
                               <HoverCard>
                            <HoverCardTrigger>
                                <Candy className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" size={36} />
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Verified User</h1>
                                <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                            </HoverCardContent>
                        </HoverCard>
                               <HoverCard>
                            <HoverCardTrigger>
                                <Shield className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" size={36} />
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Verified User</h1>
                                <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                            </HoverCardContent>
                        </HoverCard>
                               <HoverCard>
                            <HoverCardTrigger>
                                <BadgeCheck className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" size={36} />
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Verified User</h1>
                                <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </div>
                 {/* INFORMATION CONTAINER */}
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <h1 className="text-xl font-semibold">User Information</h1>
                    <div className="space-y-4 mt-4">
                        <div className="flex flex-col gap-2 mb-8">
                            <p className="text-sm text-muted-foreground">Profile Completion</p>
                            <Progress value={70} />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Username:</span>
                            <span>David Clashon</span>
                        </div>
                               <div className="flex items-center gap-2">
                            <span className="font-bold">Email:</span>
                            <span>info@gmail.com</span>
                        </div>
                               <div className="flex items-center gap-2">
                            <span className="font-bold">Phone:</span>
                            <span>+345 35543324267</span>
                        </div>
                               <div className="flex items-center gap-2">
                            <span className="font-bold">Location:</span>
                            <span>Brussels, Belgium</span>
                        </div>
                               <div className="flex items-center gap-2">
                            <span className="font-bold">Role:</span>
                            <Badge>Admin</Badge>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">Joined on 2025.01.20</p>
                </div>
                 {/* CARD LIST CONTAINER */}
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <CardList title="Recent Transactions" />
                </div>

                </div>
                    {/* Right Side */}
                <div className="w-full xl:w-2/3 space-y-6">
                {/* USER CARD CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
                                {/* CHART CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>

                </div>

            </div>
  
    </div>
  );
}
export default Page;