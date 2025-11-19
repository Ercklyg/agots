import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, UtensilsCrossed, Home } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { CartSheet } from "@/components/CartSheet";
import { Link } from "react-router-dom";

const menuItems = {
  mains: [
    { id: 1, name: "Chicken Adobo", price: 280, description: "Classic Filipino braised chicken in soy sauce and vinegar", category: "Main Course" },
    { id: 2, name: "Pork Adobo", price: 300, description: "Tender pork belly in traditional adobo sauce", category: "Main Course" },
    { id: 3, name: "Sinigang na Baboy", price: 350, description: "Sour pork soup with tamarind and vegetables", category: "Main Course" },
    { id: 4, name: "Kare-Kare", price: 420, description: "Oxtail stew in rich peanut sauce with vegetables", category: "Main Course" },
    { id: 5, name: "Lechon Kawali", price: 380, description: "Crispy deep-fried pork belly with liver sauce", category: "Main Course" },
    { id: 6, name: "Crispy Pata", price: 680, description: "Deep-fried pork knuckles, crispy outside, tender inside", category: "Main Course" },
    { id: 7, name: "Sisig", price: 320, description: "Sizzling chopped pork with onions and chili peppers", category: "Main Course" },
    { id: 8, name: "Bicol Express", price: 340, description: "Spicy pork in coconut milk with chilies", category: "Main Course" },
  ],
  appetizers: [
    { id: 9, name: "Lumpiang Shanghai", price: 180, description: "Crispy fried spring rolls with ground pork", category: "Appetizer" },
    { id: 10, name: "Fresh Lumpia", price: 150, description: "Fresh vegetables wrapped in crepe with peanut sauce", category: "Appetizer" },
    { id: 11, name: "Calamares", price: 280, description: "Crispy fried squid rings with spicy vinegar", category: "Appetizer" },
    { id: 12, name: "Tokwa't Baboy", price: 200, description: "Fried tofu and pork with soy-vinegar sauce", category: "Appetizer" },
  ],
  noodles: [
    { id: 13, name: "Pancit Canton", price: 220, description: "Stir-fried flour noodles with vegetables and meat", category: "Noodles" },
    { id: 14, name: "Pancit Bihon", price: 200, description: "Rice noodles with mixed vegetables and chicken", category: "Noodles" },
    { id: 15, name: "Palabok", price: 250, description: "Rice noodles with shrimp sauce and toppings", category: "Noodles" },
  ],
  desserts: [
    { id: 16, name: "Halo-Halo", price: 150, description: "Mixed shaved ice with sweet beans, fruits, and ube ice cream", category: "Dessert" },
    { id: 17, name: "Leche Flan", price: 120, description: "Creamy caramel custard", category: "Dessert" },
    { id: 18, name: "Ube Cake", price: 180, description: "Purple yam cake with cream cheese frosting", category: "Dessert" },
    { id: 19, name: "Turon", price: 100, description: "Fried banana spring rolls with caramel", category: "Dessert" },
  ],
  beverages: [
    { id: 20, name: "Calamansi Juice", price: 80, description: "Freshly squeezed Philippine lime juice", category: "Beverage" },
    { id: 21, name: "Buko Juice", price: 90, description: "Fresh young coconut water", category: "Beverage" },
    { id: 22, name: "Sago't Gulaman", price: 70, description: "Sweet drink with tapioca pearls and jelly", category: "Beverage" },
  ],
};

const OrderMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const allItems = [...menuItems.mains, ...menuItems.appetizers, ...menuItems.noodles, ...menuItems.desserts, ...menuItems.beverages];
  
  const filteredItems = (items: typeof allItems) => {
    return items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const MenuItemCard = ({ item }: { item: typeof allItems[0] }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
              <Badge variant="outline" className="text-xs">{item.category}</Badge>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-accent">₱{item.price}</span>
            <Button 
              onClick={() => addToCart(item)}
              className="bg-accent hover:bg-accent/90"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

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
                <h1 className="text-xl font-bold">Order Online</h1>
                <p className="text-xs text-primary-foreground/70">Agot's Restaurant</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/customer">
                <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Home className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <CartSheet />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
          </div>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="mains" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="mains">Main Courses</TabsTrigger>
            <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
            <TabsTrigger value="noodles">Noodles</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="beverages">Beverages</TabsTrigger>
          </TabsList>

          <TabsContent value="mains">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems(menuItems.mains).map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="appetizers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems(menuItems.appetizers).map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="noodles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems(menuItems.noodles).map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems(menuItems.desserts).map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beverages">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems(menuItems.beverages).map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderMenu;
