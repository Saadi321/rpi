import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, PageLoader, PageSkeleton, Chatbot, ScrollToTop } from "@/components";
import { 
  Home, 
  About, 
  Curriculums, 
  Admission, 
  AnnouncementsPage, 
  ContactUs, 
  NotFound, 
  Facility, 
  Program,
  Prospectus,
  Faculty,
  GalleryPage,
  Blog,
  BlogPost
} from "@/pages";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

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
            <Route path="/curriculum" element={<Curriculums />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/facilities" element={<Facility />} />
            <Route path="/programs" element={<Program />} />
            <Route path="/announcements" element={<AnnouncementsPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/prospectus" element={<Prospectus />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Chatbot />
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
