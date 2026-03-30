import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-8 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © 2026 Portfolio. All rights reserved.
      </p>
      <div className="flex gap-4 text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors"><Github size={18} /></a>
        <a href="#" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
        <a href="#" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
