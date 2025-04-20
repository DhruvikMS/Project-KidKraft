import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

export default function Blog() {
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      "Development": "text-primary",
      "Activities": "text-secondary",
      "Parenting": "text-accent-2"
    };
    return colorMap[category] || "text-primary";
  };

  return (
    <section id="blog" className="py-16 bg-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-baloo font-bold text-3xl md:text-4xl text-dark mb-4">
            Learning Resources
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Explore our articles on childhood education and development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article 
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className={`text-xs font-semibold ${getCategoryColor(post.category)} uppercase tracking-wider`}>
                  {post.category}
                </span>
                <h3 className="font-nunito font-bold text-xl mt-2 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`} className="text-primary font-semibold hover:underline flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        

      </div>
    </section>
  );
}
