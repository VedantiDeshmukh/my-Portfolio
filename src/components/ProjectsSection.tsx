import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack online store with cart, payments, and admin dashboard.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Task Management App",
    desc: "Collaborative project management tool with real-time updates.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "AI Content Generator",
    desc: "An AI-powered tool for generating marketing copy and blog posts.",
    tags: ["React", "OpenAI", "Express", "MongoDB"],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "Portfolio Template",
    desc: "A customizable developer portfolio with dark theme and animations.",
    tags: ["React", "Framer Motion", "Tailwind"],
    color: "from-purple-500/20 to-purple-500/5",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-2">Projects</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">
            Featured <span className="heading-gradient">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-xl overflow-hidden group"
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <span className="font-heading text-2xl font-bold text-foreground/30">{p.title}</span>
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
    </section>
  );
};

export default ProjectsSection;
