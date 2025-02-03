'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Mission() {
  return (
    <section id="mission" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Mission Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              
              
              <motion.h2 
                className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Making recycling <br />
                <span className="text-primary-600">rewarding</span> for everyone
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're revolutionizing recycling by combining blockchain technology with everyday sustainability. Our platform makes it easy to recycle, earn rewards, and make a real impact on the environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4"
            >
              <button className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl hover:shadow-primary-500/20">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative  "
          >
            <div className="relative aspect-[4/3] rounded-l-2xl overflow-hidden shadow-xl">
              <div className="relative w-full h-full">
                <Image
                  src="/images/mission/mission.jpeg"
                  alt="Sustainable Technology"
                  fill
                  className="object-cover object-right"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary-50 rounded-full blur-2xl opacity-60" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary-50 rounded-full blur-2xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 