import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Package, CheckCircle2, Clock, TrendingUp, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const mockAssignedDeliveries = [
  {
    id: "DEL-001",
    orderId: "ORD-045",
    customer: "Juan Dela Cruz",
    address: "123 Rizal St, Manila",
    phone: "+63 912 345 6789",
    items: 3,
    amount: "₱850",
    status: "assigned",
    distance: "2.5 km"
  },
  {
    id: "DEL-002",
    orderId: "ORD-046",
    customer: "Maria Santos",
    address: "456 Bonifacio Ave, Quezon City",
    phone: "+63 917 654 3210",
    items: 2,
    amount: "₱620",
    status: "assigned",
    distance: "1.8 km"
  },
];

const mockDeliveryHistory = [
  {
    id: "DEL-098",
    orderId: "ORD-042",
    customer: "Pedro Reyes",
    completedAt: "2 hours ago",
    amount: "₱950",
    rating: 5
  },
  {
    id: "DEL-097",
    orderId: "ORD-041",
    customer: "Ana Garcia",
    completedAt: "3 hours ago",
    amount: "₱720",
    rating: 5
  },
  {
    id: "DEL-096",
    orderId: "ORD-040",
    customer: "Jose Lim",
    completedAt: "4 hours ago",
    amount: "₱480",
    rating: 4
  },
];

const RiderDashboard = () => {
  const [deliveries, setDeliveries] = useState(mockAssignedDeliveries);

  const handleAcceptDelivery = (deliveryId: string) => {
    setDeliveries(deliveries.map(d => 
      d.id === deliveryId ? { ...d, status: "in-transit" } : d
    ));
    toast({
      title: "Delivery Accepted",
      description: `You've accepted delivery ${deliveryId}`,
    });
  };

  const handleMarkDelivered = (deliveryId: string) => {
    setDeliveries(deliveries.filter(d => d.id !== deliveryId));
    toast({
      title: "Delivery Completed",
      description: `Delivery ${deliveryId} marked as delivered`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "assigned": return "bg-warning text-warning-foreground";
      case "in-transit": return "bg-info text-white";
      default: return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-primary text-primary-foreground border-b border-primary-foreground/10 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Rider Dashboard</h1>
              <p className="text-sm text-primary-foreground/70">Miguel Santos • Rider ID: R001</p>
            </div>
            <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
              Available
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Package className="h-4 w-4" />
                Today's Deliveries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground mt-1">+3 from yesterday</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Today's Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">₱840</div>
              <p className="text-xs text-muted-foreground mt-1">From 12 deliveries</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Star className="h-4 w-4" />
                Average Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">4.9</div>
              <p className="text-xs text-muted-foreground mt-1">Based on 156 reviews</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Avg. Delivery Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">18 min</div>
              <p className="text-xs text-muted-foreground mt-1">Below target of 25min</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="assigned" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="assigned">Assigned Deliveries ({deliveries.length})</TabsTrigger>
            <TabsTrigger value="history">Delivery History</TabsTrigger>
          </TabsList>

          <TabsContent value="assigned">
            <div className="space-y-4">
              {deliveries.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No assigned deliveries at the moment</p>
                  </CardContent>
                </Card>
              ) : (
                deliveries.map((delivery) => (
                  <Card key={delivery.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{delivery.orderId}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{delivery.id}</p>
                        </div>
                        <Badge className={getStatusColor(delivery.status)}>
                          {delivery.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="font-medium">{delivery.customer}</p>
                              <p className="text-sm text-muted-foreground">{delivery.address}</p>
                              <p className="text-xs text-accent mt-1">{delivery.distance} away</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-muted-foreground" />
                            <p className="text-sm">{delivery.phone}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Items:</span>
                            <span className="font-medium">{delivery.items} items</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Amount:</span>
                            <span className="text-lg font-bold text-accent">{delivery.amount}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-2">
                        {delivery.status === "assigned" ? (
                          <Button
                            onClick={() => handleAcceptDelivery(delivery.id)}
                            className="flex-1 bg-accent hover:bg-accent/90"
                          >
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Accept Delivery
                          </Button>
                        ) : (
                          <Button
                            onClick={() => handleMarkDelivered(delivery.id)}
                            className="flex-1 bg-success hover:bg-success/90"
                          >
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Mark as Delivered
                          </Button>
                        )}
                        <Button variant="outline" className="flex-1">
                          View Route
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Recent Deliveries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockDeliveryHistory.map((delivery) => (
                    <div
                      key={delivery.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">{delivery.orderId}</p>
                          <Badge variant="outline" className="text-xs">Completed</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{delivery.customer}</p>
                        <p className="text-xs text-muted-foreground mt-1">{delivery.completedAt}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-lg font-bold text-accent">{delivery.amount}</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-accent text-accent" />
                          <span className="text-sm">{delivery.rating}.0</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RiderDashboard;
