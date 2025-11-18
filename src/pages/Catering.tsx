import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Phone, Plus } from "lucide-react";

const cateringOrders = [
  {
    id: "C001",
    client: "ABC Corporation",
    event: "Annual Company Party",
    date: "2024-12-28",
    guests: 150,
    package: "Premium Package",
    location: "Makati Events Hall",
    contact: "+63 912 345 6789",
    status: "confirmed",
    amount: "₱75,000",
  },
  {
    id: "C002",
    client: "Maria's Wedding",
    event: "Wedding Reception",
    date: "2024-12-30",
    guests: 200,
    package: "Deluxe Wedding Package",
    location: "Manila Garden Resort",
    contact: "+63 923 456 7890",
    status: "confirmed",
    amount: "₱120,000",
  },
  {
    id: "C003",
    client: "Santos Family",
    event: "Birthday Celebration",
    date: "2024-12-22",
    guests: 50,
    package: "Standard Package",
    location: "Private Residence, Quezon City",
    contact: "+63 934 567 8901",
    status: "pending",
    amount: "₱25,000",
  },
  {
    id: "C004",
    client: "Tech Startup Inc",
    event: "Product Launch",
    date: "2025-01-05",
    guests: 100,
    package: "Premium Package",
    location: "BGC Convention Center",
    contact: "+63 945 678 9012",
    status: "confirmed",
    amount: "₱55,000",
  },
];

const packages = [
  {
    name: "Standard Package",
    price: "₱500/person",
    includes: ["3 Main Dishes", "2 Side Dishes", "Rice", "1 Dessert", "Beverages"],
    minGuests: 30,
  },
  {
    name: "Premium Package",
    price: "₱750/person",
    includes: ["5 Main Dishes", "3 Side Dishes", "Rice & Pancit", "2 Desserts", "Premium Beverages", "Setup & Service"],
    minGuests: 50,
  },
  {
    name: "Deluxe Wedding Package",
    price: "₱1,200/person",
    includes: ["7 Main Dishes", "4 Side Dishes", "Specialty Rice & Noodles", "3 Desserts", "Premium Drinks", "Full Service", "Decoration"],
    minGuests: 100,
  },
];

const Catering = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="pl-64 transition-all duration-300">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Catering Services</h1>
              <p className="text-muted-foreground">Manage catering orders and event bookings</p>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              New Catering Order
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-foreground">24</div>
                <div className="text-sm text-muted-foreground">Total Events</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-success">18</div>
                <div className="text-sm text-muted-foreground">Confirmed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-warning">6</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-accent">₱875K</div>
                <div className="text-sm text-muted-foreground">Total Revenue</div>
              </CardContent>
            </Card>
          </div>

          {/* Catering Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{pkg.name}</span>
                    <Badge className="bg-accent text-white">{pkg.price}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground">
                      Min {pkg.minGuests} guests
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-sm">Includes:</div>
                      <ul className="space-y-1">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upcoming Catering Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cateringOrders.map((order) => (
                  <Card key={order.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-3">
                            <h3 className="font-semibold text-xl">{order.client}</h3>
                            <Badge
                              variant={order.status === "confirmed" ? "default" : "outline"}
                              className={order.status === "confirmed" ? "bg-success text-white" : ""}
                            >
                              {order.status}
                            </Badge>
                            <Badge variant="outline">{order.id}</Badge>
                          </div>
                          
                          <p className="text-muted-foreground font-medium">{order.event}</p>

                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4 text-accent" />
                              <span>{order.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="h-4 w-4 text-accent" />
                              <span>{order.guests} guests</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4 text-accent" />
                              <span className="text-xs">{order.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone className="h-4 w-4 text-accent" />
                              <span className="text-xs">{order.contact}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Badge className="bg-secondary text-white">{order.package}</Badge>
                            <span className="font-bold text-lg text-accent">{order.amount}</span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 ml-4">
                          <Button size="sm" className="bg-accent hover:bg-accent/90">View Details</Button>
                          <Button size="sm" variant="outline">Edit</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Catering;
