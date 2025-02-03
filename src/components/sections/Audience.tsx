'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Audience() {
  const audiences = [
    {
      title: "Eco-Conscious Individuals",
      description: "Environmentally conscious individuals looking to make a positive impact while earning rewards.",
      icon: "👤",
      image: "/individual.png"
    },
    {
      title: "Municipalities",
      description: "Cities and local governments seeking efficient waste management solutions.",
      icon: "🏛️",
      image: "/municipality.png"
    },
    {
      title: "Eco-Friendly Businesses",
      description: "Companies committed to reducing their environmental footprint and promoting sustainability.",
      icon: "🏢",
      image: "/business.png"
    }
  ];

  return (
    <section id="audience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Who Benefits from This Platform?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-50 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={audience.image}
                  alt={audience.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-4xl mb-4">{audience.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 