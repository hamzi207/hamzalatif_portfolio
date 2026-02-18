import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Target, Brain, Sparkles, Users, ShoppingBag } from "lucide-react";
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
  featured: boolean;
  link: string | null;
}

const projects: (Project & { theme?: ProjectTheme })[] = [
  {
    id: "ai-compass",
    title: "AI Compass",
    subtitle: "Strategic AI Maturity Assessment & Benchmarking Engine",
    description: "Self-service AI maturity assessment and benchmarking tool for SMEs. Converts inputs into explainable maturity scores and actionable roadmaps.",
    tags: ["Maturity Assessment", "SME", "Actionable Roadmap"],
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
    subtitle: "AI-Powered Product Feedback Analysis & Agile Anti-Pattern Detection",
    description: "AI-powered platform that transforms user feedback into actionable insights while detecting agile anti-patterns like 'Feature Factory' behavior.",
    tags: ["Feedback Analysis", "Anti-Pattern Detection", "Agile"],
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
    id: "klarstein-personalization",
    title: "Klarstein Personalization & Search",
    description: "Managed strategic migrations for Search (FactFinder to Bloomreach) and Personalization, optimizing the digital experience for a large-scale e-commerce platform.",
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
    title: "BLOOMR E-commerce Platform",
    description: "Led the end-to-end redesign and infrastructure migration of a high-traffic retail e-commerce platform and accounting systems.",
    tags: ["E-commerce", "Cloud Migration", "Infrastructure"],
    icon: ShoppingBag,
    featured: false,
    link: null,
  }
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
            {projects
              .filter((p) => p.featured)
              .map((project) => {
                const theme = project.theme || defaultTheme;
                // Helper to get text color for icon wrapper if image is missing
                // theme.icon is like "text-indigo-600", we want that same color
                return (
                  <Link
                    key={project.id}
                    to={project.link || "#"}
                    className="group block"
                  >
                    <div className={`grid md:grid-cols-2 gap-12 items-center p-8 bg-card border border-border rounded-lg ${theme.border} transition-colors duration-200`}>
                      <div className="space-y-6">
                        <div className={`w-14 h-14 ${theme.bg} rounded-lg flex items-center justify-center`}>
                          {/* @ts-ignore */}
                          {project.image ? (
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
                      <div className="aspect-square bg-background rounded-lg overflow-hidden">
                        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${theme.gradient} relative`}>
                          {/* @ts-ignore */}
                          {project.image ? (
                            <img src={project.image} alt={project.title} className="w-48 h-48 object-contain opacity-80" />
                          ) : (
                            <project.icon className="w-32 h-32 text-primary/40" />
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
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