import { motion } from "framer-motion";
import { Globe, Smartphone, Server, PenTool } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom websites and web apps built with modern frameworks and best practices." },
  { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first, pixel-perfect designs that look great on every device." },
  { icon: Server, title: "Backend & APIs", desc: "Scalable server-side solutions, database design, and API development." },
  { icon: PenTool, title: "UI/UX Design", desc: "User-centered design with intuitive interfaces and seamless experiences." },
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

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-xl p-8 group hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-5 group-hover:glow-accent transition-shadow">
                <s.icon size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
