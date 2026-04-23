import { motion } from "framer-motion";
import {
  Code, Database, Brain, BarChart3, Globe, GitBranch,
  Cpu, Layers, Terminal, Cloud, Figma, FileJson,
  Bot, Workflow, Server, Braces, PenTool, Sparkles,
  LineChart, Table2, Boxes, Container, Zap, Eye,
  Network, Wrench, FlaskConical, Palette, LayoutGrid, Search, Atom
} from "lucide-react";

const skills = [
  { name: "Python", icon: Code, color: "text-[hsl(210,60%,60%)]" },
  { name: "LangChain", icon: Network, color: "text-[hsl(0,70%,60%)]" },
  { name: "PyTorch", icon: Cpu, color: "text-[hsl(15,70%,55%)]" },
  { name: "HTML/CSS", icon: Globe, color: "text-[hsl(170,70%,55%)]" },
  { name: "Transformers", icon: Sparkles, color: "text-[hsl(170,70%,55%)]" },
  { name: "RNN", icon: Workflow, color: "text-[hsl(280,60%,65%)]" },
  { name: "MySQL", icon: Database, color: "text-[hsl(200,70%,55%)]" },
  { name: "GitHub Actions", icon: GitBranch, color: "text-[hsl(270,60%,65%)]" },
  { name: "Pinecone", icon: Database, color: "text-[hsl(0,65%,55%)]" },
  { name: "ChromaDB", icon: Database, color: "text-[hsl(270,60%,65%)]" },
  { name: "LangGraph", icon: Network, color: "text-[hsl(170,70%,55%)]" },
  { name: "n8n", icon: Workflow, color: "text-[hsl(15,75%,55%)]" },
  { name: "AWS Bedrock", icon: Cloud, color: "text-[hsl(35,85%,55%)]" },
  { name: "NLP", icon: Bot, color: "text-[hsl(170,70%,55%)]" },
  { name: "MLFlow", icon: Layers, color: "text-[hsl(210,70%,60%)]" },
  { name: "LangSmith", icon: Search, color: "text-[hsl(170,70%,55%)]" },
  { name: "ChatBots", icon: Bot, color: "text-[hsl(280,60%,65%)]" },
  { name: "Streamlit", icon: Zap, color: "text-[hsl(0,65%,55%)]" },
  { name: "Fine-tuning", icon: Wrench, color: "text-[hsl(25,80%,55%)]" },
  { name: "RAG", icon: Database, color: "text-[hsl(0,65%,55%)]" },
  { name: "TensorFlow", icon: Brain, color: "text-[hsl(35,85%,55%)]" },
  { name: "Scikit-Learn", icon: FlaskConical, color: "text-[hsl(200,70%,55%)]" },
  { name: "Pandas", icon: Table2, color: "text-[hsl(270,60%,65%)]" },
  { name: "Power BI", icon: BarChart3, color: "text-[hsl(45,85%,55%)]" },
  { name: "NumPy", icon: Braces, color: "text-[hsl(210,70%,60%)]" },
  { name: "Matplotlib", icon: LineChart, color: "text-[hsl(200,70%,55%)]" },
  { name: "Seaborn", icon: LineChart, color: "text-[hsl(170,70%,55%)]" },
  { name: "Plotly", icon: BarChart3, color: "text-[hsl(280,60%,65%)]" },
  { name: "Excel", icon: LayoutGrid, color: "text-[hsl(145,60%,45%)]" },
  { name: "Hugging Face", icon: Bot, color: "text-[hsl(25,80%,55%)]" },
  { name: "Figma", icon: Figma, color: "text-[hsl(280,60%,65%)]" },
  { name: "Feature Eng.", icon: PenTool, color: "text-[hsl(280,60%,65%)]" },
  { name: "Data Cleaning", icon: Eye, color: "text-[hsl(170,70%,55%)]" },
  { name: "JavaScript", icon: FileJson, color: "text-[hsl(50,85%,55%)]" },
  { name: "Docker", icon: Container, color: "text-[hsl(210,70%,60%)]" },
  { name: "AstraDB", icon: Database, color: "text-[hsl(15,75%,55%)]" },
  { name: "FastAPI", icon: Server, color: "text-[hsl(170,70%,55%)]" },
  { name: "Quantum", icon: Atom, color: "text-[hsl(190,80%,60%)]" },
  { name: "AWS", icon: Cloud, color: "text-[hsl(35,85%,55%)]" },
  { name: "Azure", icon: Cloud, color: "text-[hsl(210,80%,60%)]" },
  { name: "GCP", icon: Cloud, color: "text-[hsl(0,70%,60%)]" },
  { name: "Kubernetes", icon: Boxes, color: "text-[hsl(220,70%,60%)]" },
  { name: "Terraform", icon: Layers, color: "text-[hsl(270,70%,65%)]" },
  { name: "Lambda", icon: Zap, color: "text-[hsl(35,85%,55%)]" },
  { name: "S3", icon: Database, color: "text-[hsl(145,60%,50%)]" },
  { name: "CI/CD", icon: Workflow, color: "text-[hsl(170,70%,55%)]" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-2 text-center">Skills</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-center">
            Skills & <span className="heading-gradient">Tools</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 md:gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="card-glass rounded-xl p-4 flex flex-col items-center justify-center gap-2.5 cursor-default aspect-square"
              >
                <Icon size={28} className={skill.color} />
                <span className="text-[11px] md:text-xs text-center text-muted-foreground font-medium leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
