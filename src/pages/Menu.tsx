import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuItems = {
  mains: [
    { id: 1, name: "Chicken Adobo", price: "₱280", description: "Classic Filipino braised chicken in soy sauce and vinegar", category: "Best Seller", stock: "Available" },
    { id: 2, name: "Pork Adobo", price: "₱300", description: "Tender pork belly in traditional adobo sauce", category: "Best Seller", stock: "Available" },
    { id: 3, name: "Sinigang na Baboy", price: "₱350", description: "Sour pork soup with tamarind and vegetables", category: "Signature", stock: "Available" },
    { id: 4, name: "Kare-Kare", price: "₱420", description: "Oxtail stew in rich peanut sauce with vegetables", category: "Specialty", stock: "Available" },
    { id: 5, name: "Lechon Kawali", price: "₱380", description: "Crispy deep-fried pork belly with liver sauce", category: "Best Seller", stock: "Available" },
    { id: 6, name: "Crispy Pata", price: "₱680", description: "Deep-fried pork knuckles, crispy outside, tender inside", category: "Specialty", stock: "Limited" },
    { id: 7, name: "Sisig", price: "₱320", description: "Sizzling chopped pork with onions and chili peppers", category: "Best Seller", stock: "Available" },
    { id: 8, name: "Bicol Express", price: "₱340", description: "Spicy pork in coconut milk with chilies", category: "Spicy", stock: "Available" },
  ],
  appetizers: [
    { id: 9, name: "Lumpiang Shanghai", price: "₱180", description: "Crispy fried spring rolls with ground pork", category: "Appetizer", stock: "Available" },
    { id: 10, name: "Fresh Lumpia", price: "₱150", description: "Fresh vegetables wrapped in crepe with peanut sauce", category: "Appetizer", stock: "Available" },
    { id: 11, name: "Calamares", price: "₱280", description: "Crispy fried squid rings with spicy vinegar", category: "Appetizer", stock: "Available" },
    { id: 12, name: "Tokwa't Baboy", price: "₱200", description: "Fried tofu and pork with soy-vinegar sauce", category: "Appetizer", stock: "Available" },
  ],
  noodles: [
    { id: 13, name: "Pancit Canton", price: "₱220", description: "Stir-fried flour noodles with vegetables and meat", category: "Noodles", stock: "Available" },
    { id: 14, name: "Pancit Bihon", price: "₱200", description: "Rice noodles with mixed vegetables and chicken", category: "Noodles", stock: "Available" },
    { id: 15, name: "Palabok", price: "₱250", description: "Rice noodles with shrimp sauce and toppings", category: "Specialty", stock: "Available" },
  ],
  desserts: [
    { id: 16, name: "Halo-Halo", price: "₱150", description: "Mixed shaved ice with sweet beans, fruits, and ube ice cream", category: "Dessert", stock: "Available" },
    { id: 17, name: "Leche Flan", price: "₱120", description: "Creamy caramel custard", category: "Dessert", stock: "Available" },
    { id: 18, name: "Ube Cake", price: "₱180", description: "Purple yam cake with cream cheese frosting", category: "Dessert", stock: "Available" },
    { id: 19, name: "Turon", price: "₱100", description: "Fried banana spring rolls with caramel", category: "Dessert", stock: "Available" },
  ],
  beverages: [
    { id: 20, name: "Calamansi Juice", price: "₱80", description: "Freshly squeezed Philippine lime juice", category: "Beverage", stock: "Available" },
    { id: 21, name: "Buko Juice", price: "₱90", description: "Fresh young coconut water", category: "Beverage", stock: "Available" },
    { id: 22, name: "Sago't Gulaman", price: "₱70", description: "Sweet drink with tapioca pearls and jelly", category: "Beverage", stock: "Available" },
  ],
};

const Menu = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Best Seller": return "bg-accent text-white";
      case "Signature": return "bg-secondary text-white";
      case "Specialty": return "bg-warning text-white";
      case "Spicy": return "bg-destructive text-white";
      default: return "";
    }
  };

  const MenuItemCard = ({ item }: { item: any }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground mb-1">{item.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
            <div className="flex items-center gap-2">
              <Badge className={getCategoryColor(item.category)} variant="secondary">
                {item.category}
              </Badge>
              <Badge variant={item.stock === "Available" ? "outline" : "secondary"}>
                {item.stock}
              </Badge>
            </div>
          </div>
          <div className="ml-4 text-right">
            <div className="text-xl font-bold text-accent mb-2">{item.price}</div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="pl-64 transition-all duration-300">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Menu Management</h1>
              <p className="text-muted-foreground">Manage your Filipino cuisine menu items</p>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Menu Item
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-foreground">42</div>
                <div className="text-sm text-muted-foreground">Total Items</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-accent">8</div>
                <div className="text-sm text-muted-foreground">Main Courses</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-secondary">4</div>
                <div className="text-sm text-muted-foreground">Desserts</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-success">38</div>
                <div className="text-sm text-muted-foreground">In Stock</div>
              </CardContent>
            </Card>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search menu items..." className="pl-10" />
          </div>

          {/* Menu Tabs */}
          <Tabs defaultValue="mains" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="mains">Main Courses</TabsTrigger>
              <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
              <TabsTrigger value="noodles">Noodles & Rice</TabsTrigger>
              <TabsTrigger value="desserts">Desserts</TabsTrigger>
              <TabsTrigger value="beverages">Beverages</TabsTrigger>
            </TabsList>

            <TabsContent value="mains" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuItems.mains.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="appetizers" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuItems.appetizers.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="noodles" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuItems.noodles.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="desserts" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuItems.desserts.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beverages" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuItems.beverages.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Menu;
