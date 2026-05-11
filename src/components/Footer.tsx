import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const MediumIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.32l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.45.45 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.529-1.487c.151-.15.151-.195.151-.424V8.972l-4.255 10.804h-.575L5.418 8.972v7.243c-.041.302.06.606.275.821l1.99 2.414v.319H2v-.319l1.99-2.414a.95.95 0 0 0 .256-.821V7.269z"/>
  </svg>
);

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
        <a href="https://medium.com/@deshmukhvedanti2002" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="click-scale hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"><MediumIcon size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
