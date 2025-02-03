'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VechainFuture() {
  const benefits = [
    {
      title: "Track your recycling efforts",
      description: "with blockchain transparency"
    },
    {
      title: "Earn rewards",
      description: "for sustainable actions"
    },
    {
      title: "Contribute",
      description: "to a greener planet with innovative technology"
    }
  ];

  return (
    <section id="vechain-future" className="py-20 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-[0.97fr,1.03fr] gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <motion.span 
                className="text-primary-600 font-semibold text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                
              </motion.span>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Revolutionizing Recycling with <br />
                <span className="text-primary-600">Blockchain Transparency</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="text-black font-bold">VeChain's</span> blockchain technology revolutionizes recycling by ensuring transparency and trust. 
              Our platform leverages this technology to create a seamless and rewarding recycling experience.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="h-2 w-2 bg-primary-500 rounded-full mt-2.5" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      {benefit.title}
                    </span>
                    {" "}
                    <span className="text-gray-600">
                      {benefit.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[5/3] rounded-2xl overflow-hidden shadow-xl mx-auto lg:mr-8 w-[100%]"
          >
            <Image
              src="/images/vechain-future/vesustain.jpeg"
              alt="VeSustain Platform"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 