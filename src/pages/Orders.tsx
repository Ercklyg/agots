import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const orders = [
  { id: "#1234", customer: "John Doe", items: "Adobo Combo, Sinigang", total: "₱850", status: "completed", time: "2:45 PM", type: "Dine-in" },
  { id: "#1235", customer: "Maria Santos", items: "Lechon Kawali, Garlic Rice x2", total: "₱450", status: "preparing", time: "3:10 PM", type: "Takeout" },
  { id: "#1236", customer: "Pedro Cruz", items: "Catering Package A", total: "₱15,000", status: "pending", time: "3:15 PM", type: "Catering" },
  { id: "#1237", customer: "Ana Garcia", items: "Kare-Kare Set, Halo-Halo", total: "₱680", status: "completed", time: "1:30 PM", type: "Dine-in" },
  { id: "#1238", customer: "Juan Reyes", items: "Mixed Platter, Lumpia x3", total: "₱1,200", status: "preparing", time: "3:20 PM", type: "Dine-in" },
  { id: "#1239", customer: "Carmen Lopez", items: "Sisig, Pancit Canton", total: "₱520", status: "preparing", time: "3:25 PM", type: "Takeout" },
  { id: "#1240", customer: "Miguel Torres", items: "Bicol Express, Rice", total: "₱380", status: "pending", time: "3:30 PM", type: "Dine-in" },
  { id: "#1241", customer: "Sofia Ramos", items: "Sinigang na Baboy, Crispy Pata", total: "₱1,450", status: "completed", time: "12:15 PM", type: "Dine-in" },
];

const Orders = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="pl-64 transition-all duration-300">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Orders Management</h1>
              <p className="text-muted-foreground">View and manage all restaurant orders</p>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Download className="h-4 w-4 mr-2" />
              Export Orders
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-foreground">248</div>
                <div className="text-sm text-muted-foreground">Total Today</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-warning">12</div>
                <div className="text-sm text-muted-foreground">Preparing</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-accent">5</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-success">231</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle>All Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search orders..." className="pl-10" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="preparing">Preparing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="dine-in">Dine-in</SelectItem>
                    <SelectItem value="takeout">Takeout</SelectItem>
                    <SelectItem value="catering">Catering</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Orders Table */}
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{order.items}</TableCell>
                        <TableCell>{order.type}</TableCell>
                        <TableCell>{order.time}</TableCell>
                        <TableCell className="font-semibold text-accent">{order.total}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "completed"
                                ? "default"
                                : order.status === "preparing"
                                ? "secondary"
                                : "outline"
                            }
                            className={
                              order.status === "completed"
                                ? "bg-success text-white"
                                : order.status === "preparing"
                                ? "bg-warning text-white"
                                : ""
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Orders;
