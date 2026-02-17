import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The End of \"Gut Feel\" in Product Management",
    excerpt: "How Sensitivity Analysis allows PMs to stress-test roadmaps before coding.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Product Strategy",
  },
  {
    id: 2,
    title: "Why Your Roadmap Needs a Risk Heatmap",
    excerpt: "Dimensional Risk Modeling (Market/Tech/Reg/UX) to avoid cliff edges.",
    date: "Coming Soon",
    readTime: "6 min read",
    category: "Risk Management",
  },
  {
    id: 3,
    title: "Explainable AI: The Missing Link in Product Governance",
    excerpt: "Trusting the score. Using \"Glass Box\" AI to detect bias in prioritization.",
    date: "Coming Soon",
    readTime: "7 min read",
    category: "AI Governance",
  },
];

export function Blog() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-foreground">Writing</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Thoughts on AI product management, building in public, and lessons learned
              from shipping products at scale.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors duration-200 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-foreground group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="inline-flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="pt-8 text-center">
            <div className="p-8 bg-card border border-border rounded-lg space-y-4 max-w-2xl mx-auto">
              <h3 className="text-foreground">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get notified when I publish new articles about AI product management and
                building great products.
              </p>
              <div className="flex gap-3 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
