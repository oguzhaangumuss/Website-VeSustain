import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Problem() {
  const problems = [
    {
      title: "Improper Waste Disposal",
      description: "Improper disposal of plastics, glass, e-waste, and pharmaceuticals harms ecosystems.",
      icon: "🗑️"
    },
    {
      title: "Lack of Awareness",
      description: "Lack of awareness leads to environmental degradation and economic losses.",
      icon: "❗"
    },
    {
      title: "Hazardous Materials",
      description: "Hazardous materials require urgent action and proper handling procedures.",
      icon: "⚠️"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Waste Management Matters
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Earth Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="relative">
                <Image
                  src="/polluted-earth.svg"
                  alt="Polluted Earth"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  Current State
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/clean-earth.svg"
                  alt="Clean Earth"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
                  Our Goal
                </div>
              </div>
            </div>
          </motion.div>

          {/* Problems List */}
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{problem.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 