import React from 'react';
import { motion } from 'framer-motion';

const BrandFeel: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-white flex items-center justify-center px-6">
      <motion.div 
        className="max-w-3xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-2xl md:text-4xl leading-snug font-semibold text-slate-700">
          “Safe, joyful, and educational content for kids worldwide.”
        </p>
        <div className="w-24 h-1.5 bg-yellow-300 mx-auto mt-8 rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default BrandFeel;