import { motion } from "framer-motion";
import { Globe, Server, Brain, BarChart3, Sparkles, Bot, Cloud, Atom } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Web apps built with modern frameworks and best practices." },
  { icon: Server, title: "Backend & APIs", desc: "Scalable server-side solutions, database design, and API development." },
  { icon: Brain, title: "AI/ML", desc: "Machine learning models, predictive analytics, and intelligent automation solutions." },
  { icon: BarChart3, title: "Data Analytics", desc: "Data-driven insights, visualization dashboards, and business intelligence." },
  { icon: Sparkles, title: "Generative AI", desc: "LLM-powered applications, content generation, and creative AI solutions." },
  { icon: Bot, title: "Agentic AI", desc: "Autonomous AI agents, workflow automation, and multi-agent systems." },
  { icon: Cloud, title: "Cloud", desc: "Cloud architecture, deployment, and scalable infrastructure on AWS, Azure & GCP." },
  { icon: Atom, title: "Quantum Computing", desc: "Quantum algorithms and next-gen problem solving." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-2">Services</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">
            What I <span className="heading-gradient">offer</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="card-glass card-hover-glow rounded-xl p-8 group cursor-pointer"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300">
                <s.icon size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
