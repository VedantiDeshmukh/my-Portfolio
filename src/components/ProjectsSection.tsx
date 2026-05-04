import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

// ✅ HOW TO ADD PROJECT IMAGES:
// 1. Place your image in src/assets/ (e.g., src/assets/project-research-agent.png)
// 2. Import it below:
//    import researchAgentImg from "@/assets/project-research-agent.png";
// 3. Set the `image` field in the project object:
//    image: researchAgentImg,

const categories = ["All Projects", "AI/ML", "Generative AI", "Agentic AI", "Web Dev", "Data Analysis", "Android Development", "Blockchain"];

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
    title: "LearnX AI",
    desc: "Intellegent Educational Agen for Adaptive Learning.",
    tags: ["python", "OpenAI", "LangChain", ],
    category: "Generative AI",
    color: "from-emerald-500/20 to-emerald-500/5",
    image: "",
  },
  {
    title: "PhishShield",
    desc: "AI Powered Phishing Detection System.",
    tags: ["Python", "Classifcation", "Flask"],
    category: "AI/ML",
    color: "from-purple-500/20 to-purple-500/5",
    image: "",
  },
  {
    title: "Salary Predictor",
    desc: "Employee Salary Prediction System using Machine Learning.",
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
    title: "Employee Retention Dashboard",
    desc: "HR Analytics & Employee Retention Dashboard.",
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
  {
    title: "FitTrack Mobile",
    desc: "Native Android fitness tracking app with workout plans and progress analytics.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    category: "Android Development",
    color: "from-green-500/20 to-green-500/5",
    image: "",
  },
  {
    title: "ChatNow Android",
    desc: "Real-time messaging app with push notifications and media sharing.",
    tags: ["Java", "Firebase", "Android SDK"],
    category: "Android Development",
    color: "from-teal-500/20 to-teal-500/5",
    image: "",
  },
  {
    title: "DeFi Vault",
    desc: "Decentralized finance platform for staking and yield farming on Ethereum.",
    tags: ["Solidity", "Web3.js", "React"],
    category: "Blockchain",
    color: "from-indigo-500/20 to-indigo-500/5",
    image: "",
  },
  {
    title: "NFT Marketplace",
    desc: "Mint, buy, and sell NFTs with smart contract-powered auctions.",
    tags: ["Solidity", "Hardhat", "IPFS"],
    category: "Blockchain",
    color: "from-fuchsia-500/20 to-fuchsia-500/5",
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
              className={`click-scale px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_2px_12px_hsl(var(--primary)/0.3)]"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground hover:bg-primary/5"
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
            className="click-scale absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-primary/10 hover:border-primary/30 transition-all hidden md:flex"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="click-scale absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-primary/10 hover:border-primary/30 transition-all hidden md:flex"
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
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="card-glass card-hover-glow rounded-xl overflow-hidden group min-w-[320px] md:min-w-[380px] snap-start flex-shrink-0 cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="flex flex-col items-center gap-2 transition-transform duration-500 group-hover:scale-110">
                      <ImageIcon size={32} className="text-foreground/15" />
                      <span className="font-heading text-sm font-bold text-foreground/15 text-center px-4">{p.title}</span>
                    </div>
                  )}
                  <span className="absolute top-3 right-3 bg-background/70 backdrop-blur-sm text-xs px-2.5 py-1 rounded-full text-muted-foreground border border-border">
                    {p.category}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-muted-foreground">
                    <a href="#" className="click-scale hover:text-primary transition-all flex items-center gap-1 text-sm group-hover:translate-x-0.5">
                      <Github size={16} /> Code
                    </a>
                    <a href="#" className="click-scale hover:text-primary transition-all flex items-center gap-1 text-sm group-hover:translate-x-0.5">
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
