'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 4.10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero/hero6.jpg"
          alt="People recycling with mobile app"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/25" /> {/* Light overlay */}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col">
        {/* Title at top */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center pt-24 sm:pt-28"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          Revolutionize Recycling <br />
            
          </h1>
        </motion.div>

        {/* Subtitle and Button at bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-auto mb-20"
        >
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-medium mb-10">
            Turn Waste into Rewards. Recycle & Earn.
          </p>

          <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl hover:shadow-primary-500/20">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
} 