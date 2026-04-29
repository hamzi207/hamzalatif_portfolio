import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Target, Brain, Sparkles, Users, ShoppingBag, Globe, PlayCircle } from "lucide-react";
import { SEO } from "../components/SEO";

interface ProjectTheme {
  primary: string;
  bg: string;
  border: string;
  gradient: string;
  icon: string;
}

const defaultTheme: ProjectTheme = {
  primary: "group-hover:text-primary",
  bg: "bg-primary/10",
  border: "hover:border-primary/50",
  gradient: "from-primary/20 to-primary/5",
  icon: "text-primary"
};

interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  image?: string;
  customLogo?: React.ReactNode;
  featured: boolean;
  link: string | null;
}

const projects: (Project & { theme?: ProjectTheme })[] = [
  {
    id: "ai-compass",
    title: "AI Compass",
    subtitle: "AI Maturity Assessment Platform",
    description: "SaaS platform evaluating AI readiness and maturity across key business dimensions.",
    tags: ["Maturity Assessment", "SME", "Actionable Roadmap", "Vercel", "Render", "Supabase", "Brevo"],
    icon: Target,
    image: "/assets/ai-compass-logo.svg",
    featured: true,
    link: "/projects/ai-compass",
    theme: {
      primary: "group-hover:text-indigo-600",
      bg: "bg-indigo-500/10",
      border: "hover:border-indigo-500/50",
      gradient: "from-indigo-500/20 to-indigo-500/5",
      icon: "text-indigo-600"
    }
  },
  {
    id: "productlogik",
    title: "ProductLogik",
    subtitle: "AI Product Intelligence SaaS Platform",
    description: "AI-native SaaS platform transforming customer feedback into strategic product decision intelligence.",
    tags: ["Feedback Analysis", "Anti-Pattern Detection", "Agile", "VPS", "Supabase", "Resend"],
    icon: Brain,
    image: "/assets/productlogik-logo.svg",
    featured: true,
    link: "/projects/productlogik",
    theme: {
      primary: "group-hover:text-emerald-600",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/50",
      gradient: "from-emerald-500/20 to-emerald-500/5",
      icon: "text-emerald-600"
    }
  },
  {
    id: "hetavideo",
    title: "HetaVideo",
    subtitle: "Custom Video Streaming Platform",
    description: "High-performance video streaming gateway bypassing third-party platform restrictions via self-managed architecture.",
    tags: ["Next.js", "VPS", "Supabase", "Resend", "TMDB API"],
    icon: PlayCircle,
    customLogo: (
      <span className="flex items-baseline gap-1 select-none">
        <span className="text-2xl font-bold" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: "#e50914" }}>η</span>
        <span className="text-lg font-bold" style={{ background: "linear-gradient(to right, #e50914, #ff4500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>HetaVideo</span>
      </span>
    ),
    featured: true,
    link: "/projects/hetavideo",
    theme: {
      primary: "group-hover:text-[#e50914]",
      bg: "bg-[#e50914]/10",
      border: "hover:border-[#e50914]/50",
      gradient: "from-[#e50914]/20 to-[#ff4500]/10",
      icon: "text-[#e50914]"
    }
  },
  {
    id: "teleresources",
    title: "TeleResources Pakistan",
    subtitle: "Corporate CMS & Catalog",
    description: "Robust WordPress platform built for a telecom and EV infrastructure leader, designed for high performance.",
    tags: ["WordPress Development", "Corporate CMS", "EV Infrastructure"],
    icon: Globe,
    featured: true,
    link: "/projects/teleresources",
    theme: {
      primary: "group-hover:text-[#41cb5a]",
      bg: "bg-[#41cb5a]/10",
      border: "hover:border-[#41cb5a]/50",
      gradient: "from-[#41cb5a]/20 to-[#292929]/10",
      icon: "text-[#41cb5a]"
    }
  },
  {
    id: "klarstein-personalization",
    title: "Klarstein Personalization & Search",
    description: "Managed strategic migrations for Search and Personalization, optimizing the digital experience for a large-scale e-commerce platform.",
    tags: ["Personalization", "Search", "E-commerce"],
    icon: Sparkles,
    featured: false,
    link: null,
  },
  {
    id: "zennova-erp",
    title: "Zennova ERP & HRM System",
    description: "Guided the development of custom ERP and HRM solutions to streamline enterprise operations and enable effective remote work.",
    tags: ["ERP", "Digital Transformation", "Product Ownership"],
    icon: Users,
    featured: false,
    link: null,
  },
  {
    id: "bloomr-ecommerce",
    title: "Bloomr (Shopify E-Commerce Platform)",
    description: "Built and continuously improved a Shopify-based e-commerce platform from scratch, managing store setup, content, product catalog, and ongoing enhancements over multiple years.",
    tags: ["Shopify", "E-commerce", "CRO", "Cloud Migration"],
    icon: ShoppingBag,
    featured: false,
    link: "https://bloomr.com",
  },
  {
    id: "zennova-home",
    title: "Zennova Home (Shopify Store)",
    description: "Developed and launched a Shopify store from scratch, contributing to store setup, content creation, and operational workflows. Focused on building a structured and user-friendly platform aligned with business requirements.",
    tags: ["Shopify", "E-commerce", "Store Launch"],
    icon: ShoppingBag,
    featured: false,
    link: "https://zennovahome.com",
  },
  {
    id: "zennova-group",
    title: "Zennova Group (E-Commerce Optimization)",
    description: "Improved existing e-commerce websites by enhancing UI layouts, resolving technical issues, and refining user flows across platforms including a carpet brand and a tyre marketplace.",
    tags: ["WordPress", "E-commerce", "UX Optimization", "CRO"],
    icon: Globe,
    featured: false,
    link: "https://zennovacarpet.com",
  },
];

export function Projects() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <SEO title="Projects" description="Explore Hamza Latif's portfolio of AI and Product Engineering projects." />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-foreground">Projects</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of products I've built and shipped, from early concepts to
              scaled platforms serving thousands of users.
            </p>
          </div>

          {/* Featured Project */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Featured AI Systems</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project) => {
                  const theme = project.theme || defaultTheme;
                  return (
                    <Link
                      key={project.id}
                      to={project.link || "#"}
                      className="group block h-full"
                    >
                      <div className={`flex flex-col h-full gap-8 p-8 bg-card border border-border rounded-lg ${theme.border} transition-colors duration-200`}>
                        <div className="space-y-6 flex-1">
                          <div className={`w-14 h-14 ${theme.bg} rounded-lg flex items-center justify-center`}>
                            {/* @ts-ignore */}
                            {project.customLogo ? (
                              <span className="text-2xl font-bold" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: "#e50914" }}>η</span>
                            ) : project.image ? (
                              <img src={project.image} alt={project.title} className="w-10 h-10 object-contain" />
                            ) : (
                              <project.icon className={`w-7 h-7 ${theme.icon}`} />
                            )}
                          </div>
                          <h2 className={`text-foreground ${theme.primary} transition-colors duration-200`}>
                            {project.title}
                          </h2>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-background text-sm text-muted-foreground rounded-full border border-border"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className={`inline-flex items-center ${theme.icon}`}>
                            View Case Study
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </div>
                        <div className="aspect-video bg-background rounded-lg overflow-hidden shrink-0 mt-auto">
                          <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${theme.gradient} relative`}>
                            {/* @ts-ignore */}
                            {project.customLogo ? (
                              <div className="flex flex-col items-center gap-2 opacity-90">
                                <span className="text-6xl font-bold" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: "#e50914" }}>η</span>
                                <span className="text-3xl font-bold" style={{ background: "linear-gradient(to right, #e50914, #ff4500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>HetaVideo</span>
                              </div>
                            ) : project.image ? (
                              <img src={project.image} alt={project.title} className="w-32 h-32 object-contain opacity-80" />
                            ) : (
                              <project.icon className={`w-24 h-24 ${theme.icon} opacity-40`} />
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>

          {/* Other Projects */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <div
                    key={project.id}
                    className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-background text-xs text-muted-foreground rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}