'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      image: "/images/how-it-works/new/identify.jpg",
      title: "Select Material",
      description: "Choose the type of recyclable material you want to process."
    },
    {
      image: "/images/how-it-works/new/verify.jpg",
      title: "Record Video",
      description: "Record a short video showing your recycling activity."
    },
    {
      image: "/images/how-it-works/new/track.jpg",
      title: "Location Analysis",
      description: "Our system analyzes your location to ensure proper recycling practices."
    },
    {
      image: "/images/how-it-works/new/enjoy.jpg",
      title: "Get Verified & Earn",
      description: "Auditors verify your submission and you earn rewards upon approval."
    }
  ];

  return (
    <section id="how-it-works" className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-5">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Simple steps to start your recycling journey. Our platform makes it easy to track your recycling efforts and earn rewards while contributing to a sustainable future.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md h-[290px] cursor-pointer"
            >
              {/* Image */}
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent 
                opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                {/* Title */}
                <h3 className="text-xl font-bold text-white text-center mb-3 
                  transform transition-all duration-500 group-hover:opacity-0 
                  group-hover:translate-y-4 drop-shadow-lg">
                  {step.title}
                </h3>

                {/* Description */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <p className="text-white text-center text-lg font-semibold leading-relaxed opacity-0 
                    transform transition-all duration-500 translate-y-4 
                    group-hover:opacity-100 group-hover:translate-y-0">
                    {step.description}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 