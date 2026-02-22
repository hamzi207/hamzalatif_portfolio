import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SEO } from "../components/SEO";

export function AICompassCaseStudy() {
  const steps = [
    {
      id: 1,
      title: "Maturity Interview",
      description: "Interactive Assessment (Structured Questionnaire)"
    },
    {
      id: 2,
      title: "Company Snapshot",
      description: "Post-Assessment Organization Profile"
    },
    {
      id: 3,
      title: "Processing",
      description: "Algorithmic Analysis (Scoring) + ML Clustering (Peer Benchmarking)"
    },
    {
      id: 4,
      title: "Output",
      description: "Strategic Roadmap & Resource Allocation Plan"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <SEO title="AI Compass Case Study" description="Deep dive into AI Compass: A strategic AI maturity assessment tool built by Hamza Latif." />
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
              href="https://www.the-ai-compass.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-200 text-sm font-medium"
            >
              Visit Live Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-foreground">AI Compass</h1>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              SaaS platform evaluating AI readiness and maturity across key business dimensions.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 bg-card text-sm text-muted-foreground rounded-full border border-border">
                Maturity Assessment
              </span>
              <span className="px-3 py-1 bg-card text-sm text-muted-foreground rounded-full border border-border">
                Benchmarking
              </span>
              <span className="px-3 py-1 bg-card text-sm text-muted-foreground rounded-full border border-border">
                SME Strategy
              </span>
            </div>
          </div>

          {/* Hero Image */}
          {/* Checking */}
          <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-indigo-500/5">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto">
                  <img src="/assets/ai-compass-logo.svg" alt="AI Compass" className="w-12 h-12 object-contain" />
                </div>
                <p className="text-muted-foreground">AI Compass System</p>
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
                    <span className="text-6xl font-bold text-indigo-500">{step.id}</span>
                  </div>
                  <div className="w-8 h-8 bg-indigo-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 z-10">
                    <span className="text-sm font-bold text-indigo-600">{step.id}</span>
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
              className="inline-flex items-center text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
            >
              Interested in discussing this project in detail? Let's talk →
            </Link>
            <a
              href="https://www.the-ai-compass.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-500 transition-colors duration-200 font-medium"
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
