'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Solution() {
  const solutions = [
    {
      icon: "📱",
      title: "Mobile App",
      description: "Upload waste photos, categorize (plastic, glass, etc.), and earn VeBetter tokens upon approval."
    },
    {
      icon: "✅",
      title: "Validator System",
      description: "Users review others' submissions for extra rewards."
    },
    {
      icon: "⚠️",
      title: "Hazardous Waste",
      description: "Special categories for e-waste, batteries, and medications."
    },
    {
      icon: "🌱",
      title: "NFT Community",
      description: "Join NFT VeSustain to engage with eco-conscious members."
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
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How We Make Recycling Rewarding
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className="bg-secondary-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* App Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Your Recycling Journey
              </h3>
              <p className="text-gray-600 mb-6">
                Download our app and join thousands of eco-conscious individuals making 
                a difference while earning rewards.
              </p>
              <button className="bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors">
                Get Started Now
              </button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/app-mockup.jpg"
                alt="VeSustain App Interface"
                fill
                className="object-contain rounded-xl"
                priority
              />
              {/* Overlay gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-50/80 to-transparent rounded-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 