import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Products from "@/components/home/Products";
import ComboPack from "@/components/home/ComboPack";
import Testimonials from "@/components/home/Testimonials";
import Blog from "@/components/home/Blog";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  // Handle anchor links for smooth scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth"
          });
        }
      }
    };

    handleHashChange();

    // Handle clicks on anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        e.preventDefault();
        setLocation(anchor.hash);
        setTimeout(handleHashChange, 0);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [setLocation]);

  return (
    <>
      <Hero />
      <Features />
      <Products />
      <ComboPack />
      <Testimonials />
      <Blog />
      <About />
      <Contact />
    </>
  );
}
