import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

// ✅ HOW TO ADD PROJECT IMAGES:
// 1. Place your image in src/assets/ (e.g., src/assets/project-research-agent.png)
// 2. Import it below:
//    import researchAgentImg from "@/assets/project-research-agent.png";
// 3. Set the `image` field in the project object:
//    image: researchAgentImg,

const categories = ["All Projects", "AI/ML", "Generative AI", "Agentic AI", "Web Dev", "Data Analysis"];

interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: string;
  color: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Research Agent (Agent Builder)",
    desc: "Multi-agent AI workflow for real-time research and insights.",
    tags: ["Python", "LangChain", "GPT-4"],
    category: "Agentic AI",
    color: "from-primary/20 to-primary/5",
    image: "", // Add: import img from "@/assets/your-image.png" then set image: img
  },
  {
    title: "Github Events Notifier",
    desc: "Turns GitHub events into intelligent AI-powered notifications.",
    tags: ["n8n", "Node.js", "GitHub API"],
    category: "Agentic AI",
    color: "from-blue-500/20 to-blue-500/5",
    image: "",
  },
  {
    title: "CODEVO",
    desc: "AI tool for automated code review and generation.",
    tags: ["React", "OpenAI", "TypeScript"],
    category: "Generative AI",
    color: "from-emerald-500/20 to-emerald-500/5",
    image: "",
  },
  {
    title: "Image Classifier",
    desc: "Deep learning model for multi-class image classification.",
    tags: ["Python", "TensorFlow", "CNN"],
    category: "AI/ML",
    color: "from-purple-500/20 to-purple-500/5",
    image: "",
  },
  {
    title: "Sentiment Analyzer",
    desc: "NLP-based sentiment analysis tool for social media data.",
    tags: ["Python", "NLTK", "Flask"],
    category: "AI/ML",
    color: "from-orange-500/20 to-orange-500/5",
    image: "",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack online store with cart, payments, and admin dashboard.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    category: "Web Dev",
    color: "from-cyan-500/20 to-cyan-500/5",
    image: "",
  },
  {
    title: "Sales Dashboard",
    desc: "Interactive data visualization dashboard for sales analytics.",
    tags: ["Python", "Pandas", "Plotly"],
    category: "Data Analysis",
    color: "from-rose-500/20 to-rose-500/5",
    image: "",
  },
  {
    title: "AI Content Generator",
    desc: "AI-powered tool for generating marketing copy and blog posts.",
    tags: ["React", "OpenAI", "Express"],
    category: "Generative AI",
    color: "from-amber-500/20 to-amber-500/5",
    image: "",
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("All Projects");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All Projects" ? projects : projects.filter((p) => p.category === active);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-2">Projects</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Featured <span className="heading-gradient">work</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scroll Controls */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-secondary transition-colors hidden md:flex"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-secondary transition-colors hidden md:flex"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>

          {/* Horizontal Scroll */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-glass rounded-xl overflow-hidden group min-w-[320px] md:min-w-[380px] snap-start flex-shrink-0"
              >
                <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative`}>
                  <span className="font-heading text-xl font-bold text-foreground/20 text-center px-4">{p.title}</span>
                  <span className="absolute top-3 right-3 bg-background/70 backdrop-blur-sm text-xs px-2.5 py-1 rounded-full text-muted-foreground border border-border">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-muted-foreground">
                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-1 text-sm">
                      <Github size={16} /> Code
                    </a>
                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-1 text-sm">
                      <ExternalLink size={16} /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
