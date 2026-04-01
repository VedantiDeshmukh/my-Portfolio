import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Camera } from "lucide-react";
import { useState, useRef } from "react";

const HeroSection = () => {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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

          {/* Profile Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 cursor-pointer group"
            >
              {/* Blended glow behind photo */}
              <div className="absolute inset-0 rounded-full opacity-40 blur-2xl" style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.5), transparent 70%)" }} />
              
              {profilePhoto ? (
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <img src={profilePhoto} alt="Vedanti Deshmukh" className="w-full h-full object-cover" />
                  {/* Gradient blend edges */}
                  <div className="absolute inset-0 rounded-full" style={{
                    background: "radial-gradient(circle, transparent 55%, hsl(var(--background)) 100%)"
                  }} />
                </div>
              ) : (
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
                  <div className="w-full h-full bg-muted/20 flex flex-col items-center justify-center gap-3 group-hover:bg-muted/40 transition-colors">
                    <Camera size={32} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-xs text-muted-foreground font-heading tracking-wider uppercase">Upload Photo</span>
                  </div>
                  {/* Gradient blend on empty state too */}
                  <div className="absolute inset-0 rounded-full pointer-events-none" style={{
                    background: "radial-gradient(circle, transparent 60%, hsl(var(--background)) 100%)"
                  }} />
                </div>
              )}
              {profilePhoto && (
                <div className="absolute inset-0 rounded-full bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera size={28} className="text-primary" />
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
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
