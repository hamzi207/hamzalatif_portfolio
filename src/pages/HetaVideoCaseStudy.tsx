import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SEO } from "../components/SEO";

export function HetaVideoCaseStudy() {
  const steps = [
    {
      id: 1,
      title: "Frontend Platform",
      description: "Next.js UI & Mobile-Optimized Player"
    },
    {
      id: 2,
      title: "Streaming Gateway",
      description: "Express-based streaming gateway built to bypass third-party restrictions and serve high-performance video."
    },
    {
      id: 3,
      title: "Data & Authentication",
      description: "Supabase PostgreSQL Schema managing users, watch histories, and deep TMDB API integrations."
    },
    {
      id: 4,
      title: "Infrastructure & DevOps",
      description: "Self-managed Hostinger KVM2 VPS with resilient NGINX reverse-proxy routing and PM2 process management."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <SEO title="HetaVideo Case Study" description="Custom Video Streaming Platform built on VPS architecture by Hamza Latif." />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="flex items-center justify-between">
            <Link
              to="/projects"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
            <a
              href="https://hetavideo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-500 transition-colors duration-200 text-sm font-medium"
            >
              Visit Live Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-foreground">HetaVideo</h1>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              High-performance video streaming gateway bypassing third-party platform restrictions via self-managed architecture.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 bg-card text-sm text-muted-foreground rounded-full border border-border">
                Video Streaming
              </span>
              <span className="px-3 py-1 bg-rose-500/10 text-sm text-rose-500 rounded-full border border-rose-500/30">
                Next.js
              </span>
              <span className="px-3 py-1 bg-rose-500/10 text-sm text-rose-500 rounded-full border border-rose-500/30">
                VPS Infrastructure
              </span>
              <span className="px-3 py-1 bg-rose-500/10 text-sm text-rose-500 rounded-full border border-rose-500/30">
                Supabase
              </span>
              <span className="px-3 py-1 bg-rose-500/10 text-sm text-rose-500 rounded-full border border-rose-500/30">
                Resend
              </span>
              <span className="px-3 py-1 bg-rose-500/10 text-sm text-rose-500 rounded-full border border-rose-500/30">
                TMDB API
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-500/20 to-rose-500/5">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 bg-rose-500/20 rounded-2xl flex items-center justify-center mx-auto">
                  <img src="/assets/hetavideo-logo.svg" alt="HetaVideo" className="w-12 h-12 object-contain" />
                </div>
                <p className="text-muted-foreground">HetaVideo Core Architecture</p>
              </div>
            </div>
          </div>

          {/* System Diagram Structure */}
          <div className="space-y-8">
            <h2 className="text-foreground">Architecture Overview</h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-card border border-border rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="text-6xl font-bold text-rose-500">{step.id}</span>
                  </div>
                  <div className="w-8 h-8 bg-rose-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 z-10">
                    <span className="text-sm font-bold text-rose-600">{step.id}</span>
                  </div>
                  <div className="space-y-2 z-10">
                    <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center text-rose-600 hover:text-rose-500 transition-colors duration-200"
            >
              Ready to scale your infrastructure? Let's talk →
            </Link>
            <a
              href="https://hetavideo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-rose-600 hover:text-rose-500 transition-colors duration-200 font-medium"
            >
              Visit Live Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
