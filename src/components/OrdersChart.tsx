import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "8AM", orders: 12 },
  { name: "10AM", orders: 28 },
  { name: "12PM", orders: 45 },
  { name: "2PM", orders: 38 },
  { name: "4PM", orders: 32 },
  { name: "6PM", orders: 52 },
  { name: "8PM", orders: 41 },
];

export function OrdersChart() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Today's Orders by Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="orders" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
