import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const posts = [
  { title: "Building Scalable React Applications", date: "Mar 15, 2026", tag: "React", readTime: "5 min" },
  { title: "TypeScript Best Practices in 2026", date: "Feb 28, 2026", tag: "TypeScript", readTime: "8 min" },
  { title: "The Art of Clean Code Architecture", date: "Jan 20, 2026", tag: "Architecture", readTime: "6 min" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-2">Blog</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">
            Latest <span className="heading-gradient">articles</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-xl p-6 group hover:border-primary/30 transition-colors block"
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
    </section>
  );
};

export default BlogSection;
