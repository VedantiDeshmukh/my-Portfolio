import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const blogCategories = ["All", "AI/ML", "Web Dev", "DevOps", "Career"];

const posts = [
  { title: "Forget Highlighting: The “Close the Book” Rule for Mastering Hard Subjects", date: "April 15, 2026", tag: "Career", readTime: "5 min", url: "https://medium.com/@vedantideshmukh871/forget-highlighting-the-close-the-book-rule-for-mastering-hard-subjects-860b857b386e" },
  { title: "TypeScript Best Practices in 2026", date: "Feb 28, 2026", tag: "Web Dev", readTime: "8 min", url: "#" },
  { title: "The Art of Clean Code Architecture", date: "Jan 20, 2026", tag: "DevOps", readTime: "6 min", url: "#" },
  { title: "Introduction to LLMs and Prompt Engineering", date: "Mar 10, 2026", tag: "AI/ML", readTime: "7 min", url: "#" },
  { title: "Agentic AI: The Future of Automation", date: "Mar 5, 2026", tag: "AI/ML", readTime: "9 min", url: "#" },
  { title: "Navigating Your First Tech Job", date: "Feb 10, 2026", tag: "Career", readTime: "4 min", url: "#" },
];

const BlogSection = () => {
  const [active, setActive] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? posts : posts.filter((p) => p.tag === active);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-2">Blog</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Latest <span className="heading-gradient">articles</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scroll Controls */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-secondary transition-colors hidden md:flex"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-secondary transition-colors hidden md:flex"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>

          {/* Horizontal Scroll */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filtered.map((post, i) => (
              <motion.a
                key={post.title}
                href={post.url}
                target={post.url.startsWith("http") ? "_blank" : undefined}
                rel={post.url.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-glass rounded-xl p-6 group hover:border-primary/30 transition-colors block min-w-[300px] md:min-w-[360px] snap-start flex-shrink-0"
              >
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">{post.tag}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors flex items-start gap-2">
                  {post.title}
                  <ArrowUpRight size={18} className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} read</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
