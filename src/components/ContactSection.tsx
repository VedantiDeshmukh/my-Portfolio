import { motion } from "framer-motion";
import { Mail, Instagram, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const email = "deshmukhvedanti2002@gmail.com";

  return (
    <section id="contact" className="section-padding pb-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-2">Contact</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Let's <span className="heading-gradient">connect</span>
          </h2>
          <p className="text-xl md:text-2xl font-heading font-semibold mb-2">Vedanti Deshmukh</p>
          <p className="text-base md:text-lg text-muted-foreground mb-12 select-all break-all">deshmukhvedanti2002@gmail.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 flex-wrap"
        >
          <a href={`mailto:${email}`} className="click-scale flex items-center gap-3 text-muted-foreground hover:text-primary transition-all text-lg p-2 rounded-lg hover:bg-primary/10">
            <Mail size={22} className="text-primary" />
            <span>Gmail</span>
          </a>
          <a href="https://www.instagram.com/vedantideshmukh._/" target="_blank" rel="noopener noreferrer" className="click-scale flex items-center gap-3 text-muted-foreground hover:text-primary transition-all text-lg p-2 rounded-lg hover:bg-primary/10">
            <Instagram size={22} className="text-primary" />
            <span>Instagram</span>
          </a>
          <a href="https://github.com/VedantiDeshmukh" target="_blank" rel="noopener noreferrer" className="click-scale flex items-center gap-3 text-muted-foreground hover:text-primary transition-all text-lg p-2 rounded-lg hover:bg-primary/10">
            <Github size={22} className="text-primary" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/vedanti-deshmukh-3b97b5212" target="_blank" rel="noopener noreferrer" className="click-scale flex items-center gap-3 text-muted-foreground hover:text-primary transition-all text-lg p-2 rounded-lg hover:bg-primary/10">
            <Linkedin size={22} className="text-primary" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
