import { motion } from "framer-motion";
import { Mail, Instagram, Github, Linkedin } from "lucide-react";
import SectionGlow from "./SectionGlow";

const KaggleIcon = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
  </svg>
);

const MediumIcon = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.32l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.45.45 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.529-1.487c.151-.15.151-.195.151-.424V8.972l-4.255 10.804h-.575L5.418 8.972v7.243c-.041.302.06.606.275.821l1.99 2.414v.319H2v-.319l1.99-2.414a.95.95 0 0 0 .256-.821V7.269z"/>
  </svg>
);

const ContactSection = () => {
  const email = "deshmukhvedanti2002@gmail.com";

  return (
    <section id="contact" className="section-padding pb-12 relative overflow-hidden">
      <SectionGlow variant="center" />
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
          <a href="https://medium.com/@vedantideshmukh871" target="_blank" rel="noopener noreferrer" className="click-scale flex items-center gap-3 text-muted-foreground hover:text-primary transition-all text-lg p-2 rounded-lg hover:bg-primary/10">
            <MediumIcon size={22} className="text-primary" />
            <span>Medium</span>
          </a>
          <a href="https://www.kaggle.com/vedantideshmukh" target="_blank" rel="noopener noreferrer" className="click-scale flex items-center gap-3 text-muted-foreground hover:text-primary transition-all text-lg p-2 rounded-lg hover:bg-primary/10">
            <KaggleIcon size={22} className="text-primary" />
            <span>Kaggle</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
