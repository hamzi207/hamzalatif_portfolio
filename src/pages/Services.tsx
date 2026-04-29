import { motion } from "motion/react";
import { ShoppingCart, Bot, Server, TerminalSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../components/SEO";

export function Services() {
  const services = [
    {
      id: "ai-data",
      title: "AI Product & Data Strategy",
      description: "Translating complex machine learning and LLM capabilities into viable business models and product architectures.",
      icon: Bot,
      tags: ["Explainable AI", "ML Pipelines", "Product Roadmap", "Decision Intelligence"],
      theme: {
        primary: "group-hover:text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "hover:border-emerald-500/50",
        icon: "text-emerald-500"
      }
    },
    {
      id: "vibe-coding",
      title: "AI-Augmented Development & Vibe Coding",
      description: "Rapidly prototyping and developing robust full-stack applications leveraging advanced AI coding agents and LLMs.",
      icon: TerminalSquare,
      tags: ["JavaScript", "Python", "CSS", "ChatGPT/Codex", "Copilot", "Claude Code", "Gemini AI"],
      theme: {
        primary: "group-hover:text-purple-500",
        bg: "bg-purple-500/10",
        border: "hover:border-purple-500/50",
        icon: "text-purple-500"
      }
    },
    {
      id: "infrastructure",
      title: "Full-Stack Engineering & Infrastructure",
      description: "End-to-end scalable architecture and deployment management across modern cloud platforms and self-hosted instances.",
      icon: Server,
      tags: ["VPS Management", "Vercel", "Render", "Supabase", "PostgreSQL", "Nginx", "CI/CD", "Resend", "Brevo"],
      theme: {
        primary: "group-hover:text-blue-500",
        bg: "bg-blue-500/10",
        border: "hover:border-blue-500/50",
        icon: "text-blue-500"
      }
    },
    {
      id: "e-commerce",
      title: "E-Commerce & WordPress Development",
      description: "Building blazing-fast online stores and robust CMS solutions tailored for conversions and high performance.",
      icon: ShoppingCart,
      tags: ["WordPress", "WooCommerce", "Shopify", "CMS Setup", "Theme Customization"],
      theme: {
        primary: "group-hover:text-amber-500",
        bg: "bg-amber-500/10",
        border: "hover:border-amber-500/50",
        icon: "text-amber-500"
      }
    }
  ];

  return (
    <>
      <SEO title="Services" description="Explore custom software development and AI integration services by Hamza Latif." />
      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h1 className="text-foreground text-4xl sm:text-5xl font-bold tracking-tight">Services & Offerings</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether creating scalable MVPs from scratch using advanced AI tools or deploying robust infrastructure, I deliver impactful technical solutions.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group p-8 bg-card border border-border rounded-xl transition-all duration-200 ${service.theme.border} hover:shadow-lg`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${service.theme.bg}`}>
                        <Icon className={`w-7 h-7 ${service.theme.icon}`} />
                      </div>
                    </div>

                    <h3 className={`text-2xl font-semibold mb-4 transition-colors duration-200 ${service.theme.primary} text-foreground`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-background text-sm text-muted-foreground rounded-full border border-border group-hover:border-border/80 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-16 pt-16 border-t border-border border-dashed text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Need a custom technical solution?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how my expertise can streamline your operations, scale your infrastructure, or implement intelligent features in your platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground rounded-lg border border-border hover:border-primary/50 transition-colors duration-200 font-medium"
                >
                  View My Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
