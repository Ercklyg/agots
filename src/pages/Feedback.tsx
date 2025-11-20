import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star, MessageSquare, ThumbsUp, AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

const feedbackData = [
  {
    id: 1,
    customer: "Juan Dela Cruz",
    email: "juan@email.com",
    rating: 5,
    comment: "Excellent food quality and fast delivery! The Chicken Adobo was amazing.",
    date: "2024-03-15",
    status: "resolved",
    orderId: "ORD-001"
  },
  {
    id: 2,
    customer: "Maria Santos",
    email: "maria@email.com",
    rating: 4,
    comment: "Good food but delivery took longer than expected.",
    date: "2024-03-14",
    status: "pending",
    orderId: "ORD-002"
  },
  {
    id: 3,
    customer: "Pedro Reyes",
    email: "pedro@email.com",
    rating: 5,
    comment: "Best Filipino restaurant! Love the authentic taste.",
    date: "2024-03-13",
    status: "resolved",
    orderId: "ORD-003"
  },
  {
    id: 4,
    customer: "Ana Garcia",
    email: "ana@email.com",
    rating: 3,
    comment: "Food was good but portion size could be better.",
    date: "2024-03-12",
    status: "pending",
    orderId: "ORD-004"
  },
  {
    id: 5,
    customer: "Jose Lim",
    email: "jose@email.com",
    rating: 5,
    comment: "Outstanding service and delicious food. Highly recommended!",
    date: "2024-03-11",
    status: "resolved",
    orderId: "ORD-005"
  },
];

const Feedback = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<typeof feedbackData[0] | null>(null);
  const [response, setResponse] = useState("");

  const handleRespond = () => {
    if (response.trim()) {
      toast({
        title: "Response Sent",
        description: `Your response has been sent to ${selectedFeedback?.customer}`,
      });
      setResponse("");
      setSelectedFeedback(null);
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return "text-success";
    if (rating >= 3) return "text-warning";
    return "text-destructive";
  };

  const getStatusBadge = (status: string) => {
    return status === "resolved" 
      ? <Badge className="bg-success text-white">Resolved</Badge>
      : <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
  };

  const avgRating = (feedbackData.reduce((acc, f) => acc + f.rating, 0) / feedbackData.length).toFixed(1);
  const totalFeedback = feedbackData.length;
  const pendingCount = feedbackData.filter(f => f.status === "pending").length;

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Customer Feedback</h1>
            <p className="text-muted-foreground">Monitor and respond to customer reviews</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Average Rating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">{avgRating}</div>
                <p className="text-xs text-muted-foreground mt-1">Out of 5.0</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Total Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{totalFeedback}</div>
                <p className="text-xs text-muted-foreground mt-1">All time</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Pending Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-warning">{pendingCount}</div>
                <p className="text-xs text-muted-foreground mt-1">Needs attention</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  Positive Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">
                  {feedbackData.filter(f => f.rating >= 4).length}
                </div>
                <p className="text-xs text-muted-foreground mt-1">4+ stars</p>
              </CardContent>
            </Card>
          </div>

          {/* Feedback List */}
          <div className="space-y-4">
            {feedbackData.map((feedback) => (
              <Card key={feedback.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg">{feedback.customer}</CardTitle>
                        {getStatusBadge(feedback.status)}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{feedback.email}</span>
                        <span>•</span>
                        <span>Order: {feedback.orderId}</span>
                        <span>•</span>
                        <span>{feedback.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < feedback.rating
                              ? `fill-accent text-accent ${getRatingColor(feedback.rating)}`
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feedback.comment}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => setSelectedFeedback(feedback)}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Respond
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Respond to Feedback</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Customer:</p>
                          <p className="font-medium">{selectedFeedback?.customer}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Original Feedback:</p>
                          <p className="text-sm">{selectedFeedback?.comment}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Your Response:</label>
                          <Textarea
                            placeholder="Type your response here..."
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            rows={4}
                          />
                        </div>
                        <Button
                          onClick={handleRespond}
                          className="w-full bg-accent hover:bg-accent/90"
                        >
                          Send Response
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Feedback;
