import { motion } from "framer-motion";

interface Props {
  variant?: "left" | "right" | "center";
  color?: string; // hsl var name without hsl()
}

const SectionGlow = ({ variant = "left", color = "var(--primary)" }: Props) => {
  const position =
    variant === "left"
      ? "left-[-10%] top-[10%]"
      : variant === "right"
      ? "right-[-10%] top-[20%]"
      : "left-1/2 -translate-x-1/2 top-[10%]";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className={`absolute ${position} w-[420px] h-[420px] rounded-full blur-3xl`}
        style={{
          background: `radial-gradient(circle, hsl(${color} / 0.18), transparent 70%)`,
        }}
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute ${variant === "left" ? "right-[5%]" : "left-[5%]"} bottom-[10%] w-[280px] h-[280px] rounded-full blur-3xl opacity-60`}
        style={{
          background: `radial-gradient(circle, hsl(${color} / 0.08), transparent 70%)`,
        }}
      />
    </div>
  );
};

export default SectionGlow;