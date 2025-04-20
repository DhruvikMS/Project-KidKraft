import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/#products" },
  { name: "About", href: "/#about" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-primary font-baloo font-bold text-2xl lg:text-3xl">
              KidKraft<span className="text-sm align-top">™</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="font-nunito font-semibold hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Navigation Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white w-full shadow-lg">
          <div className="container mx-auto py-2 flex flex-col space-y-3">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="font-nunito font-semibold py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
