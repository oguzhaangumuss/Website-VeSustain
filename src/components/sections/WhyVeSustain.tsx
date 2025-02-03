'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhyVeSustain() {
  const features = [
    {
      title: "Effortless Recycling",
      description: "Simplify your recycling process with our intuitive platform and mobile app.",
      image: "/images/why-vesustain/effortless.jpg"
    },
    {
      title: "Transparency and Traceability",
      description: "Track your recycling journey with blockchain technology, ensuring transparency and accountability.",
      image: "/images/why-vesustain/transparency.jpg"
    },
    {
      title: "Sustainable Rewards",
      description: "Earn valuable rewards for your responsible actions.",
      image: "/images/why-vesustain/rewards.jpg"
    }
  ];

  return (
    <section id="why-vesustain" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why VeSustain?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Innovative solutions for a sustainable future
          </p>
        </motion.div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600">
                  {feature.description}
                </p>
              </div>

              {/* Feature Image */}
              <div className="flex-1">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-white shadow-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 