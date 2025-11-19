import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingBag, 
  Calendar, 
  User, 
  Award, 
  Clock, 
  MapPin,
  Star,
  UtensilsCrossed,
  Home,
  LogOut
} from "lucide-react";
import { Link } from "react-router-dom";

const CustomerDashboard = () => {
  const myOrders = [
    { id: "#1234", date: "2024-12-18", items: "Adobo Combo, Sinigang", total: "₱850", status: "delivered" },
    { id: "#1189", date: "2024-12-15", items: "Lechon Kawali, Rice", total: "₱450", status: "delivered" },
    { id: "#1145", date: "2024-12-10", items: "Kare-Kare Set", total: "₱680", status: "delivered" },
  ];

  const myReservations = [
    { id: "R001", date: "2024-12-25", time: "7:00 PM", guests: 4, table: "T-12", status: "confirmed" },
    { id: "R002", date: "2024-12-30", time: "6:30 PM", guests: 2, table: "T-05", status: "confirmed" },
  ];

  const loyaltyPoints = {
    current: 2450,
    tier: "Gold",
    nextTier: "Platinum",
    pointsToNext: 550,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <UtensilsCrossed className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Agot's Restaurant</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/landing">
                <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-16 w-16 bg-primary">
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, John!</h1>
              <p className="text-muted-foreground">Manage your orders, reservations, and rewards</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Orders</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <ShoppingBag className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Reservations</p>
                  <p className="text-2xl font-bold text-foreground">2</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Loyalty Points</p>
                  <p className="text-2xl font-bold text-foreground">{loyaltyPoints.current}</p>
                </div>
                <div className="p-3 bg-warning/10 rounded-lg">
                  <Award className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Member Tier</p>
                  <p className="text-2xl font-bold text-foreground">{loyaltyPoints.tier}</p>
                </div>
                <div className="p-3 bg-success/10 rounded-lg">
                  <Star className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="reservations">Reservations</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Order History</CardTitle>
                  <Button className="bg-accent hover:bg-accent/90">New Order</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myOrders.map((order) => (
                    <Card key={order.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-lg">{order.id}</span>
                              <Badge className="bg-success text-white">{order.status}</Badge>
                            </div>
                            <p className="text-muted-foreground">{order.items}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {order.date}
                              </div>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <p className="text-2xl font-bold text-accent">{order.total}</p>
                            <Button size="sm" variant="outline">Reorder</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reservations Tab */}
          <TabsContent value="reservations" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>My Reservations</CardTitle>
                  <Button className="bg-accent hover:bg-accent/90">New Reservation</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myReservations.map((reservation) => (
                    <Card key={reservation.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-3 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-lg">{reservation.id}</span>
                              <Badge className="bg-success text-white">{reservation.status}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-4 w-4 text-accent" />
                                {reservation.date}
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="h-4 w-4 text-accent" />
                                {reservation.time}
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <User className="h-4 w-4 text-accent" />
                                {reservation.guests} guests
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4 text-accent" />
                                Table {reservation.table}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button size="sm" variant="outline">Modify</Button>
                            <Button size="sm" variant="outline">Cancel</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rewards Tab */}
          <TabsContent value="rewards" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-accent to-secondary text-white">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">Loyalty Card</h3>
                      <Award className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-white/80 text-sm">Current Tier</p>
                      <p className="text-4xl font-bold">{loyaltyPoints.tier}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white/80 text-sm">Points Balance</p>
                      <p className="text-3xl font-bold">{loyaltyPoints.current} pts</p>
                    </div>
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-sm text-white/80">
                        {loyaltyPoints.pointsToNext} more points to reach {loyaltyPoints.nextTier}
                      </p>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                        <div 
                          className="bg-white rounded-full h-2" 
                          style={{ width: `${(loyaltyPoints.current / 3000) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Available Rewards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">10% Off Next Order</h4>
                      <Badge>500 pts</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Valid for dine-in or takeout orders</p>
                    <Button size="sm" className="w-full bg-accent hover:bg-accent/90">Redeem</Button>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">Free Dessert</h4>
                      <Badge>300 pts</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Choose any dessert from our menu</p>
                    <Button size="sm" className="w-full bg-accent hover:bg-accent/90">Redeem</Button>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">Priority Reservation</h4>
                      <Badge>200 pts</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Skip the waitlist for your next visit</p>
                    <Button size="sm" className="w-full bg-accent hover:bg-accent/90">Redeem</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">First Name</label>
                    <p className="text-lg font-semibold">John</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                    <p className="text-lg font-semibold">Doe</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="text-lg font-semibold">john.doe@email.com</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground">Phone</label>
                  <p className="text-lg font-semibold">+63 912 345 6789</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground">Address</label>
                  <p className="text-lg font-semibold">123 Sample Street, Manila, Philippines</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="bg-accent hover:bg-accent/90">Edit Profile</Button>
                  <Button variant="outline">Change Password</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomerDashboard;
