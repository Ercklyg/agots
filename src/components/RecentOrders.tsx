import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentOrders = [
  { id: "#1234", customer: "John Doe", items: "Adobo Combo, Sinigang", amount: "₱850", status: "completed" },
  { id: "#1235", customer: "Maria Santos", items: "Lechon Kawali, Rice", amount: "₱450", status: "preparing" },
  { id: "#1236", customer: "Pedro Cruz", items: "Catering Package", amount: "₱15,000", status: "pending" },
  { id: "#1237", customer: "Ana Garcia", items: "Kare-Kare Set", amount: "₱680", status: "completed" },
  { id: "#1238", customer: "Juan Reyes", items: "Mixed Platter", amount: "₱1,200", status: "preparing" },
];

export function RecentOrders() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm">{order.id}</span>
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
                </div>
                <p className="text-sm text-foreground font-medium">{order.customer}</p>
                <p className="text-xs text-muted-foreground">{order.items}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-accent">{order.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
