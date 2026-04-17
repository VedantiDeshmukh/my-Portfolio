import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-8 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © 2026 Portfolio. All rights reserved.
      </p>
      <div className="flex gap-4 text-muted-foreground">
        <a href="https://github.com/VedantiDeshmukh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="click-scale hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/vedanti-deshmukh-3b97b5212" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="click-scale hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"><Linkedin size={18} /></a>
        <a href="https://x.com/VedantiDeshmuk3" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="click-scale hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"><Twitter size={18} /></a>
        <a href="https://www.instagram.com/vedantideshmukh._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="click-scale hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"><Instagram size={18} /></a>
        <a href="mailto:deshmukhvedanti2002@gmail.com" aria-label="Email" className="click-scale hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"><Mail size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
