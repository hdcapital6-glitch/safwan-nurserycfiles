import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Facebook, Instagram } from 'lucide-react';

const SocialButton = ({ 
  icon: Icon, 
  label, 
  href,
  colorClass, 
  delay 
}: { 
  icon: React.ElementType, 
  label: string, 
  href: string,
  colorClass: string,
  delay: number
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <motion.div 
        className={`w-24 h-24 md:w-32 md:h-32 rounded-[2rem] ${colorClass} text-white flex items-center justify-center shadow-lg transform transition-transform`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          y: [0, -10, 0],
          boxShadow: [
            "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          ]
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 3, delay: delay },
          boxShadow: { repeat: Infinity, duration: 3, delay: delay }
        }}
      >
        <Icon className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
      </motion.div>
      <span className="font-bold text-slate-500 group-hover:text-slate-800 transition-colors text-lg">
        {label}
      </span>
    </motion.a>
  );
};

const SocialMediaHub: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-slate-800 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Watch & Play With Us
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          <SocialButton 
            icon={Youtube} 
            label="YouTube" 
            href="https://youtube.com/@safwanrhymes?feature=shared"
            colorClass="bg-red-500" 
            delay={0}
          />

          <SocialButton 
            icon={Instagram} 
            label="Instagram" 
            href="https://www.instagram.com/safwanrhymes?igsh=MTAzMnhpaXJ0NDZ4Mg=="
            colorClass="bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-600" 
            delay={0.2}
          />

          <SocialButton 
            icon={Facebook} 
            label="Facebook" 
            href="https://www.facebook.com/people/Safwan-Nursery-Official/61587882170312/?rdid=X0rFCnHHmDlz8TjA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DShn3dCqn%2F"
            colorClass="bg-blue-600" 
            delay={0.4}
          />

        </div>
      </div>
    </section>
  );
};

export default SocialMediaHub;