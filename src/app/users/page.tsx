import CardList from "@/components/CardList";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
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
                <div className="bg-primary-foreground p-4 rounded-lg">Badge</div>
                 {/* INFORMATION CONTAINER */}
                <div className="bg-primary-foreground p-4 rounded-lg">Info</div>
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