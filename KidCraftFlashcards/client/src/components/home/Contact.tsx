import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { COMPANY_INFO } from "@/lib/constants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBuilding, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

// Contact form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
        variant: "default"
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 bg-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-baloo font-bold text-3xl md:text-4xl text-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Have questions about our products? We're here to help!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8 order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-nunito font-bold text-2xl mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-nunito font-semibold mb-1">Address</h4>
                  <p className="text-gray-600">{COMPANY_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-nunito font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                </div>
                <div>
                  <h4 className="font-nunito font-semibold mb-1">Secondary Phone</h4>
                  <p className="text-gray-600">{COMPANY_INFO.secondaryPhone}</p>
                  </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-nunito font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">{COMPANY_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <FaBuilding />
                </div>
                <div>
                  <h4 className="font-nunito font-semibold mb-1">Manufacturer</h4>
                  <p className="text-gray-600">{COMPANY_INFO.manufacturer}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-nunito font-semibold mb-3">Follow Us</h4>
              <div className="flex">
                <a 
                  href={COMPANY_INFO.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8 order-1 md:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-nunito font-bold text-2xl mb-6">Send us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={5} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white font-nunito font-bold px-6 py-3 rounded-lg shadow transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
