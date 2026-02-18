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
                  fill="currentColor"
                  className="w-6 h-6 text-primary"
                >
                  <path d="M16.33 5.05L12.87 11.2 16.5 17.5h4.48L17.2 11.2l3.6-6.15h-4.47zM9.9 11.08l-2.7-4.75H4.6l2.7 4.75-4.13 7.3h2.6l4.13-7.3z" />
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
