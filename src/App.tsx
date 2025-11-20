import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import CustomerDashboard from "./pages/CustomerDashboard";
import OrderMenu from "./pages/OrderMenu";
import Checkout from "./pages/Checkout";
import TrackOrder from "./pages/TrackOrder";
import Index from "./pages/Index";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Reservations from "./pages/Reservations";
import Menu from "./pages/Menu";
import Catering from "./pages/Catering";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import StaffDashboard from "./pages/StaffDashboard";
import RiderDashboard from "./pages/RiderDashboard";
import Announcements from "./pages/Announcements";
import Feedback from "./pages/Feedback";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Index />} />

              <Route path="/customer" element={<CustomerDashboard />} />
              <Route path="/order" element={<OrderMenu />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/staff" element={<StaffDashboard />} />
              <Route path="/rider" element={<RiderDashboard />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="*" element={<NotFound />} />
            </Routes>

        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
