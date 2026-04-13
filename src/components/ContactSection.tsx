import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  // TODO: Replace with your actual email
  const email = "hello@example.com";

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-2">Contact</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">
            Let's <span className="heading-gradient">connect</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8"
        >
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-lg">
            <Instagram size={22} className="text-primary" />
            <span>Instagram</span>
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-lg">
            <Mail size={22} className="text-primary" />
            <span>Gmail</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
