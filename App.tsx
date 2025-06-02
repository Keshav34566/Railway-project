
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import TrainDetails from "./pages/TrainDetails";
import Packages from "./pages/Packages";
import Hotels from "./pages/Hotels";
import Community from "./pages/Community";
import TicketCancellation from "./pages/TicketCancellation";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import BookingConfirmation from "./pages/BookingConfirmation";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

// Make sure App is a function component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/trains/:from/:to/:date" element={<TrainDetails />} />
            <Route path="/trains/:id/:classType" element={<TrainDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/community" element={<Community />} />
            <Route path="/cancellation" element={<TicketCancellation />} />
            {/* Redirect old train routes to the booking page */}
            <Route path="/trains/*" element={<Navigate to="/booking" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
