import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Mail, Phone } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const customers = [
  { id: "1", name: "John Doe", email: "john.doe@email.com", phone: "+63 912 345 6789", orders: 24, spent: "₱18,450", tier: "Gold", joined: "Jan 2024" },
  { id: "2", name: "Maria Santos", email: "maria.santos@email.com", phone: "+63 923 456 7890", orders: 45, spent: "₱32,800", tier: "Platinum", joined: "Dec 2023" },
  { id: "3", name: "Pedro Cruz", email: "pedro.cruz@email.com", phone: "+63 934 567 8901", orders: 8, spent: "₱6,200", tier: "Silver", joined: "Mar 2024" },
  { id: "4", name: "Ana Garcia", email: "ana.garcia@email.com", phone: "+63 945 678 9012", orders: 31, spent: "₱25,600", tier: "Gold", joined: "Nov 2023" },
  { id: "5", name: "Juan Reyes", email: "juan.reyes@email.com", phone: "+63 956 789 0123", orders: 15, spent: "₱11,900", tier: "Silver", joined: "Feb 2024" },
  { id: "6", name: "Carmen Lopez", email: "carmen.lopez@email.com", phone: "+63 967 890 1234", orders: 52, spent: "₱45,300", tier: "Platinum", joined: "Oct 2023" },
  { id: "7", name: "Miguel Torres", email: "miguel.torres@email.com", phone: "+63 978 901 2345", orders: 3, spent: "₱2,100", tier: "Bronze", joined: "May 2024" },
  { id: "8", name: "Sofia Ramos", email: "sofia.ramos@email.com", phone: "+63 989 012 3456", orders: 19, spent: "₱14,700", tier: "Gold", joined: "Jan 2024" },
];

const Customers = () => {
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("");
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum": return "bg-accent text-white";
      case "Gold": return "bg-warning text-white";
      case "Silver": return "bg-silver text-white";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="pl-64 transition-all duration-300">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Customers</h1>
              <p className="text-muted-foreground">Manage your customer database</p>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Customer
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-foreground">1,284</div>
                <div className="text-sm text-muted-foreground">Total Customers</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-accent">156</div>
                <div className="text-sm text-muted-foreground">New This Month</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-success">892</div>
                <div className="text-sm text-muted-foreground">Active Customers</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-warning">4.7</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </CardContent>
            </Card>
          </div>

          {/* Customers Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search customers..." className="pl-10" />
                </div>
              </div>

              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Total Spent</TableHead>
                      <TableHead>Tier</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="bg-primary">
                              <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                                {getInitials(customer.name)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{customer.name}</div>
                              <div className="text-xs text-muted-foreground">ID: {customer.id}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs">{customer.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs">{customer.phone}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{customer.orders}</TableCell>
                        <TableCell className="font-semibold text-accent">{customer.spent}</TableCell>
                        <TableCell>
                          <Badge className={getTierColor(customer.tier)}>
                            {customer.tier}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{customer.joined}</TableCell>
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

export default Customers;
