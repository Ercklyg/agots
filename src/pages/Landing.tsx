import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed, Phone, Mail, MapPin, Clock, Star, ChefHat, PartyPopper, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const featuredDishes = [
    { name: "Chicken Adobo", price: "₱280", description: "Classic braised chicken in soy and vinegar", image: "🍗" },
    { name: "Lechon Kawali", price: "₱380", description: "Crispy deep-fried pork belly", image: "🥓" },
    { name: "Sinigang na Baboy", price: "₱350", description: "Sour pork soup with tamarind", image: "🍲" },
    { name: "Kare-Kare", price: "₱420", description: "Oxtail stew in rich peanut sauce", image: "🍛" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <UtensilsCrossed className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary-foreground">Agot's Restaurant</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Menu</a>
              <a href="#catering" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Catering</a>
              <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/customer">
                <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Customer Portal
                </Button>
              </Link>
              <Link to="/">
                <Button className="bg-accent hover:bg-accent/90">Admin Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-primary via-primary to-navy-dark text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-accent text-white px-4 py-1.5">Filipino Cuisine with a Modern Twist</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Experience Authentic Filipino Flavors
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Since decades ago, Agot's Restaurant has been serving traditional Filipino dishes made with locally sourced ingredients and love.
            </p>
            <div className="flex items-center justify-center gap-4 pt-6">
              <Link to="/order">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  Order Now
                </Button>
              </Link>
              <a href="#menu">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                  View Menu
                </Button>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="space-y-1">
                <div className="text-4xl font-bold text-accent">40+</div>
                <div className="text-sm text-primary-foreground/70">Years Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-accent">50K+</div>
                <div className="text-sm text-primary-foreground/70">Happy Customers</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-accent">4.8</div>
                <div className="text-sm text-primary-foreground/70">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section id="menu" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Dishes</h2>
            <p className="text-xl text-muted-foreground">Taste our signature Filipino specialties</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4 text-center">{dish.image}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{dish.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{dish.price}</span>
                    <Button size="sm" className="bg-accent hover:bg-accent/90">Order</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/order">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <ChefHat className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Expert Chefs</h3>
                <p className="text-muted-foreground">Experienced chefs preparing authentic Filipino recipes passed down through generations</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Fresh Ingredients</h3>
                <p className="text-muted-foreground">Only locally sourced, fresh ingredients to ensure quality and authentic flavors</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-warning" />
                </div>
                <h3 className="text-xl font-bold">5-Star Service</h3>
                <p className="text-muted-foreground">Exceptional service and warm hospitality that makes you feel at home</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-20 px-6 bg-gradient-to-br from-primary to-navy-dark text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
              <PartyPopper className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Catering Services</h2>
            <p className="text-xl text-primary-foreground/80">
              Make your special events memorable with our professional catering services. From intimate gatherings to grand celebrations, we've got you covered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">Standard</h3>
                <p className="text-3xl font-bold text-accent mb-4">₱500/person</p>
                <p className="text-sm text-primary-foreground/70">Perfect for casual events</p>
              </div>
              <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-6 border-2 border-accent">
                <Badge className="bg-accent text-white mb-2">Most Popular</Badge>
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-3xl font-bold text-accent mb-4">₱750/person</p>
                <p className="text-sm text-primary-foreground/70">For special celebrations</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">Deluxe</h3>
                <p className="text-3xl font-bold text-accent mb-4">₱1,200/person</p>
                <p className="text-sm text-primary-foreground/70">Ultimate luxury experience</p>
              </div>
            </div>
            <Link to="/customer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 mt-6">
                Request Catering Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Visit Us Today</h2>
              <p className="text-xl text-muted-foreground">We'd love to serve you!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Address</h3>
                      <p className="text-muted-foreground">123 Main Street, Manila, Philippines</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground">+63 912 345 6789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">info@agotsrestaurant.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Hours</h3>
                      <p className="text-muted-foreground">Mon-Sat: 10:00 AM - 10:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6">Send us a message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    />
                    <Button className="w-full bg-accent hover:bg-accent/90">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-primary-foreground/70">&copy; 2024 Agot's Restaurant & Catering Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
