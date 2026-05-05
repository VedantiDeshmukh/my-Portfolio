import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Instagram, Mail, User } from "lucide-react";
import profileImg from "@/assets/profilephoto.png";


// ✅ HOW TO SET YOUR PROFILE PHOTO:
// 1. Place your photo in src/assets/ (e.g., src/assets/profile-photo.jpg)
// 2. Import it below:
//    import profileImg from "@/assets/profile-photo.jpg";
// 3. Set the variable:
//    const profilePhoto = profileImg;

const profilePhoto = profileImg;

const HeroSection = () => {

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "var(--gradient-hero)" }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6">
              Hi, I'm<br />
              <span className="heading-gradient">Vedanti Deshmukh</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Computer Science professional dedicated to Building the future with Gen AI , Agentic AI , and Quantum Computing .
            </p>

            <div className="flex items-center gap-6 mb-16">
              <a href="#contact" className="click-scale bg-primary text-primary-foreground font-heading font-medium px-8 py-3 rounded-lg hover:brightness-110 hover:shadow-[0_4px_20px_hsl(var(--primary)/0.4)] transition-all duration-300">
                Get in Touch
              </a>
              <a href="#projects" className="click-scale border border-border text-foreground font-heading font-medium px-8 py-3 rounded-lg hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_4px_20px_hsl(var(--primary)/0.1)] transition-all duration-300">
                View Work
              </a>
            </div>

            <div className="flex items-center gap-5 text-muted-foreground">
              <a href="https://github.com/VedantiDeshmukh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="click-scale hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/vedanti-deshmukh-3b97b5212" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="click-scale hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"><Linkedin size={20} /></a>
              <a href="https://x.com/VedantiDeshmuk3" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="click-scale hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/vedantideshmukh._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="click-scale hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"><Instagram size={20} /></a>
              <a href="mailto:deshmukhvedanti2002@gmail.com" aria-label="Email" className="click-scale hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"><Mail size={20} /></a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Blended glow behind photo */}
              <div className="absolute inset-0 rounded-full opacity-40 blur-2xl" style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.5), transparent 70%)" }} />
              
              {profilePhoto ? (
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <img src={profilePhoto} alt="Vedanti Deshmukh" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 rounded-full" style={{
                    background: "radial-gradient(circle, transparent 55%, hsl(var(--background)) 100%)"
                  }} />
                </div>
              ) : (
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
                  <div className="w-full h-full bg-muted/20 flex flex-col items-center justify-center gap-3">
                    <User size={48} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-heading tracking-wider uppercase">Add photo in code</span>
                  </div>
                  <div className="absolute inset-0 rounded-full pointer-events-none" style={{
                    background: "radial-gradient(circle, transparent 60%, hsl(var(--background)) 100%)"
                  }} />
                </div>
              )}
            </div>
          </motion.div>
        </div>
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
