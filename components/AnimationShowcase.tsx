import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Music, Star, Sun, Heart, CloudSun, Smile } from 'lucide-react';

const AnimationShowcase: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const icons = [
    { Icon: Music, color: "text-purple-400", bg: "bg-purple-100" },
    { Icon: Star, color: "text-yellow-400", bg: "bg-yellow-100" },
    { Icon: Sun, color: "text-orange-400", bg: "bg-orange-100" },
    { Icon: Heart, color: "text-pink-400", bg: "bg-pink-100" },
    { Icon: CloudSun, color: "text-sky-400", bg: "bg-sky-100" },
    { Icon: Smile, color: "text-green-400", bg: "bg-green-100" },
  ];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-sky-50 to-white"></div>
      
      {/* Rhythm Animation Track */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Animated Row 1 */}
        <motion.div 
          style={{ x: xLeft }}
          className="flex gap-8 md:gap-16 mb-12 md:mb-24 opacity-80"
        >
          {[...icons, ...icons].map((item, index) => (
            <div key={`row1-${index}`} className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 ${item.bg} rounded-3xl flex items-center justify-center shadow-sm`}>
               <item.Icon className={`w-12 h-12 md:w-16 md:h-16 ${item.color}`} />
            </div>
          ))}
        </motion.div>

        {/* Central Visual Storytelling Element */}
        <div className="flex justify-center items-center my-12">
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 bg-yellow-300 rounded-full flex items-center justify-center"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
                <motion.div 
                    className="absolute inset-0 border-4 border-dashed border-white rounded-full"
                    style={{ rotate }}
                />
                <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-center"
                >
                    <span className="text-6xl md:text-8xl block mb-2">👏</span>
                    <span className="text-xl font-bold text-yellow-800 opacity-70 uppercase tracking-widest">Tap & Play</span>
                </motion.div>
            </motion.div>
        </div>

        {/* Animated Row 2 */}
        <motion.div 
          style={{ x: xRight }}
          className="flex gap-8 md:gap-16 mt-12 opacity-80 justify-end"
        >
          {[...icons].reverse().concat([...icons].reverse()).map((item, index) => (
            <div key={`row2-${index}`} className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 ${item.bg} rounded-full flex items-center justify-center shadow-sm`}>
               <item.Icon className={`w-12 h-12 md:w-16 md:h-16 ${item.color}`} />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AnimationShowcase;