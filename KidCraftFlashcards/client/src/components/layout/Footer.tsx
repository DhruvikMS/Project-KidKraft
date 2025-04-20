import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, CATEGORIES } from "@/lib/constants";
import { FaInstagram, FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-baloo font-bold text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
              {COMPANY_INFO.name}
            </h4>
            <p className="text-gray-300 mb-4">
              High-quality educational flashcards designed to make learning fun for children.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <FaPhoneAlt className="text-pink-400" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <MdEmail className="text-blue-400" />
              <span>{COMPANY_INFO.email}</span>
            </div>
            <div className="flex items-start space-x-2 text-gray-300">
              <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" />
              <span className="text-sm">{COMPANY_INFO.address}</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="font-nunito font-bold text-lg mb-4 text-yellow-300">Quick Links</h5>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link></li>
              <li><Link href="/#products" className="hover:text-yellow-300 transition-colors">Products</Link></li>
              <li><Link href="/#about" className="hover:text-yellow-300 transition-colors">About Us</Link></li>
              <li><Link href="/#blog" className="hover:text-yellow-300 transition-colors">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-yellow-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Product Categories */}
          <div>
            <h5 className="font-nunito font-bold text-lg mb-4 text-green-300">Our Products</h5>
            <ul className="space-y-2 text-gray-300">
              {CATEGORIES.slice(0, 6).map((category, index) => {
                const colors = ["hover:text-blue-300", "hover:text-pink-300", "hover:text-green-300", 
                               "hover:text-yellow-300", "hover:text-red-300", "hover:text-purple-300"];
                return (
                  <li key={category.id}>
                    <Link 
                      href={`/product/${category.id}`} 
                      className={`${colors[index % colors.length]} transition-colors`}
                    >
                      {category.name} Flashcards
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="/#products" className="hover:text-indigo-300 transition-colors">
                  Complete Collection
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h5 className="font-nunito font-bold text-lg mb-4 text-pink-300">Stay Updated</h5>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-r-none text-dark bg-white/90 border-0"
                aria-label="Email for newsletter"
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 rounded-l-none px-4"
              >
                <FaPaperPlane className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            Manufactured & Published by: <span className="text-yellow-300">{COMPANY_INFO.manufacturer}</span>
            <span className="block mt-2">© {new Date().getFullYear()} KidKraft. All rights reserved.</span>
          </p>
          <div className="flex space-x-4">
            <a 
              href={COMPANY_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors bg-white/10 p-2 rounded-full"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
