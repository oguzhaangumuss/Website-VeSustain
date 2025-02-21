'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhyVeSustain() {
  const features = [
    {
      title: "Effortless Recycling, Maximum Impact",
      description: "Turn waste into rewards with our user-friendly app. Snap a video of your recycling activity, sort your recyclables, and let technology handle the rest. No more guesswork—just seamless sustainability.",
      steps: [
        "Select your recyclable material type",
        "Record a video of your recycling activity",
        "Wait for location verification and auditor approval",
        "Earn VeBetter tokens upon successful verification"
      ],
      image: "/images/why-vesustain/effortless.jpg"
    },
    {
      title: "Trust Built on Blockchain",
      description: "Every verified recycling action is securely recorded on VeChain's blockchain. Track your impact in real-time, from submission to verification to reward. Complete transparency you can trust.",
      image: "/images/why-vesustain/transparency.jpg"
    },
    {
      title: "Rewards That Keep Giving",
      description: "Earn VeBetter tokens for every verified contribution, redeemable for exclusive discounts or donations. The more you recycle and verify, the more you unlock—for your wallet and the planet.",
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
            The Future of Recycling is Here
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Earn as You Save the Planet
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Steps - Only for first feature */}
                {feature.steps && (
                  <div className="space-y-3">
                    {feature.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-semibold text-primary-600">
                            {stepIndex + 1}
                          </span>
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                )}
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