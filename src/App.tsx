import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // ⬅️ Add Navigate here
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Compliance from "./pages/Compliance";
import Schedule from "./pages/Schedule";
import Certificates from "./pages/Certificates";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";
import CreateCourse from "./pages/CreateCourse";
import AddUser from "./pages/AddUser";
import UserDashboard from "./user/User-Dashboard";




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* ✅ Redirect root / to /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/courses" element={<DashboardLayout><Courses /></DashboardLayout>} />
          <Route path="/users" element={<DashboardLayout><Users /></DashboardLayout>} />
          <Route path="/analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />
          <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
          <Route path="/courses/create" element={<DashboardLayout><CreateCourse /></DashboardLayout>} />
          <Route path="/users/add" element={<DashboardLayout><AddUser /></DashboardLayout>} />
          <Route path="/compliance" element={<DashboardLayout><Compliance /></DashboardLayout>} />
          <Route path="/schedule" element={<DashboardLayout><Schedule /></DashboardLayout>} />
          <Route path="/certificates" element={<DashboardLayout><Certificates /></DashboardLayout>} />
          <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
          <Route path="/user-dashboard" element={<DashboardLayout><UserDashboard /></DashboardLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
