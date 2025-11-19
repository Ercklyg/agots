import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { UtensilsCrossed, MapPin, Store, CreditCard, Wallet } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card">("cash");

  const deliveryFee = orderType === "delivery" ? 50 : 0;
  const finalTotal = total + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the order to the backend
    toast({
      title: "Order placed successfully!",
      description: `Your order #${Math.floor(Math.random() * 10000)} has been confirmed.`,
    });
    
    clearCart();
    navigate("/customer");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <UtensilsCrossed className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some items to your cart before checking out</p>
            <Link to="/order">
              <Button className="bg-accent hover:bg-accent/90">Browse Menu</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <UtensilsCrossed className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Checkout</h1>
              <p className="text-xs text-primary-foreground/70">Complete your order</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Type */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={orderType} onValueChange={(value: any) => setOrderType(value)}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery" className="flex items-center gap-2 cursor-pointer flex-1">
                        <MapPin className="h-5 w-5 text-accent" />
                        <div>
                          <div className="font-semibold">Delivery</div>
                          <div className="text-sm text-muted-foreground">Get it delivered to your door</div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Store className="h-5 w-5 text-secondary" />
                        <div>
                          <div className="font-semibold">Pickup</div>
                          <div className="text-sm text-muted-foreground">Pick up at our restaurant</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+63 912 345 6789" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              {orderType === "delivery" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input id="address" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postal">Postal Code</Label>
                        <Input id="postal" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deliveryInstructions">Delivery Instructions</Label>
                      <Textarea 
                        id="deliveryInstructions" 
                        placeholder="Any special instructions for the delivery rider..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Wallet className="h-5 w-5 text-success" />
                        <div>
                          <div className="font-semibold">Cash on {orderType === "delivery" ? "Delivery" : "Pickup"}</div>
                          <div className="text-sm text-muted-foreground">Pay when you receive your order</div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                        <CreditCard className="h-5 w-5 text-accent" />
                        <div>
                          <div className="font-semibold">Credit/Debit Card</div>
                          <div className="text-sm text-muted-foreground">Pay securely online</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="flex-1">
                          {item.quantity}x {item.name}
                        </span>
                        <span className="font-semibold">₱{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₱{total.toFixed(2)}</span>
                    </div>
                    {orderType === "delivery" && (
                      <div className="flex justify-between">
                        <span>Delivery Fee</span>
                        <span>₱{deliveryFee.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-accent">₱{finalTotal.toFixed(2)}</span>
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                    Place Order
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By placing your order, you agree to our terms and conditions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
