import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export function CartSheet() {
  const { items, removeFromCart, updateQuantity, updateInstructions, total, itemCount } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent">
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Your Cart ({itemCount} items)</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium text-muted-foreground">Your cart is empty</p>
            <p className="text-sm text-muted-foreground mb-4">Add some delicious Filipino dishes!</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 my-6">
              {items.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="text-lg font-bold text-accent mt-1">₱{item.price}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="w-16 text-center"
                      min="1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <span className="ml-auto font-semibold">
                      ₱{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  <Textarea
                    placeholder="Special instructions (optional)"
                    value={item.specialInstructions || ""}
                    onChange={(e) => updateInstructions(item.id, e.target.value)}
                    className="text-sm"
                    rows={2}
                  />
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-3">
              <div className="flex justify-between text-lg font-semibold">
                <span>Subtotal:</span>
                <span>₱{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Delivery Fee:</span>
                <span>Calculated at checkout</span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-accent">₱{total.toFixed(2)}</span>
              </div>

              <Link to="/checkout">
                <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
