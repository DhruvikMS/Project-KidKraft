import { useParams, Link } from "wouter";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { FlipCard } from "@/components/ui/flip-card";
import { CATEGORIES, PRODUCTS } from "@/lib/constants";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules
import { Pagination, Navigation, Thumbs } from 'swiper/modules';

export default function ProductDetail() {
  const { category } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  
  // For this implementation, we're using the static data from constants
  // In a real implementation, we would fetch the product by category from the API
  const product = PRODUCTS.find(p => p.category === category);
  
  if (!product) {
    return (
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Button asChild>
            <Link href="/#products">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryColor = (categoryId: string) => {
    const colorMap: Record<string, string> = {
      alphabet: "text-primary",
      animal: "text-pink-500",
      birds: "text-green-500",
      colors: "text-yellow-600",
      fruit: "text-red-500",
      numbers: "text-purple-500",
      vegetables: "text-emerald-500"
    };
    
    return colorMap[categoryId] || "text-primary";
  };

  const getCategoryBgColor = (categoryId: string) => {
    const colorMap: Record<string, string> = {
      alphabet: "bg-primary",
      animal: "bg-pink-500",
      birds: "bg-green-500",
      colors: "bg-yellow-600",
      fruit: "bg-red-500",
      numbers: "bg-purple-500",
      vegetables: "bg-emerald-500"
    };
    
    return colorMap[categoryId] || "bg-primary";
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <Button 
        variant="ghost" 
        asChild 
        className="mb-8"
      >
        <Link href="/#products">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Link>
      </Button>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Product Visuals */}
        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            {/* Main swiper */}
            <div className="w-full max-w-md rounded-lg shadow-lg mb-4 overflow-hidden">
              <Swiper
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                slidesPerView={1}
                spaceBetween={0}
                navigation={{
                  prevEl: '.detail-swiper-button-prev',
                  nextEl: '.detail-swiper-button-next',
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Navigation, Pagination, Thumbs]}
                className="product-detail-swiper"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-[4/3] w-full">
                      <img 
                        src={image} 
                        alt={`${product.name} - Image ${index + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </SwiperSlide>
                ))}
                
                {/* Custom navigation buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10 detail-swiper-button-prev bg-white/80 hover:bg-white p-2 rounded-full shadow-md cursor-pointer">
                  <ChevronLeft className="h-5 w-5 text-gray-800" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10 detail-swiper-button-next bg-white/80 hover:bg-white p-2 rounded-full shadow-md cursor-pointer">
                  <ChevronRight className="h-5 w-5 text-gray-800" />
                </div>
              </Swiper>
            </div>
            
            {/* Thumbnails swiper */}
            <div className="w-full max-w-md mt-4">
              <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={10}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="product-thumbs-swiper"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-16 rounded-md overflow-hidden border border-gray-200 cursor-pointer">
                      <img 
                        src={image} 
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          
          {/* Interactive Card Example */}
          <div className="max-w-sm mx-auto border border-gray-200 rounded-lg p-6 shadow-md">
            <h4 className="font-nunito font-semibold text-center mb-4">Sample Card (Front & Back)</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-md overflow-hidden border border-gray-300">
                <div className="relative aspect-square">
                  <div className={`bg-${product.category}-100 text-xs ${getCategoryColor(product.category)} font-semibold px-2 py-1 absolute top-2 left-2 rounded-md z-10`}>
                    FRONT
                  </div>
                  <img 
                    src={product.images[0]} 
                    alt={`${product.name} - Front Card Example`}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="rounded-md overflow-hidden border border-gray-300">
                <div className={`relative aspect-square flex items-center justify-center p-2 ${getCategoryBgColor(product.category)}/10`}>
                  <div className={`bg-${product.category}-100 text-xs ${getCategoryColor(product.category)} font-semibold px-2 py-1 absolute top-2 right-2 rounded-md`}>
                    BACK
                  </div>
                  <div className="text-center">
                    <h3 className={`font-baloo font-bold text-xl text-center ${getCategoryColor(product.category)} mb-2`}>
                      {product.name.split(' ')[0]}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Educational flashcards for early childhood learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Product Information */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className={`inline-block text-sm font-medium ${getCategoryColor(product.category)} mb-2`}>
              {CATEGORIES.find(c => c.id === product.category)?.name} Flashcards
            </span>
            <h1 className={`text-3xl md:text-4xl font-bold ${getCategoryColor(product.category)}`}>
              {product.name}
            </h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg">{product.description}</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-nunito font-bold text-xl mb-4">Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className={`flex-shrink-0 ${getCategoryColor(product.category)} mr-2`}>
                    <Check className="h-5 w-5" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8">
            <p className="text-lg font-semibold mb-3">Ready to help your child learn in a fun way?</p>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white font-nunito font-bold px-8 py-6 rounded-full shadow-lg transition-all transform hover:scale-105 h-auto w-full md:w-auto"
              asChild
            >
              <a 
                href={product.amazonLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <span className="mr-2">🛒</span> Buy Now on Amazon
              </a>
            </Button>
          </div>
          
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="font-nunito font-bold text-xl mb-4">Explore Other Flashcards</h3>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.filter(c => c.id !== product.category).map((category) => (
                <Button 
                  key={category.id} 
                  variant="outline"
                  className={`border ${getCategoryColor(category.id)} hover:${getCategoryBgColor(category.id)} hover:text-white`}
                  asChild
                >
                  <Link href={`/product/${category.id}`}>
                    {category.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
