import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { ScrollToTopOnRouteChange } from "./ScrollToTopOnRouteChange";

export function Root() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollToTopOnRouteChange />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}