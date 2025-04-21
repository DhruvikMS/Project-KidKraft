import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CATEGORIES, PRODUCTS } from "@/lib/constants";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("birds");
  const activeProduct = PRODUCTS.find(product => product.category === activeCategory) || PRODUCTS[1];

  return (
    <section id="products" className="py-8 md:py-16 bg-white w-full">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="font-baloo font-bold text-2xl md:text-4xl text-dark mb-3">Our Flashcard Collections</h2>
          <p className="text-base md:text-lg text-gray-600">Explore our range of educational flashcards designed to make learning fun and effective.</p>
        </div>

        <div className="flex overflow-x-auto gap-2 mb-6 md:mb-12 pb-2 md:justify-center">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap px-3 md:px-5 py-2 text-sm md:text-base font-semibold rounded-full border transition-colors
                ${activeCategory === category.id 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <motion.div 
            className="order-2 md:order-1 space-y-4"
            key={activeProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-baloo font-bold text-2xl md:text-3xl text-primary">
              {activeProduct.name}
            </h3>
            <p className="text-gray-700">{activeProduct.description}</p>
            <ul className="space-y-2">
              {activeProduct.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm md:text-base">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button
                className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold rounded-full h-auto py-3 px-6"
                asChild
              >
                <a 
                  href={activeProduct.amazonLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  🛒 Buy Now on Amazon
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2"
            key={`images-${activeProduct.id}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: '.custom-prev',
                  nextEl: '.custom-next',
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="w-full aspect-[4/3] max-h-[400px]"
              >
                {activeProduct.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={image} 
                      alt={`${activeProduct.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}

                <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}