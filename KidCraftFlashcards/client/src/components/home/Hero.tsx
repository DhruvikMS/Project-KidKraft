import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      <div className="absolute inset-0 bg-opacity-20 bg-dark"></div>
      <div className="container mx-auto py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-baloo font-bold text-4xl md:text-5xl leading-tight">
              Making Learning Fun With Educational Flashcards
            </h1>
            <p className="text-lg md:text-xl">
              Help your child discover the joy of learning with our beautifully designed flashcards. Perfect for home and classroom use.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-light font-nunito font-bold px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105"
              >
                <Link href="#products">
                  Explore Products
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-nunito font-bold px-6 py-3 rounded-full transition-all transform hover:scale-105 text-white"
              >
                <Link href="#contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Stacked Flashcards Animation */}
              <motion.div
                className="absolute -top-4 -right-4 rotate-6 shadow-xl rounded-xl overflow-hidden w-11/12 h-auto bg-white"
                initial={{ rotate: 0 }}
                animate={{ rotate: 6 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img src="https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126182/fruit_flash_card_01_padxqp.jpg" alt="Fruit Flashcard" className="w-full object-cover" />
              </motion.div>
              <motion.div 
                className="absolute -top-2 -left-2 -rotate-6 shadow-xl rounded-xl overflow-hidden w-11/12 h-auto bg-white"
                initial={{ rotate: 0 }}
                animate={{ rotate: -6 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img src="https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126184/fruit_flash_card_02_s4eosi.jpg" alt="Fruit Flashcard" className="w-full object-cover" />
              </motion.div>
              <div className="relative z-10 shadow-2xl rounded-xl overflow-hidden bg-white">
                <img src="https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126151/background_5_d9ekzi.jpg" alt="KidCraft Flashcards" className="w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
