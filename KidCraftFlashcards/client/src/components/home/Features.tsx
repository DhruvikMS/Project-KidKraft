import { FaPalette, FaBrain, FaMedal, FaSmileBeam } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaPalette className="text-2xl text-primary" />,
    title: "Beautifully Illustrated",
    description: "Each card features vibrant, detailed illustrations that engage children's imagination.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: <FaBrain className="text-2xl text-secondary" />,
    title: "Educational Value",
    description: "Carefully designed to support early learning skills, including recognition and memory.",
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: <FaMedal className="text-2xl text-accent-1" />,
    title: "Premium Quality",
    description: "Durable cards with rounded corners, perfect for little hands to hold and use.",
    bgColor: "bg-[#FF8A65]/10",
    iconColor: "text-[#FF8A65]"
  },
  {
    icon: <FaSmileBeam className="text-2xl text-accent-2" />,
    title: "Kid-Approved",
    description: "Tested with children to ensure they're both educational and enjoyable to use.",
    bgColor: "bg-[#9C27B0]/10",
    iconColor: "text-[#9C27B0]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Features() {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-baloo font-bold text-3xl md:text-4xl text-dark mb-4">
            Why Choose KidKraft™ Flashcards?
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Our educational flashcards are designed with both kids and parents in mind.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
              variants={itemVariants}
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-nunito font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
