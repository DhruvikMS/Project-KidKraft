
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function ComboPack() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const comboImages = [
    "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126151/background2_h1jpfm.jpg",
    "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126165/combo_11_rrscox.jpg",
    ...PRODUCTS.filter(p => p.category !== 'combo').flatMap(p => p.images.slice(0, 1))
  ];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block bg-primary/10 text-primary font-nunito font-bold px-4 py-1 rounded-full mb-4">
            SPECIAL OFFER
          </span>
          <h2 className="font-baloo font-bold text-2xl md:text-4xl text-dark mb-4">
            Complete Flashcard Collection
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">
            Get all seven flashcard sets in one comprehensive bundle!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="font-baloo font-bold text-xl md:text-2xl">The Ultimate Learning Package</h3>
              <p className="text-gray-700">This complete collection includes all seven of our educational flashcard sets:</p>

              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.filter(c => c.id !== 'combo').map((category) => {
                  const colorMap: Record<string, string> = {
                    alphabet: "bg-blue-50 text-primary border-primary/20",
                    animal: "bg-pink-50 text-pink-500 border-pink-200",
                    birds: "bg-green-50 text-green-500 border-green-200",
                    colors: "bg-yellow-50 text-yellow-600 border-yellow-200",
                    fruit: "bg-red-50 text-red-500 border-red-200",
                    numbers: "bg-purple-50 text-purple-500 border-purple-200",
                    vegetables: "bg-emerald-50 text-emerald-500 border-emerald-200"
                  };

                  return (
                    <div 
                      key={category.id} 
                      className={`rounded-lg p-2 border ${colorMap[category.id]} shadow-sm`}
                    >
                      <span className="flex items-center text-sm font-medium">
                        <Check className="h-4 w-4 mr-1 flex-shrink-0" /> {category.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <span className="block font-nunito font-bold text-dark text-lg md:text-xl mb-2">
                  Save 15% compared to buying separately!
                </span>
                <Button 
                  className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-nunito font-bold px-6 py-2 rounded-full shadow-lg transition-all h-auto"
                  asChild
                >
                  <a href="https://amzn.in/d/fR5sawp" target="_blank" rel="noopener noreferrer">
                    🛒 Buy Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg shadow-xl overflow-hidden border-2 border-indigo-100">
              <Swiper
                onSwiper={setSwiperInstance}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  prevEl: '.combo-swiper-button-prev',
                  nextEl: '.combo-swiper-button-next',
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="w-full aspect-[4/3]"
              >
                {comboImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-[4/3]">
                      <img 
                        src={image} 
                        alt={`Complete Collection - Image ${index + 1}`} 
                        className="w-full h-full object-cover" 
                        loading="eager"
                      />
                    </div>
                  </SwiperSlide>
                ))}

                <button className="absolute top-1/2 -translate-y-1/2 left-2 z-10 combo-swiper-button-prev bg-white/80 hover:bg-white p-2 rounded-full shadow-md">
                  <ChevronLeft className="h-5 w-5 text-gray-800" />
                </button>
                <button className="absolute top-1/2 -translate-y-1/2 right-2 z-10 combo-swiper-button-next bg-white/80 hover:bg-white p-2 rounded-full shadow-md">
                  <ChevronRight className="h-5 w-5 text-gray-800" />
                </button>
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
