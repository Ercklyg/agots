import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Star } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 45000, orders: 320 },
  { month: "Feb", revenue: 52000, orders: 380 },
  { month: "Mar", revenue: 48000, orders: 350 },
  { month: "Apr", revenue: 61000, orders: 420 },
  { month: "May", revenue: 55000, orders: 390 },
  { month: "Jun", revenue: 67000, orders: 480 },
  { month: "Jul", revenue: 72000, orders: 520 },
];

const categoryData = [
  { name: "Main Courses", value: 45, color: "hsl(var(--accent))" },
  { name: "Appetizers", value: 20, color: "hsl(var(--secondary))" },
  { name: "Desserts", value: 15, color: "hsl(var(--warning))" },
  { name: "Beverages", value: 12, color: "hsl(var(--success))" },
  { name: "Catering", value: 8, color: "hsl(var(--primary))" },
];

const popularItems = [
  { name: "Chicken Adobo", orders: 324, revenue: "₱90,720" },
  { name: "Lechon Kawali", orders: 298, revenue: "₱113,240" },
  { name: "Sisig", orders: 276, revenue: "₱88,320" },
  { name: "Sinigang", orders: 245, revenue: "₱85,750" },
  { name: "Kare-Kare", orders: 198, revenue: "₱83,160" },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="pl-64 transition-all duration-300">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analytics & Reports</h1>
            <p className="text-muted-foreground">Track your restaurant performance and insights</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold text-foreground">₱425,000</p>
                    <p className="text-sm text-success flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3" />
                      +12.5% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                    <p className="text-2xl font-bold text-foreground">2,860</p>
                    <p className="text-sm text-success flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3" />
                      +8.2% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <ShoppingCart className="h-6 w-6 text-secondary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">New Customers</p>
                    <p className="text-2xl font-bold text-foreground">342</p>
                    <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                      <TrendingDown className="h-3 w-3" />
                      -2.4% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-success/10 rounded-lg">
                    <Users className="h-6 w-6 text-success" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Rating</p>
                    <p className="text-2xl font-bold text-foreground">4.8</p>
                    <p className="text-sm text-success flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3" />
                      +0.3 from last month
                    </p>
                  </div>
                  <div className="p-3 bg-warning/10 rounded-lg">
                    <Star className="h-6 w-6 text-warning" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue & Orders Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--accent))"
                      strokeWidth={3}
                      fill="url(#revenueGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Sales by Category */}
            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Popular Items */}
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Items</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={popularItems}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="orders" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
