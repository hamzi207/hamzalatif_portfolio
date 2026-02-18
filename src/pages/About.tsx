import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award, FileText, Download, Code2, Globe, Mail, Linkedin, MapPin } from "lucide-react";
import { useState } from "react";
import { FilePreviewModal } from "../components/FilePreviewModal";
import { SEO } from "../components/SEO";

export function About() {
  const [previewFile, setPreviewFile] = useState<{ url: string, title: string, allowDownload?: boolean } | null>(null);

  const openPreview = (url: string, title: string, allowDownload: boolean = false) => {
    setPreviewFile({ url, title, allowDownload });
  };

  const closePreview = () => {
    setPreviewFile(null);
  };

  return (
    <>
      <SEO title="About Me" description="Learn more about Hamza Latif's journey, philosophy, and experience in AI Product Management." />
      <FilePreviewModal
        isOpen={!!previewFile}
        onClose={closePreview}
        fileUrl={previewFile?.url || null}
        title={previewFile?.title}
        allowDownload={previewFile?.allowDownload}
      />
      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-foreground">About Me</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI Product Manager and Product Owner with 8+ years of experience building digital and AI-enabled products. Specialized in explainable AI, ML-driven SaaS platforms, and data-informed product decision-making.
              </p>

              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
                <img
                  src="/assets/profile_image_mhl.png"
                  alt="Hamza Latif"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contact Details */}
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <a href="mailto:contact@hamzalatif.com" className="flex items-center hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@hamzalatif.com
                </a>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Berlin, Germany
                </span>
                <a href="https://www.linkedin.com/in/mhlatif207/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4 mr-2" />
                  /in/mhlatif207/
                </a>
                <a href="https://www.xing.com/profile/MuhammadHamza_Latif" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M16.33 5.05L12.87 11.2 16.5 17.5h4.48L17.2 11.2l3.6-6.15h-4.47zM7.9 11.08l-2.7-4.75H2.6l2.7 4.75-4.13 7.3h2.6l4.13-7.3z" />
                  </svg>
                  /MuhammadHamza_Latif
                </a>
                <a href="https://x.com/hklatif207" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                  /hklatif207
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => openPreview("/assets/Muhammad_Hamza_Latif_Resume.pdf", "Muhammad Hamza Latif - Resume", true)}
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View CV
                </button>
                <a
                  href="/assets/Muhammad_Hamza_Latif_Resume.pdf"
                  download="Muhammad_Hamza_Latif_Resume.pdf"
                  className="inline-flex items-center px-4 py-2 bg-card text-foreground border border-border rounded-lg hover:border-primary/50 transition-colors duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </div>


            </div>

            {/* Bio */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With a background deeply rooted in software engineering and product strategy, I realized that the hardest
                part of product management wasn't building the feature—it was deciding what to build.
              </p>
              <p>
                I created ProductLogik to solve the 'Black Box' problem of prioritization. My work focuses on stripping away the ambiguity of product roadmaps using Explainable AI. I don't just advocate for AI; I build systems that govern it.
              </p>
              <p>
                This website, hamzalatif.com, serves as my personal portfolio—a space to share my journey, professional philosophy, and selected works with the product community.
              </p>
              <p>
                Currently, I am scaling ProductLogik to help product teams move from 'feature factories' to 'decision engines'.
              </p>
            </div>

            {/* Skills & Languages Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Skills */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Code2 className="w-6 h-6 text-primary" />
                  <h3 className="text-foreground">Skills</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-card border border-border rounded-lg space-y-2">
                    <h4 className="font-medium text-foreground">AI & Data</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Machine Learning Fundamentals, ML Pipelines, Explainable AI, Model Evaluation, Data Analysis, Responsible AI
                    </p>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg space-y-2">
                    <h4 className="font-medium text-foreground">Product & Agile</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Product Ownership, Discovery, Roadmapping, Stakeholder Alignment, Scrum, Agile Delivery, Digital Transformation
                    </p>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg space-y-2">
                    <h4 className="font-medium text-foreground">Tech Stack</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Python, FastAPI, React, PostgreSQL, SQL, REST APIs, Git, Scikit-learn
                    </p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="text-foreground">Languages</h3>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-foreground font-medium">English</span>
                    <span className="text-sm text-primary">Proficient</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-foreground font-medium">German</span>
                    <span className="text-sm text-primary">Intermediate</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-foreground font-medium">Urdu</span>
                    <span className="text-sm text-primary">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Punjabi</span>
                    <span className="text-sm text-primary">Native</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-foreground">Experience</h3>
              </div>
              <div className="space-y-8 border-l-2 border-border pl-8 ml-3">

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-foreground">AI Project Manager (AI Product & Delivery Focus)</h4>
                    <span className="text-sm text-muted-foreground">09/2025 - 02/2026</span>
                  </div>
                  <p className="text-primary font-medium">neuefische GmbH</p>
                  <p className="text-muted-foreground">Berlin, Germany</p>
                  <ul className="text-muted-foreground list-disc list-inside space-y-1 text-sm">
                    <li>Built and delivered an ML-powered B2B SaaS product ("AI Compass") from discovery to deployment.</li>
                    <li>Designed a dual-engine system combining deterministic scoring with ML models (clustering, anomaly detection).</li>
                    <li>Coordinated frontend (React), backend (FastAPI), and ML workflows in Agile sprints.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-foreground">Senior Product Owner / Digital Project Lead</h4>
                    <span className="text-sm text-muted-foreground">07/2023 - 06/2025</span>
                  </div>
                  <p className="text-primary font-medium">Klarstein (Berlin Brands Group)</p>
                  <p className="text-muted-foreground">Berlin, Germany</p>
                  <ul className="text-muted-foreground list-disc list-inside space-y-1 text-sm">
                    <li>Supervised Agile delivery of large-scale e-commerce platforms and internal digital systems.</li>
                    <li>Managed strategic tool migrations: Search (FactFinder → Bloomreach), Personalization (Dynamic Yield), Consent (UserCentrics).</li>
                    <li>Oversaw development of a custom in-house CMS for marketing campaign management.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-foreground">Product Owner / Digital Project Manager</h4>
                    <span className="text-sm text-muted-foreground">11/2021 - 02/2023</span>
                  </div>
                  <p className="text-primary font-medium">Zennova Home</p>
                  <p className="text-muted-foreground">Abu Dhabi, UAE</p>
                  <ul className="text-muted-foreground list-disc list-inside space-y-1 text-sm">
                    <li>Guided ERP system development and enterprise-wide implementation.</li>
                    <li>Managed the launch of four e-commerce platforms and HRM applications.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-foreground">Product Owner / Digital Project Manager</h4>
                    <span className="text-sm text-muted-foreground">02/2017 - 10/2021</span>
                  </div>
                  <p className="text-primary font-medium">BLOOMR</p>
                  <p className="text-muted-foreground">Ra's al Khaymah, UAE</p>
                  <ul className="text-muted-foreground list-disc list-inside space-y-1 text-sm">
                    <li>Led development and redesign of an e-commerce platform.</li>
                    <li>Managed IT infrastructure and cloud migration of accounting systems.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-foreground">PHP Developer</h4>
                    <span className="text-sm text-muted-foreground">02/2016 - 01/2017</span>
                  </div>
                  <p className="text-primary font-medium">Loops & Logic</p>
                  <p className="text-muted-foreground">Lahore, Pakistan</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-foreground">IT Support</h4>
                    <span className="text-sm text-muted-foreground">06/2012 - 01/2016</span>
                  </div>
                  <p className="text-primary font-medium">Revenue Department Divisional Office</p>
                  <p className="text-muted-foreground">Sargodha, Pakistan</p>
                  <ul className="text-muted-foreground list-disc list-inside space-y-1 text-sm">
                    <li>Supported IT systems across government departments.</li>
                    <li>Maintained system stability and reporting infrastructure.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Education */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-foreground">Education</h3>
              </div>
              <div className="space-y-4 pl-9">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-foreground">Master of Information Technology</h4>
                    <span className="text-sm text-muted-foreground">2013 - 2016</span>
                  </div>
                  <p className="text-muted-foreground">University of Sargodha</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-foreground">Bachelors</h4>
                    <span className="text-sm text-muted-foreground">2011 - 2013</span>
                  </div>
                  <p className="text-muted-foreground">University of Sargodha</p>
                </div>
              </div>
            </div>

            {/* Certifications & Credentials */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-foreground">Certifications & Credentials</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-9">
                {/* Google AI Essentials */}
                <div className="group p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-200 flex sm:items-start gap-4">
                  <div className="w-16 h-16 shrink-0 bg-white rounded-md p-1 border border-border overflow-hidden">
                    <img src="/assets/google_ai_essentials_badge.png" alt="Google AI Essentials" className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Google AI Essentials</h4>
                      <p className="text-sm text-muted-foreground">Google</p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <button onClick={() => openPreview("/assets/Google_AI_Essentials.pdf", "Google AI Essentials")} className="flex items-center text-primary hover:underline cursor-pointer">
                        <FileText className="w-3 h-3 mr-1" /> Preview
                      </button>
                    </div>
                  </div>
                </div>

                {/* PSPO I */}
                <div className="group p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-200 flex sm:items-start gap-4">
                  <div className="w-16 h-16 shrink-0 bg-white rounded-md p-1 border border-border overflow-hidden">
                    <img src="/assets/PSPOI-Badge.png" alt="PSPO I" className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Professional Scrum Product Owner I</h4>
                      <p className="text-sm text-muted-foreground">Scrum.org</p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <button onClick={() => openPreview("/assets/ScrumOrg_Professional_Scrum_Product_Owner_I.pdf", "PSPO I Certification")} className="flex items-center text-primary hover:underline cursor-pointer">
                        <FileText className="w-3 h-3 mr-1" /> Preview
                      </button>
                      <a href="https://www.credly.com/users/mhlatif207" target="_blank" className="flex items-center text-muted-foreground hover:text-primary">
                        <Award className="w-3 h-3 mr-1" /> Verify
                      </a>
                    </div>
                  </div>
                </div>

                {/* PSM I */}
                <div className="group p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-200 flex sm:items-start gap-4">
                  <div className="w-16 h-16 shrink-0 bg-white rounded-md p-1 border border-border overflow-hidden">
                    <img src="/assets/PSMI-Badge.png" alt="PSM I" className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Professional Scrum Master I</h4>
                      <p className="text-sm text-muted-foreground">Scrum.org</p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <button onClick={() => openPreview("/assets/ScrumOrg_Professional_Scrum_Master_I.pdf", "PSM I Certification")} className="flex items-center text-primary hover:underline cursor-pointer">
                        <FileText className="w-3 h-3 mr-1" /> Preview
                      </button>
                      <a href="https://www.credly.com/users/mhlatif207" target="_blank" className="flex items-center text-muted-foreground hover:text-primary">
                        <Award className="w-3 h-3 mr-1" /> Verify
                      </a>
                    </div>
                  </div>
                </div>

                {/* CSPO */}
                <div className="group p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-200 flex sm:items-start gap-4">
                  <div className="w-16 h-16 shrink-0 bg-card rounded-md flex items-center justify-center border border-border">
                    <Award className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Certified Scrum Product Owner</h4>
                      <p className="text-sm text-muted-foreground">Scrum Alliance</p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <button onClick={() => openPreview("/assets/ScrumAlliance_CSPO_Certificate.pdf", "CSPO Certification")} className="flex items-center text-primary hover:underline cursor-pointer">
                        <FileText className="w-3 h-3 mr-1" /> Preview
                      </button>
                    </div>
                  </div>
                </div>

                {/* AI Product Management */}
                <div className="group p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-200 flex sm:items-start gap-4">
                  <div className="w-16 h-16 shrink-0 bg-card rounded-md flex items-center justify-center border border-border">
                    <Award className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">AI Product Management</h4>
                      <p className="text-sm text-muted-foreground">Neuefische</p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <button onClick={() => openPreview("/assets/aipm_credential_2026_neuefische.pdf", "AI Product Management")} className="flex items-center text-primary hover:underline cursor-pointer">
                        <FileText className="w-3 h-3 mr-1" /> Preview
                      </button>
                    </div>
                  </div>
                </div>



                {/* Business Analysis */}
                <div className="group p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-200 flex sm:items-start gap-4">
                  <div className="w-16 h-16 shrink-0 bg-card rounded-md flex items-center justify-center border border-border">
                    <Award className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Business Analysis & Process Management</h4>
                      <p className="text-sm text-muted-foreground">Coursera</p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <button onClick={() => openPreview("/assets/Business_Analysis_&_Process_Management.pdf", "Business Analysis Certification")} className="flex items-center text-primary hover:underline cursor-pointer">
                        <FileText className="w-3 h-3 mr-1" /> Preview
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Personal */}
            <div className="pt-8 border-t border-border space-y-6">
              <h3 className="text-foreground">Beyond Work</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not thinking about product strategy, you'll find me exploring new coffee shops,
                hiking, or reading about behavioral economics.
              </p>
            </div>
          </motion.div>
        </div >
      </div >
    </>
  );
}
