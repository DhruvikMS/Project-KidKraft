
import { useState, useEffect } from "react";
import { Link } from "wouter";
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
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const activeProduct = PRODUCTS.find(product => product.category === activeCategory) || PRODUCTS[1];

  const getCategoryColorClass = (category: string, isActive: boolean) => {
    const colorMap: Record<string, { bg: string, text: string, activeBg: string, activeText: string, border: string }> = {
      alphabet: {
        bg: "bg-blue-100", 
        text: "text-primary",
        activeBg: "bg-primary", 
        activeText: "text-white",
        border: "border-primary"
      },
      animal: {
        bg: "bg-pink-100", 
        text: "text-pink-500",
        activeBg: "bg-pink-500", 
        activeText: "text-white",
        border: "border-pink-500"
      },
      birds: {
        bg: "bg-green-100", 
        text: "text-green-500",
        activeBg: "bg-green-500", 
        activeText: "text-white",
        border: "border-green-500"
      },
      colors: {
        bg: "bg-yellow-100", 
        text: "text-yellow-600",
        activeBg: "bg-yellow-600", 
        activeText: "text-white",
        border: "border-yellow-600"
      },
      fruit: {
        bg: "bg-red-100", 
        text: "text-red-500",
        activeBg: "bg-red-500", 
        activeText: "text-white",
        border: "border-red-500"
      },
      numbers: {
        bg: "bg-purple-100", 
        text: "text-purple-500",
        activeBg: "bg-purple-500", 
        activeText: "text-white",
        border: "border-purple-500"
      },
      vegetables: {
        bg: "bg-emerald-100", 
        text: "text-emerald-500",
        activeBg: "bg-emerald-500", 
        activeText: "text-white",
        border: "border-emerald-500"
      },
      combo: {
        bg: "bg-indigo-100", 
        text: "text-indigo-500",
        activeBg: "bg-indigo-500", 
        activeText: "text-white",
        border: "border-indigo-500"
      }
    };

    const colorClass = colorMap[category] || colorMap.alphabet;
    return isActive ? 
      `${colorClass.activeBg} ${colorClass.activeText} ${colorClass.border}` : 
      `${colorClass.bg} ${colorClass.text} hover:${colorClass.activeBg} hover:${colorClass.activeText} ${colorClass.border}`;
  };

  const getActiveTextColor = (category: string) => {
    const colorMap: Record<string, string> = {
      alphabet: "text-primary",
      animal: "text-pink-500",
      birds: "text-green-500",
      colors: "text-yellow-600",
      fruit: "text-red-500",
      numbers: "text-purple-500",
      vegetables: "text-emerald-500",
      combo: "text-indigo-500"
    };
    return colorMap[category] || colorMap.alphabet;
  };

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update();
    }
  }, [activeProduct, swiperInstance]);

  return (
    <section id="products" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-baloo font-bold text-2xl md:text-4xl text-dark mb-3">Our Flashcard Collections</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">Explore our range of educational flashcards designed to make learning fun and effective.</p>
        </div>

        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-2 md:gap-3 mb-8 md:mb-12 pb-2 md:pb-0 md:justify-center">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              className={`category-btn whitespace-nowrap border rounded-full px-4 md:px-5 py-2 text-sm md:text-base font-nunito font-semibold transition-colors flex-shrink-0 ${getCategoryColorClass(category.id, activeCategory === category.id)}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <motion.div 
            className="space-y-4 md:space-y-6 order-2 md:order-1"
            key={activeProduct.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={`font-baloo font-bold text-2xl md:text-3xl ${getActiveTextColor(activeProduct.category)}`}>
              {activeProduct.name}
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 text-base md:text-lg">{activeProduct.description}</p>
              <ul className="space-y-2 md:space-y-3">
                {activeProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm md:text-base">
                    <span className={`flex-shrink-0 ${getActiveTextColor(activeProduct.category)} mr-2`}>
                      <Check className="h-4 w-4 md:h-5 md:w-5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white font-nunito font-bold px-6 md:px-8 py-4 md:py-6 rounded-full shadow-lg transition-all transform hover:-translate-y-1 h-auto w-full md:w-auto"
                  asChild
                >
                  <a 
                    href={activeProduct.amazonLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <span className="mr-2">🛒</span> Buy Now on Amazon
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2"
            key={`visuals-${activeProduct.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Swiper
                onSwiper={setSwiperInstance}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="product-swiper"
              >
                {activeProduct.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${activeProduct.name} - Image ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}

                <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10 swiper-button-prev bg-white/80 hover:bg-white p-2 rounded-full shadow-md cursor-pointer">
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-800" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10 swiper-button-next bg-white/80 hover:bg-white p-2 rounded-full shadow-md cursor-pointer">
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gray-800" />
                </div>
              </Swiper>
            </div>

            {activeProduct.category === 'combo' && (
              <div className="p-3 md:p-4 bg-indigo-50 rounded-lg border border-indigo-100 mt-4">
                <p className="text-center text-sm md:text-base font-semibold text-indigo-700">
                  Get the complete set of all 7 flash card collections at a discounted price!
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
