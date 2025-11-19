import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Phone, Plus } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";

const reservations = [
  { id: "R001", name: "Robert Santos", date: "2024-12-20", time: "7:00 PM", guests: 4, phone: "+63 912 345 6789", status: "confirmed", table: "T-12" },
  { id: "R002", name: "Lisa Garcia", date: "2024-12-20", time: "7:30 PM", guests: 2, phone: "+63 923 456 7890", status: "confirmed", table: "T-05" },
  { id: "R003", name: "Michael Cruz", date: "2024-12-20", time: "8:00 PM", guests: 6, phone: "+63 934 567 8901", status: "pending", table: "T-18" },
  { id: "R004", name: "Sarah Lopez", date: "2024-12-21", time: "6:30 PM", guests: 3, phone: "+63 945 678 9012", status: "confirmed", table: "T-08" },
  { id: "R005", name: "David Torres", date: "2024-12-21", time: "7:00 PM", guests: 5, phone: "+63 956 789 0123", status: "confirmed", table: "T-15" },
  { id: "R006", name: "Emma Reyes", date: "2024-12-21", time: "8:00 PM", guests: 2, phone: "+63 967 890 1234", status: "pending", table: "T-03" },
];

const Reservations = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="pl-64 transition-all duration-300">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Reservations</h1>
              <p className="text-muted-foreground">Manage table bookings and reservations</p>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              New Reservation
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-foreground">28</div>
                <div className="text-sm text-muted-foreground">Today</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-success">24</div>
                <div className="text-sm text-muted-foreground">Confirmed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-warning">4</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-accent">45</div>
                <div className="text-sm text-muted-foreground">This Week</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Reservations List */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Upcoming Reservations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reservations.map((reservation) => (
                    <Card key={reservation.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-lg">{reservation.name}</h3>
                              <Badge
                                variant={reservation.status === "confirmed" ? "default" : "outline"}
                                className={reservation.status === "confirmed" ? "bg-success text-white" : ""}
                              >
                                {reservation.status}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{reservation.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>{reservation.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Users className="h-4 w-4" />
                                <span>{reservation.guests} guests</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span className="text-xs">{reservation.phone}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <Badge variant="outline">Table {reservation.table}</Badge>
                              <Badge variant="outline">{reservation.id}</Badge>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 ml-4">
                            <Button size="sm" variant="outline">Edit</Button>
                            <Button size="sm" variant="outline">Cancel</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reservations;
