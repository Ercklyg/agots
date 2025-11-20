import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Award, Users, Clock, Heart, Star, Home } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-primary text-primary-foreground border-b border-primary-foreground/10 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <UtensilsCrossed className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Agot's Express</h1>
                <p className="text-xs text-primary-foreground/70">Authentic Filipino Cuisine</p>
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

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">About Agot's Express</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bringing authentic Filipino flavors to your table since 2010
          </p>
        </div>

        {/* Story Section */}
        <Card className="mb-12">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Agot's Express began as a humble family kitchen, where Lola Agot's traditional recipes 
                    brought joy to our local community. What started as a passion for sharing authentic Filipino 
                    cuisine has grown into a beloved restaurant serving hundreds of satisfied customers daily.
                  </p>
                  <p>
                    Today, we continue Lola Agot's legacy by preparing every dish with the same love, care, and 
                    traditional methods that made her cooking special. From our signature Chicken Adobo to our 
                    rich Kare-Kare, each recipe is a celebration of Filipino culinary heritage.
                  </p>
                  <p>
                    Our commitment remains unchanged: to provide authentic, delicious Filipino meals that remind 
                    you of home, no matter where you are.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg h-80 flex items-center justify-center">
                <UtensilsCrossed className="h-32 w-32 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Made with Love</h3>
              <p className="text-muted-foreground">
                Every dish is prepared with care and passion, just like Lola Agot taught us.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quality Ingredients</h3>
              <p className="text-muted-foreground">
                We source only the finest, freshest ingredients for authentic Filipino flavors.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Family Tradition</h3>
              <p className="text-muted-foreground">
                Recipes passed down through generations, preserving Filipino culinary heritage.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground mb-12">
          <CardContent className="p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">14+</div>
                <p className="text-primary-foreground/80">Years of Service</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50K+</div>
                <p className="text-primary-foreground/80">Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">40+</div>
                <p className="text-primary-foreground/80">Menu Items</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">4.9</div>
                <p className="text-primary-foreground/80">Average Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Commitment</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're dedicated to providing you with an exceptional dining experience, whether you're dining in, 
            ordering for delivery, or planning a special catering event.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Fast Service</h3>
                <p className="text-sm text-muted-foreground">
                  Quick preparation and delivery without compromising quality
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">5-Star Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Consistently excellent food and service you can trust
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Customer First</h3>
                <p className="text-sm text-muted-foreground">
                  Your satisfaction is our top priority, always
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Experience Filipino Flavors Today</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Agot's Express their go-to for authentic Filipino cuisine.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/order">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Order Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
