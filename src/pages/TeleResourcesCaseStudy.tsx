import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, ExternalLink, Globe } from "lucide-react";
import { SEO } from "../components/SEO";

export function TeleResourcesCaseStudy() {
  const steps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "Requirements gathering to model a robust Corporate CMS tailored for an EV infrastructure portfolio."
    },
    {
      id: 2,
      title: "Architecture & Foundation",
      description: "WordPress core setup with high-security configurations and scalable architecture."
    },
    {
      id: 3,
      title: "Content Modeling",
      description: "Implementing completely custom post types, responsive taxonomies, and flexible block structures for diverse product catalogs."
    },
    {
      id: 4,
      title: "Deployment & Delivery",
      description: "Rapid delivery cycles and seamless content migration, achieving optimal load speeds."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <SEO title="TeleResources Case Study" description="WordPress Corporate CMS built for TeleResources Pakistan." />
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
              href="https://teleres.com.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors duration-200 text-sm font-medium"
            >
              Visit Live Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-foreground">TeleResources Pakistan (WordPress Development)</h1>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              Robust corporate CMS platform built for a telecom and EV infrastructure leader, delivering exceptional performance and content scalability.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 bg-card text-sm text-muted-foreground rounded-full border border-border">
                Corporate CMS
              </span>
              <span className="px-3 py-1 bg-card text-sm text-muted-foreground rounded-full border border-border">
                EV Infrastructure
              </span>
              <span className="px-3 py-1 bg-sky-500/10 text-sm text-sky-500 rounded-full border border-sky-500/30">
                WordPress Development
              </span>
              <span className="px-3 py-1 bg-sky-500/10 text-sm text-sky-500 rounded-full border border-sky-500/30">
                Rapid Delivery
              </span>
            </div>
          </div>

          {/* Hero Image / Icon Fallback */}
          <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-500/20 to-sky-500/5">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 bg-sky-500/20 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <Globe className="w-10 h-10 text-sky-500" />
                </div>
                <p className="text-muted-foreground">TeleResources Platform</p>
              </div>
            </div>
          </div>

          {/* System Diagram Structure */}
          <div className="space-y-8">
            <h2 className="text-foreground">Implementation Phases</h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-card border border-border rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="text-6xl font-bold text-sky-500">{step.id}</span>
                  </div>
                  <div className="w-8 h-8 bg-sky-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 z-10">
                    <span className="text-sm font-bold text-sky-600">{step.id}</span>
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
              className="inline-flex items-center text-sky-600 hover:text-sky-500 transition-colors duration-200"
            >
              Need a high-performance CMS? Let's talk →
            </Link>
            <a
              href="https://teleres.com.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sky-600 hover:text-sky-500 transition-colors duration-200 font-medium"
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
