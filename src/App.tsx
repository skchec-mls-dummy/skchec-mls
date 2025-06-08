
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BriefHistory from "./pages/BriefHistory";
import MissionVision from "./pages/MissionVision";
import PrincipalWelcome from "./pages/PrincipalWelcome";
import FacultyStaff from "./pages/FacultyStaff";
import Curriculum from "./pages/Curriculum";
import SubjectStreams from "./pages/SubjectStreams";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/brief-history" element={<BriefHistory />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/principal-welcome" element={<PrincipalWelcome />} />
          <Route path="/faculty-staff" element={<FacultyStaff />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/subject-streams" element={<SubjectStreams />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
