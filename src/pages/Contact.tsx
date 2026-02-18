import { motion } from "motion/react";
import { Mail, Linkedin /*, Send */ } from "lucide-react";
import { SEO } from "../components/SEO";

export function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <SEO title="Contact Me" description="Get in touch with Hamza Latif for product advisory, speaking engagements, or mentorship." />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-6 text-center">
            <h1 className="text-foreground">Let's Connect</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I'm always interested in connecting with fellow product leaders, founders building
              in the AI space, or teams looking for product guidance.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:contact@hamzalatif.com"
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors duration-200 text-center space-y-3"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-200">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-foreground">Email</h4>
              <p className="text-sm text-muted-foreground">contact@hamzalatif.com</p>
            </a>

            <a
              href="https://www.xing.com/profile/MuhammadHamza_Latif"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors duration-200 text-center space-y-3"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-primary"
                >
                  <path d="M16.35 15.5l-3.35-5.9 3.25-5.6h3.65l-4.5 7.8 4.6 8.2h-3.65z" />
                  <path d="M7.75 19.5l4-7-2.3-4h-3.3l3.2 5.6-5.1 8.9h3.5z" />
                </svg>
              </div>
              <h4 className="text-foreground">Xing</h4>
              <p className="text-sm text-muted-foreground">/MuhammadHamza_Latif</p>
            </a>

            <a
              href="https://www.linkedin.com/in/mhlatif207/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors duration-200 text-center space-y-3"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-200">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-foreground">LinkedIn</h4>
              <p className="text-sm text-muted-foreground">/in/mhlatif207/</p>
            </a>
          </div>

          {/* Contact Form - Disabled temporarily */}
          {/* <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-card border border-border rounded-lg space-y-6">
              <div className="space-y-2">
                <h3 className="text-foreground">Send a Message</h3>
                <p className="text-muted-foreground">
                  Or fill out the form below and I'll get back to you within 24-48 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm text-foreground">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-foreground">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-foreground">Subject</label>
                  <input
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-foreground">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell me more about your project or question..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          </div> */}

          {/* Additional Info */}
          <div className="text-center space-y-4 pt-8">
            <h3 className="text-foreground">Open to</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-card text-muted-foreground rounded-full border border-border">
                Product Advisory
              </span>
              <span className="px-4 py-2 bg-card text-muted-foreground rounded-full border border-border">
                Speaking Engagements
              </span>
              <span className="px-4 py-2 bg-card text-muted-foreground rounded-full border border-border">
                Mentorship
              </span>
              <span className="px-4 py-2 bg-card text-muted-foreground rounded-full border border-border">
                Collaboration
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
