import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  UtensilsCrossed, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Package, 
  Bike,
  Home,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState<any>(null);

  // Mock order data
  const mockOrders: Record<string, any> = {
    "ORD-001": {
      id: "ORD-001",
      status: "out-for-delivery",
      customer: "Juan Dela Cruz",
      items: ["Chicken Adobo", "Pancit Canton", "Halo-Halo"],
      total: "₱850",
      deliveryAddress: "123 Rizal St, Manila",
      rider: { name: "Miguel Santos", phone: "+63 912 345 6789" },
      estimatedTime: "15-20 minutes",
      stages: [
        { label: "Order Placed", time: "10:30 AM", status: "completed" },
        { label: "Preparing", time: "10:35 AM", status: "completed" },
        { label: "Ready for Pickup", time: "10:45 AM", status: "completed" },
        { label: "Out for Delivery", time: "10:50 AM", status: "active" },
        { label: "Delivered", time: "Estimated 11:10 AM", status: "pending" },
      ]
    },
    "ORD-002": {
      id: "ORD-002",
      status: "preparing",
      customer: "Maria Santos",
      items: ["Sinigang na Baboy", "Lumpia"],
      total: "₱620",
      deliveryAddress: "456 Bonifacio Ave, Quezon City",
      estimatedTime: "30-35 minutes",
      stages: [
        { label: "Order Placed", time: "11:00 AM", status: "completed" },
        { label: "Preparing", time: "11:05 AM", status: "active" },
        { label: "Ready for Pickup", time: "Estimated 11:25 AM", status: "pending" },
        { label: "Out for Delivery", time: "-", status: "pending" },
        { label: "Delivered", time: "-", status: "pending" },
      ]
    }
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const order = mockOrders[orderId.toUpperCase()];
    if (order) {
      setOrderData(order);
    } else {
      setOrderData("not-found");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-success text-white";
      case "active": return "bg-accent text-accent-foreground";
      case "out-for-delivery": return "bg-info text-white";
      case "preparing": return "bg-warning text-warning-foreground";
      default: return "bg-muted";
    }
  };

  const getStageIcon = (status: string) => {
    if (status === "completed") return <CheckCircle2 className="h-6 w-6 text-success" />;
    if (status === "active") return <Package className="h-6 w-6 text-accent animate-pulse" />;
    return <Clock className="h-6 w-6 text-muted" />;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-primary text-primary-foreground border-b border-primary-foreground/10 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <UtensilsCrossed className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Track Your Order</h1>
                <p className="text-xs text-primary-foreground/70">Agot's Express</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-3xl">
        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Track Your Order</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTrack} className="space-y-4">
              <div>
                <Label htmlFor="orderId">Order ID</Label>
                <div className="flex gap-2">
                  <Input
                    id="orderId"
                    placeholder="Enter your order ID (e.g., ORD-001)"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    required
                  />
                  <Button type="submit" className="bg-accent hover:bg-accent/90">
                    <Search className="h-4 w-4 mr-2" />
                    Track
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Try: ORD-001 or ORD-002 for demo
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Order Not Found */}
        {orderData === "not-found" && (
          <Card className="border-destructive">
            <CardContent className="pt-6 text-center">
              <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Order Not Found</h3>
              <p className="text-muted-foreground">
                Please check your order ID and try again.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Order Details */}
        {orderData && orderData !== "not-found" && (
          <>
            {/* Order Info */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{orderData.id}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{orderData.customer}</p>
                  </div>
                  <Badge className={getStatusColor(orderData.status)}>
                    {orderData.status.replace("-", " ").toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Delivery Address</p>
                    <p className="text-sm text-muted-foreground">{orderData.deliveryAddress}</p>
                  </div>
                </div>

                {orderData.rider && (
                  <div className="flex items-start gap-2">
                    <Bike className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Rider</p>
                      <p className="text-sm text-muted-foreground">
                        {orderData.rider.name} • {orderData.rider.phone}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Estimated Arrival</p>
                    <p className="text-sm text-muted-foreground">{orderData.estimatedTime}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="font-medium mb-2">Order Items:</p>
                  <ul className="space-y-1">
                    {orderData.items.map((item: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                  <p className="text-lg font-bold text-accent mt-3">Total: {orderData.total}</p>
                </div>
              </CardContent>
            </Card>

            {/* Order Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Order Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {orderData.stages.map((stage: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        {getStageIcon(stage.status)}
                        {index < orderData.stages.length - 1 && (
                          <div className={`w-0.5 h-12 mt-2 ${
                            stage.status === "completed" ? "bg-success" : "bg-muted"
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <p className={`font-medium ${
                          stage.status === "active" ? "text-accent" : ""
                        }`}>
                          {stage.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{stage.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
