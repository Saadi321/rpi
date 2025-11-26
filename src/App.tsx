import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, PageLoader, PageSkeleton } from "@/components";
import { Home, About, Curriculum } from "@/pages";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate initial load
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Show content after skeleton
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!showContent) {
    return <PageSkeleton />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
