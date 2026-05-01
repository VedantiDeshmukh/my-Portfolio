import { motion } from "framer-motion";
import { BrainCircuit, BarChart3, Atom } from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    label: "Intelligent Systems",
    desc: "Architecting Generative AI and Agentic workflows for autonomous solutions.",
  },
  {
    icon: BarChart3,
    label: "Data-Driven Insights",
    desc: "Building scalable analytics to turn complex data into actionable intelligence.",
  },
  {
    icon: Atom,
    label: "Future-Ready Tech",
    desc: "Optimizing performance at the intersection of Python, Java, and Quantum Computing.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-2">About Me</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Turning ideas into<br /><span className="heading-gradient">reality</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a Computer Science & Engineering professional dedicated to building the next generation of intelligent systems. My work focuses on the intersection of Generative AI, Agentic workflows, and Data Analytics, with a deep curiosity for the future of Quantum Computing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge through blog posts and mentoring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-4"
          >
            {highlights.map((item) => (
              <div key={item.label} className="card-glass rounded-xl p-5 flex items-start gap-4">
                <div className="bg-primary/10 p-2.5 rounded-lg text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
