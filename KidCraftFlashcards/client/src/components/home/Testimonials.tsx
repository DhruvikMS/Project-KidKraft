import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, StarHalf } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-baloo font-bold text-3xl md:text-4xl text-dark mb-4">
            What Parents & Educators Say
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Our flashcards are loved by families and teachers across the country.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => {
            // Determine avatar background color
            const avatarColors = ["bg-primary", "bg-accent-2", "bg-accent-1"];
            const avatarColor = avatarColors[index % avatarColors.length];
            
            // Create star rating display
            const fullStars = Math.floor(testimonial.rating);
            const hasHalfStar = testimonial.rating % 1 !== 0;
            
            return (
              <motion.div 
                key={testimonial.id}
                className="bg-light rounded-xl shadow-sm p-6 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(fullStars)].map((_, i) => (
                      <Star key={i} className="fill-current" />
                    ))}
                    {hasHalfStar && <StarHalf className="fill-current" />}
                  </div>
                  <span className="ml-2 text-gray-600">{testimonial.rating.toFixed(1)}</span>
                </div>
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-nunito font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
