import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Brain } from "lucide-react";
import { SEO } from "../../components/SEO";

export function ProductLogikCaseStudy() {
  const steps = [
    {
      id: 1,
      title: "Input",
      description: "User Feedback Ingestion (CSV Upload)"
    },
    {
      id: 2,
      title: "Processing",
      description: "AI Theme Extraction + Sentiment Analysis"
    },
    {
      id: 3,
      title: "Detection",
      description: "Agile Anti-Pattern Recognition (e.g. 'Feature Factory')"
    },
    {
      id: 4,
      title: "Output",
      description: "Actionable Insights Dashboard & Risk Alerts"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <SEO title="ProductLogik Case Study" description="How ProductLogik uses AI to detect agile anti-patterns and analyze user feedback." />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Back Link */}
          <Link
            to="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-foreground">ProductLogik</h1>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              AI-Powered Product Feedback Analysis & Agile Anti-Pattern Detection.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 bg-card text-sm text-muted-foreground rounded-full border border-border">
                Feedback Analysis
              </span>
              <span className="px-3 py-1 bg-card text-sm text-muted-foreground rounded-full border border-border">
                Anti-Pattern Detection
              </span>
              <span className="px-3 py-1 bg-card text-sm text-muted-foreground rounded-full border border-border">
                Agile
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-emerald-500/5">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto">
                  <img src="/assets/productlogik-logo.svg" alt="ProductLogik" className="w-12 h-12 object-contain" />
                </div>
                <p className="text-muted-foreground">ProductLogik Platform</p>
              </div>
            </div>
          </div>

          {/* System Diagram Structure */}
          <div className="space-y-8">
            <h2 className="text-foreground">System Diagram Structure</h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-card border border-border rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="text-6xl font-bold text-emerald-500">{step.id}</span>
                  </div>
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 z-10">
                    <span className="text-sm font-bold text-emerald-600">{step.id}</span>
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
          <div className="pt-8 border-t border-border">
            <Link
              to="/contact"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-500 transition-colors duration-200"
            >
              Interested in discussing this project in detail? Let's talk →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
