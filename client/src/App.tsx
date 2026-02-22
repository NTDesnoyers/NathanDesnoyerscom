import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Notes from "@/pages/Notes";
import Essays from "@/pages/Essays";
import RealEstate from "@/pages/RealEstate";
import About from "@/pages/About";
import PostView from "@/pages/PostView";
import PlanB from "@/pages/PlanB";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/notes" component={Notes} />
      <Route path="/essays" component={Essays} />
      <Route path="/real-estate" component={RealEstate} />
      <Route path="/about" component={About} />
      <Route path="/in-the-arena" component={PlanB} />
      <Route path="/notes/:slug" component={PostView} />
      <Route path="/essays/:slug" component={PostView} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
