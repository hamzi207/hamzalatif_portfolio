import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles, Target, Zap, Brain } from "lucide-react";
import { InstagramFeed } from "./InstagramFeed";

const featuredProjects = [
  {
    id: "ai-compass",
    title: "AI Compass",
    description: "Self-service AI maturity assessment and benchmarking tool for SMEs. Converts inputs into explainable maturity scores and actionable roadmaps.",
    tags: ["Maturity Assessment", "SME", "Actionable Roadmap"],
    icon: Target,
    image: "/assets/ai-compass-logo.svg",
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
    description: "AI-powered platform that transforms user feedback into actionable insights while detecting agile anti-patterns like 'Feature Factory' behavior.",
    tags: ["Feedback Analysis", "Anti-Pattern Detection", "Agile"],
    icon: Brain,
    image: "/assets/productlogik-logo.svg",
    link: "/projects/productlogik",
    theme: {
      primary: "group-hover:text-emerald-600",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/50",
      gradient: "from-emerald-500/20 to-emerald-500/5",
      icon: "text-emerald-600"
    }
  }
];

import { SEO } from "../../components/SEO";

export function Home() {
  return (
    <div className="pt-16 relative">
      <SEO />
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1 lg:col-span-3"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card rounded-full mb-8 border border-border">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">AI Product Manager & Engineer</span>
              </div>
              <h1 className="mb-6 text-foreground text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Architecting Intelligence. <br className="hidden lg:block" />
                Defining Product Strategy.
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Hi, I'm Hamza. I bridge the gap between complex AI capabilities and strategic product execution, building tools that solve real problems.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                >
                  More About Me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-card text-foreground rounded-lg border border-border hover:border-primary/50 transition-colors duration-200 font-medium"
                >
                  View Selected Work
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 lg:col-span-2 flex justify-center lg:justify-end relative"
            >
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30 -z-10 transform translate-x-1/4 translate-y-1/4" />

              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl rotate-3 transform scale-105 border border-white/5" />
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
                  {/* Placeholder Image - Replace src with your actual image */}
                  <img
                    src="/assets/images/hero/hero_image_1.jpeg"
                    alt="Hamza Latif"
                    className="w-full h-auto object-cover"
                  />

                  {/* Optional Overlay Gradient for text readability if needed, though mostly for style here */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-32 px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground">AI Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Translating LLM capabilities into viable business models.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground">Product Governance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building frameworks for ethical and scalable AI adoption.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground">Decision Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Using data to remove bias from product roadmaps.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-foreground">Featured Work</h2>
              <Link to="/projects" className="text-primary hover:underline flex items-center">
                View All Projects <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`p-8 bg-card border border-border rounded-lg ${project.theme.border} transition-colors duration-200`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 ${project.theme.bg} rounded-lg flex items-center justify-center`}>
                      {/* @ts-ignore */}
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-8 h-8 object-contain" />
                      ) : (
                        <project.icon className={`w-6 h-6 ${project.theme.icon}`} />
                      )}
                    </div>
                  </div>

                  <h3 className={`text-xl font-semibold text-foreground mb-3 ${project.theme.primary}`}>
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-background text-xs text-muted-foreground rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramFeed />

      {/* Philosophy/About Teaser Section */}
      <section className="py-32 px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-foreground">Product Philosophy</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The best AI products don't feel like AI products. They solve real problems elegantly,
                with technology as the invisible enabler, not the headline.
              </p>
              <p>
                I believe in shipping iteratively, learning from users relentlessly, and building products
                that earn trust through reliability and clarity—not hype.
              </p>
            </div>
            <div className="pt-4">
              <Link to="/about" className="text-primary hover:underline font-medium">Read more about my background →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-foreground">Let's build something together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in connecting with fellow product leaders, founders, and teams
              working on meaningful AI products.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}