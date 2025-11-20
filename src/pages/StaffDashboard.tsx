import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Clock, CheckCircle2, Package, Bike, Search, Filter } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const mockOrders = [
  { id: "ORD-001", customer: "Juan Dela Cruz", items: "Chicken Adobo, Pancit Canton", time: "10 mins ago", status: "pending", priority: "high" },
  { id: "ORD-002", customer: "Maria Santos", items: "Sinigang, Lumpia", time: "15 mins ago", status: "preparing", priority: "medium" },
  { id: "ORD-003", customer: "Pedro Reyes", items: "Lechon Kawali, Halo-Halo", time: "5 mins ago", status: "pending", priority: "high" },
  { id: "ORD-004", customer: "Ana Garcia", items: "Kare-Kare, Leche Flan", time: "20 mins ago", status: "preparing", priority: "low" },
  { id: "ORD-005", customer: "Jose Lim", items: "Sisig, Calamansi Juice", time: "2 mins ago", status: "ready", priority: "high" },
];

const mockRiders = [
  { id: "R001", name: "Miguel Santos", status: "available", deliveries: 12 },
  { id: "R002", name: "Carlos Reyes", status: "available", deliveries: 8 },
  { id: "R003", name: "Ramon Cruz", status: "busy", deliveries: 15 },
];

const StaffDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-warning text-warning-foreground";
      case "preparing": return "bg-info text-white";
      case "ready": return "bg-success text-white";
      default: return "bg-muted";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-l-4 border-destructive";
      case "medium": return "border-l-4 border-warning";
      case "low": return "border-l-4 border-muted";
      default: return "";
    }
  };

  const handleMarkAsReady = (orderId: string) => {
    toast({
      title: "Order Updated",
      description: `Order ${orderId} marked as ready for delivery`,
    });
  };

  const handleAssignRider = (orderId: string, riderId: string) => {
    toast({
      title: "Rider Assigned",
      description: `Order ${orderId} assigned to rider ${riderId}`,
    });
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Staff Dashboard</h1>
            <p className="text-muted-foreground">Manage orders and coordinate deliveries</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Pending Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-warning">8</div>
                <p className="text-xs text-muted-foreground mt-1">Waiting to prepare</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  In Preparation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-info">5</div>
                <p className="text-xs text-muted-foreground mt-1">Being prepared</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Ready for Delivery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">3</div>
                <p className="text-xs text-muted-foreground mt-1">Awaiting riders</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Bike className="h-4 w-4" />
                  Available Riders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">2</div>
                <p className="text-xs text-muted-foreground mt-1">Ready to deliver</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search orders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Orders</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="preparing">Preparing</SelectItem>
                    <SelectItem value="ready">Ready</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Orders Table */}
          <Card>
            <CardHeader>
              <CardTitle>Active Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOrders.map((order) => (
                    <TableRow key={order.id} className={getPriorityColor(order.priority)}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell className="max-w-xs truncate">{order.items}</TableCell>
                      <TableCell>{order.time}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        {order.status === "preparing" && (
                          <Button
                            size="sm"
                            onClick={() => handleMarkAsReady(order.id)}
                            className="bg-success hover:bg-success/90"
                          >
                            <CheckCircle2 className="h-4 w-4 mr-1" />
                            Mark Ready
                          </Button>
                        )}
                        {order.status === "ready" && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" className="bg-accent hover:bg-accent/90">
                                <Bike className="h-4 w-4 mr-1" />
                                Assign Rider
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Assign Rider to {order.id}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4 pt-4">
                                {mockRiders.filter(r => r.status === "available").map((rider) => (
                                  <div key={rider.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                                    <div>
                                      <p className="font-medium">{rider.name}</p>
                                      <p className="text-sm text-muted-foreground">{rider.deliveries} deliveries completed</p>
                                    </div>
                                    <Button
                                      onClick={() => handleAssignRider(order.id, rider.id)}
                                      className="bg-primary hover:bg-primary/90"
                                    >
                                      Assign
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default StaffDashboard;
