import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Calendar, 
  UtensilsCrossed,
  PartyPopper,
  BarChart3,
  Settings,
  MessageSquare,
  Megaphone,
  ChevronLeft
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/admin" },
  { title: "Orders", icon: ShoppingCart, url: "/orders" },
  { title: "Customers", icon: Users, url: "/customers" },
  { title: "Reservations", icon: Calendar, url: "/reservations" },
  { title: "Menu", icon: UtensilsCrossed, url: "/menu" },
  { title: "Catering", icon: PartyPopper, url: "/catering" },
  { title: "Feedback", icon: MessageSquare, url: "/feedback" },
  { title: "Announcements", icon: Megaphone, url: "/announcements" },
  { title: "Analytics", icon: BarChart3, url: "/analytics" },
  { title: "Settings", icon: Settings, url: "/settings" },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 z-40",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <UtensilsCrossed className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="font-bold text-sidebar-foreground">Agot's Admin</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all"
              activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div className="p-4 border-t border-sidebar-border">
            <div className="text-xs text-sidebar-foreground/50">
              © 2025 Agot's Restaurant
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
