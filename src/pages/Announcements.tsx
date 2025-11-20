import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Calendar, AlertCircle } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "New Menu Items Available!",
    date: "March 15, 2024",
    type: "update",
    content: "We're excited to introduce our new Vegan Filipino dishes! Try our Plant-Based Adobo and Vegan Kare-Kare today.",
    priority: "high"
  },
  {
    id: 2,
    title: "Extended Operating Hours",
    date: "March 10, 2024",
    type: "info",
    content: "Starting this week, we'll be open until 11 PM on weekends to serve you better!",
    priority: "medium"
  },
  {
    id: 3,
    title: "Holiday Special Promo",
    date: "March 8, 2024",
    type: "promo",
    content: "Get 20% off on all catering packages this month! Perfect for your upcoming celebrations.",
    priority: "high"
  },
  {
    id: 4,
    title: "System Maintenance Notice",
    date: "March 5, 2024",
    type: "alert",
    content: "Our online ordering system will undergo maintenance on March 20, 2-4 AM. Please plan accordingly.",
    priority: "medium"
  },
  {
    id: 5,
    title: "Customer Appreciation Week",
    date: "March 1, 2024",
    type: "event",
    content: "Thank you for your continued support! Enjoy special discounts and freebies all week long.",
    priority: "low"
  },
];

const Announcements = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "update": return "bg-info text-white";
      case "promo": return "bg-accent text-accent-foreground";
      case "alert": return "bg-destructive text-white";
      case "event": return "bg-success text-white";
      default: return "bg-muted";
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === "high") {
      return <AlertCircle className="h-5 w-5 text-destructive" />;
    }
    return null;
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Megaphone className="h-8 w-8 text-accent" />
              <h1 className="text-4xl font-bold text-foreground">Announcements</h1>
            </div>
            <p className="text-muted-foreground">Stay updated with the latest news and updates</p>
          </div>

          {/* Latest Announcement Highlight */}
          <Card className="mb-8 bg-gradient-to-r from-accent/10 to-primary/10 border-accent">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Badge className={getTypeColor(announcements[0].type)}>
                    {announcements[0].type}
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent">Latest</Badge>
                </div>
                {getPriorityIcon(announcements[0].priority)}
              </div>
              <CardTitle className="text-2xl mt-3">{announcements[0].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{announcements[0].content}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {announcements[0].date}
              </div>
            </CardContent>
          </Card>

          {/* All Announcements */}
          <div className="space-y-4">
            {announcements.slice(1).map((announcement) => (
              <Card key={announcement.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getTypeColor(announcement.type)}>
                          {announcement.type}
                        </Badge>
                        {getPriorityIcon(announcement.priority)}
                      </div>
                      <CardTitle className="text-xl">{announcement.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{announcement.content}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {announcement.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Announcements;
