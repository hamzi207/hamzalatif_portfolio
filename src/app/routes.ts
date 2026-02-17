import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { AICompassCaseStudy } from "./pages/AICompassCaseStudy";
import { ProductLogikCaseStudy } from "./pages/ProductLogikCaseStudy";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "projects/ai-compass", Component: AICompassCaseStudy },
      { path: "projects/productlogik", Component: ProductLogikCaseStudy },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: PrivacyPolicy },
      { path: "*", Component: NotFound },
    ],
  },
]);