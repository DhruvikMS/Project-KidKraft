import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-primary/10 text-primary font-nunito font-bold px-4 py-1 rounded-full mb-4">
              OUR STORY
            </span>
            <h2 className="font-baloo font-bold text-3xl md:text-4xl text-dark mb-6">
              About KidKraft™
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                KidKraft™ was founded by a group of educators and parents who saw the need for high-quality, engaging educational materials that children would genuinely enjoy using.
              </p>
              <p>
                Our mission is to create products that make learning fun and accessible for all children. Each of our flashcard sets is meticulously designed to be both educational and entertaining.
              </p>
              <p>
                We're proud to be a part of the Divine Brothers Group, with all our products manufactured in Gujarat, India, maintaining the highest standards of quality and safety.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="font-nunito font-bold text-xl mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href={COMPANY_INFO.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-primary rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-lg"></div>
              <div className="relative z-10 bg-white p-2 shadow-lg rounded-xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126151/background_4_rrm5ql.jpg" 
                  alt="Children learning with flashcards" 
                  className="rounded-lg w-full h-full object-cover" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
