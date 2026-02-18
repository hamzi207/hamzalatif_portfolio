import { Link } from "react-router";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-bold tracking-tight text-foreground">Hamza Latif</h4>
            <p className="text-sm text-muted-foreground">
              AI Product Manager building intelligent products that solve real problems.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground">Navigation</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Projects
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                About
              </Link>
              {/* <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Blog
              </Link> */}
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mhlatif207/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="https://x.com/hklatif207"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors duration-200 group"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a
                href="https://github.com/hamzi207"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors duration-200"
              >
                <Github className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="mailto:contact@hamzalatif.com"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground">Location</h4>
            <p className="text-sm text-muted-foreground">
              Berlin, Germany
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2026 Hamza Latif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
