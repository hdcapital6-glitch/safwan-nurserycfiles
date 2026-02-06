import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- Playground Background Elements ---
const PlaygroundScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* Sky Gradient handled by parent section */}
      
      {/* Sun */}
      <motion.div 
        className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 rounded-full blur-md opacity-80"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full shadow-[0_0_40px_rgba(253,224,71,0.6)]" />

      {/* Moving Clouds */}
      <motion.div 
        className="absolute top-20 left-10 opacity-60"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-32 h-12 bg-white rounded-full blur-sm" />
        <div className="w-16 h-16 bg-white rounded-full -mt-8 ml-4 blur-sm" />
      </motion.div>

      {/* Swing Set (Far Background) */}
      <div className="absolute bottom-32 left-[10%] opacity-80 scale-75 md:scale-100">
        {/* Frame */}
        <div className="w-48 h-40 border-t-4 border-l-4 border-r-4 border-slate-400 rounded-t-lg relative flex justify-center gap-8">
            {/* Swing 1 */}
            <motion.div 
                className="w-1 h-32 bg-slate-300 origin-top relative"
                animate={{ rotate: [15, -15, 15] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="absolute bottom-0 -left-3 w-8 h-2 bg-red-400 rounded-full" />
            </motion.div>
            {/* Swing 2 */}
            <motion.div 
                className="w-1 h-32 bg-slate-300 origin-top relative"
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                <div className="absolute bottom-0 -left-3 w-8 h-2 bg-blue-400 rounded-full" />
            </motion.div>
        </div>
        <div className="w-full h-2 bg-slate-300 rounded-full mt-[-2px]" /> {/* Ground bar */}
      </div>

      {/* Slide / Play Structure (Far Background Right) */}
      <div className="absolute bottom-32 right-[10%] opacity-80 scale-75 md:scale-100">
         <div className="relative">
             <div className="w-4 h-40 bg-yellow-500 absolute left-0 bottom-0 rounded-t-lg"></div>
             <div className="w-32 h-40 border-b-[20px] border-red-500 rounded-br-[80px] absolute left-4 bottom-0 origin-bottom-left transform skew-x-12"></div>
             <div className="w-16 h-4 bg-yellow-600 absolute left-[-10px] top-[-10px] rounded-full"></div>
         </div>
      </div>

      {/* Trees */}
      <div className="absolute bottom-24 left-[-50px] md:left-[5%] z-0">
          <div className="w-6 h-32 bg-amber-700 mx-auto rounded-sm"></div>
          <div className="w-32 h-32 bg-green-500 rounded-full -mt-40 shadow-inner flex items-center justify-center">
             <div className="w-24 h-24 bg-green-400 rounded-full opacity-50"></div>
          </div>
      </div>
      <div className="absolute bottom-28 right-[-20px] md:right-[5%] z-0 scale-75">
          <div className="w-6 h-32 bg-amber-700 mx-auto rounded-sm"></div>
          <div className="w-32 h-32 bg-emerald-500 rounded-full -mt-40 shadow-inner"></div>
      </div>

      {/* Grassy Hills */}
      <div className="absolute bottom-0 w-[120%] -left-[10%] h-32 bg-[#4ade80] rounded-t-[50%] shadow-[inset_0_10px_20px_rgba(0,0,0,0.05)] z-0" />
      <div className="absolute bottom-[-20px] w-[120%] -right-[10%] h-24 bg-[#22c55e] rounded-t-[50%] z-0 opacity-80" />
    </div>
  );
};

// --- Reusable Nursery Kid Component ---
const NurseryKid = ({ 
  delay, 
  gender = "boy",
  hairColor = "bg-slate-800",
  skinTone = "bg-[#ffdec7]"
}: { 
  delay: number, 
  gender?: "boy" | "girl",
  hairColor?: string,
  skinTone?: string
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Arm Animation Variants (Clapping)
  const armMove = isHovered ? { rotate: gender === 'boy' ? -20 : -15, x: 5 } : { rotate: 0, x: 0 };
  const armMoveRight = isHovered ? { rotate: gender === 'boy' ? 20 : 15, x: -5 } : { rotate: 0, x: 0 };
  
  const clapTransition = { 
    repeat: isHovered ? Infinity : 0, 
    duration: 0.25, 
    repeatType: "reverse" as const
  };

  return (
    <motion.div 
      className="relative w-32 h-56 md:w-40 md:h-72 mx-[-10px] md:mx-6 flex flex-col items-center justify-end cursor-pointer z-10"
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delay, type: "spring", stiffness: 100, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -10 }}
    >
        {/* Bouncing Animation Wrapper */}
        <motion.div
            className="relative flex flex-col items-center w-full h-full justify-end"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: delay }}
        >
            
            {/* --- HEAD --- */}
            <div className={`relative z-30 w-20 h-20 md:w-24 md:h-24 ${skinTone} rounded-full shadow-md flex flex-col items-center justify-center overflow-visible`}>
                
                {/* Hair */}
                {gender === 'boy' ? (
                    <div className={`absolute -top-1 w-[105%] h-[40%] ${hairColor} rounded-t-full rounded-b-xl shadow-sm`} />
                ) : (
                    <>
                        <div className={`absolute -top-2 w-[110%] h-[60%] ${hairColor} rounded-t-full rounded-b-[2rem] shadow-sm z-10`} />
                        {/* Pigtails */}
                        <div className={`absolute top-4 -left-3 w-8 h-10 ${hairColor} rounded-full z-0`} />
                        <div className={`absolute top-4 -right-3 w-8 h-10 ${hairColor} rounded-full z-0`} />
                    </>
                )}

                {/* Face */}
                <div className="relative z-20 flex flex-col items-center mt-3">
                    {/* Eyes */}
                    <div className="flex gap-3 mb-1">
                        <motion.div 
                            className="w-2.5 h-3.5 bg-white rounded-full flex items-center justify-center overflow-hidden"
                            animate={isHovered ? { scaleY: 0.2 } : { scaleY: 1 }}
                        >
                            <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                        </motion.div>
                        <motion.div 
                            className="w-2.5 h-3.5 bg-white rounded-full flex items-center justify-center overflow-hidden"
                            animate={isHovered ? { scaleY: 0.2 } : { scaleY: 1 }}
                        >
                             <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                        </motion.div>
                    </div>
                    {/* Smile */}
                    <motion.div 
                        className="w-5 h-2.5 border-b-2 border-red-400 rounded-full"
                        animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                    />
                    {/* Blush */}
                    <div className="absolute top-4 -left-2 w-2 h-1 bg-pink-300 rounded-full opacity-50 blur-[1px]" />
                    <div className="absolute top-4 -right-2 w-2 h-1 bg-pink-300 rounded-full opacity-50 blur-[1px]" />
                </div>
            </div>

            {/* --- BODY (Uniform) --- */}
            <div className="relative z-20 -mt-2 flex flex-col items-center">
                
                {/* Neck */}
                <div className={`w-4 h-4 ${skinTone} -mb-2 z-10`} />

                {/* Shirt (White Formal) */}
                <div className="relative w-16 h-20 md:w-20 md:h-24 bg-white rounded-t-2xl rounded-b-xl shadow-sm flex justify-center overflow-visible">
                    
                    {/* Collar */}
                    <div className="absolute top-0 flex gap-0.5">
                        <div className="w-5 h-3 bg-white border-b border-slate-200 skew-y-12 origin-top-right rounded-bl-md" />
                        <div className="w-5 h-3 bg-white border-b border-slate-200 -skew-y-12 origin-top-left rounded-br-md" />
                    </div>

                    {/* Tie / Bow */}
                    <div className="relative z-10 mt-2">
                        {gender === 'boy' ? (
                            <div className="w-3 h-10 bg-red-600 rounded-b-md shadow-sm" /> 
                        ) : (
                            <div className="flex flex-col items-center -mt-1">
                                <div className="flex">
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                </div>
                                <div className="w-2 h-2 bg-red-600 rounded-full -mt-2 z-10" />
                            </div>
                        )}
                    </div>

                    {/* Pocket/Badge */}
                    <div className="absolute top-6 left-2 w-4 h-4 bg-blue-100 rounded-bl-lg rounded-br-lg border border-blue-200 flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    </div>

                    {/* Arms */}
                    <motion.div 
                        className={`absolute top-1 -left-3 w-4 h-14 ${skinTone} rounded-full origin-top shadow-sm border-t-[8px] border-white`}
                        animate={isHovered ? { rotate: 30, x: 10 } : { rotate: 5, x: 0 }}
                        transition={clapTransition}
                    />
                    <motion.div 
                        className={`absolute top-1 -right-3 w-4 h-14 ${skinTone} rounded-full origin-top shadow-sm border-t-[8px] border-white`}
                        animate={isHovered ? { rotate: -30, x: -10 } : { rotate: -5, x: 0 }}
                        transition={clapTransition}
                    />
                </div>

                {/* Pants / Skirt */}
                <div className="relative -mt-4 z-10">
                    {gender === 'boy' ? (
                        <div className="w-16 md:w-20 h-16 bg-slate-800 rounded-lg flex justify-center gap-1 pt-1">
                           <div className="w-[2px] h-full bg-slate-700 opacity-20" /> {/* Seam */}
                        </div>
                    ) : (
                        <div className="w-20 md:w-24 h-14 bg-slate-800 rounded-t-sm rounded-b-xl flex justify-center overflow-hidden">
                             {/* Pleats */}
                             <div className="w-full h-full border-l-4 border-r-4 border-slate-700 opacity-20" />
                             <div className="absolute w-[2px] h-full bg-slate-700 left-1/2 opacity-20" />
                        </div>
                    )}
                </div>

                {/* Legs */}
                <div className="flex gap-4 -mt-2">
                    {/* Leg 1 */}
                    <div className="flex flex-col items-center">
                        <div className={`w-4 h-10 ${skinTone} ${gender === 'boy' ? 'bg-slate-800 h-12 rounded-none' : ''}`} /> 
                        <div className="w-5 h-3 bg-white rounded-t-sm" /> {/* Socks */}
                        <div className="w-8 h-4 bg-black rounded-full rounded-t-md" /> {/* Shoes */}
                    </div>
                    {/* Leg 2 */}
                    <div className="flex flex-col items-center">
                        <div className={`w-4 h-10 ${skinTone} ${gender === 'boy' ? 'bg-slate-800 h-12 rounded-none' : ''}`} /> 
                        <div className="w-5 h-3 bg-white rounded-t-sm" /> {/* Socks */}
                        <div className="w-8 h-4 bg-black rounded-full rounded-t-md" /> {/* Shoes */}
                    </div>
                </div>

            </div>

        </motion.div>
        
        {/* Shadow */}
        <motion.div 
            className="w-24 h-4 bg-black rounded-[100%] blur-md opacity-20 mt-[-5px] z-0"
            animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.1, 0.2] }}
            transition={{ repeat: Infinity, duration: 2, delay: delay, ease: "easeInOut" }}
        />
    </motion.div>
  );
};

// --- Animated Word Component for Title ---
const AnimatedWord = ({ text, className, gradient = false, delay = 0 }: { text: string, className?: string, gradient?: boolean, delay?: number }) => {
  const letters = text.split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.5,
      rotate: -15,
    },
  };

  return (
    <motion.div
      className={`flex ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
            key={index}
            variants={child}
            className={`${gradient ? 'text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-teal-500' : 'text-slate-800'}`}
        >
            {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-gradient-to-b from-sky-300 via-sky-100 to-[#86efac] flex flex-col items-center justify-start pt-20 md:pt-32 text-center px-4">
      
      {/* Background Decor */}
      <PlaygroundScene />

      {/* Main Content Text */}
      <div className="relative z-30 max-w-6xl mx-auto mb-8 md:mb-12 pointer-events-none select-none">
        
        {/* Title Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-2 mb-6">
            <AnimatedWord 
                text="SAFWAN" 
                gradient={true} 
                delay={0.2} 
                className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight drop-shadow-sm filter drop-shadow-lg" 
            />
            <AnimatedWord 
                text="NURSERY" 
                delay={0.7} 
                className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight drop-shadow-sm text-slate-800" 
            />
        </div>

        {/* Subtitle */}
        <motion.div 
            className="overflow-hidden p-2"
        >
             <motion.p 
              className="text-xl md:text-3xl text-slate-700 font-semibold tracking-wide"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, type: "spring", damping: 15, stiffness: 100 }}
            >
              Fun • Music • Learning for Little Minds
            </motion.p>
        </motion.div>
      </div>

      {/* The 3 Animated Nursery Kids */}
      <div className="relative z-20 flex items-end justify-center h-auto pb-10 gap-2">
        
        {/* Kid 1: Boy, dark hair */}
        <NurseryKid 
          delay={1.5} 
          gender="boy"
          hairColor="bg-slate-800"
          skinTone="bg-[#f0c3a5]"
        />

        {/* Kid 2: Girl, black hair (Center) */}
        <motion.div className="relative z-30 mb-2 scale-105">
            <NurseryKid 
              delay={1.7} 
              gender="girl"
              hairColor="bg-black"
              skinTone="bg-[#ffdec7]"
            />
        </motion.div>

        {/* Kid 3: Boy, light hair */}
        <NurseryKid 
          delay={1.9} 
          gender="boy"
          hairColor="bg-yellow-600"
          skinTone="bg-[#ffdec7]"
        />

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white z-40 pointer-events-none drop-shadow-md"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 2.5 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;