import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { SalesChart } from "@/components/SalesChart";
import { OrdersChart } from "@/components/OrdersChart";
import { RecentOrders } from "@/components/RecentOrders";
import { ShoppingCart, Users, TrendingUp, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="pl-64 transition-all duration-300">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with Agot's Restaurant today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Orders"
              value="248"
              change="+12% from yesterday"
              changeType="positive"
              icon={ShoppingCart}
              iconColor="bg-accent"
            />
            <StatsCard
              title="Customers"
              value="1,284"
              change="+8% from last week"
              changeType="positive"
              icon={Users}
              iconColor="bg-secondary"
            />
            <StatsCard
              title="Revenue"
              value="₱38,500"
              change="+23% from yesterday"
              changeType="positive"
              icon={TrendingUp}
              iconColor="bg-success"
            />
            <StatsCard
              title="Feedback"
              value="4.8"
              change="96% satisfaction"
              changeType="neutral"
              icon={MessageSquare}
              iconColor="bg-warning"
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SalesChart />
            <OrdersChart />
          </div>

          {/* Recent Orders */}
          <RecentOrders />
        </main>
      </div>
    </div>
  );
};

export default Index;
