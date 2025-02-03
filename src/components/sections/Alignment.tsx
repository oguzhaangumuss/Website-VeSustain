'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Alignment() {
  const goals = [
    {
      icon: "🌍",
      title: "Environmental",
      description: "Increases recycling rates and reduces pollution through blockchain-verified waste management.",
      color: "from-green-500/10 to-green-500/5"
    },
    {
      icon: "👥",
      title: "Social",
      description: "Educates communities on sustainability and rewards eco-friendly actions.",
      color: "from-blue-500/10 to-blue-500/5"
    },
    {
      icon: "🔍",
      title: "Transparency",
      description: "VeChain's blockchain tracks rewards and processes, ensuring complete transparency.",
      color: "from-purple-500/10 to-purple-500/5"
    }
  ];

  return (
    <section id="alignment" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Building a Sustainable Future with VeChain
            </h2>
            
            <div className="space-y-8">
              {goals.map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-xl bg-gradient-to-br ${goal.color}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{goal.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {goal.title}
                      </h3>
                      <p className="text-gray-600">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - VeChain Logo & ESG Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8">
              <Image
                src="/vechain-logo.png"
                alt="VeChain Logo"
                width={200}
                height={200}
                className="object-contain"
              />
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <Image
                  src="/esg-badge.png"
                  alt="ESG Badge"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 -z-10" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 