
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CarlindaSaudavel from './pages/projetos/CarlindaSaudavel.tsx  ';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<AboutUs />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/:id" element={<NotFound />} />
          <Route path="/publicacoes" element={<Publications />} />
          <Route path="/publicacoes/:id" element={<NotFound />} />
          <Route path="/projetos/carlinda-saudavel" element={<CarlindaSaudavel />} />
          <Route path="/contato" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
