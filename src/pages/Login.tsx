import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UtensilsCrossed, LogIn, UserPlus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [userRole, setUserRole] = useState<"customer" | "admin" | "staff" | "rider">("customer");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login validation
    if (loginEmail && loginPassword) {
      // Store mock user session
      localStorage.setItem("userRole", userRole);
      localStorage.setItem("userEmail", loginEmail);
      
      toast({
        title: "Login Successful",
        description: `Welcome back! Redirecting to ${userRole} dashboard...`,
      });

      // Redirect based on role
      setTimeout(() => {
        switch(userRole) {
          case "admin":
            navigate("/admin");
            break;
          case "staff":
            navigate("/staff");
            break;
          case "rider":
            navigate("/rider");
            break;
          default:
            navigate("/customer");
        }
      }, 1000);
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter valid credentials",
        variant: "destructive",
      });
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupName && signupEmail && signupPassword && signupPhone) {
      localStorage.setItem("userRole", "customer");
      localStorage.setItem("userEmail", signupEmail);
      localStorage.setItem("userName", signupName);
      
      toast({
        title: "Account Created",
        description: "Your account has been created successfully!",
      });

      setTimeout(() => {
        navigate("/customer");
      }, 1000);
    } else {
      toast({
        title: "Signup Failed",
        description: "Please fill in all fields",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-secondary flex items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <UtensilsCrossed className="h-8 w-8 text-accent-foreground" />
          </div>
          <CardTitle className="text-3xl">Agot's Express</CardTitle>
          <CardDescription>Authentic Filipino Cuisine</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="role">Login As</Label>
                  <select
                    id="role"
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value as any)}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                    <option value="rider">Rider</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </form>
              <div className="mt-4 text-center">
                <Button variant="link" onClick={() => navigate("/")}>
                  Back to Home
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    placeholder="Juan Dela Cruz"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="signup-phone">Phone Number</Label>
                  <Input
                    id="signup-phone"
                    type="tel"
                    placeholder="+63 912 345 6789"
                    value={signupPhone}
                    onChange={(e) => setSignupPhone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Create Account
                </Button>
              </form>
              <div className="mt-4 text-center">
                <Button variant="link" onClick={() => navigate("/")}>
                  Back to Home
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
