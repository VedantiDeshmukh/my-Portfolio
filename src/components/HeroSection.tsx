import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "var(--gradient-hero)" }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6">
            I craft digital<br />
            <span className="heading-gradient">experiences</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Full-stack developer passionate about building beautiful, performant, and accessible web applications.
          </p>

          <div className="flex items-center gap-6 mb-16">
            <a href="#contact" className="bg-primary text-primary-foreground font-heading font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Get in Touch
            </a>
            <a href="#projects" className="border border-border text-foreground font-heading font-medium px-8 py-3 rounded-lg hover:border-primary/50 transition-colors">
              View Work
            </a>
          </div>

          <div className="flex items-center gap-5 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
