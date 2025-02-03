'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Team() {
  const teamMembers = [
    {
      name: "Yavuzhan Gümüş",
      role: "NFT Project Lead",
      description: "Sustainability-focused manager with expertise in blockchain technology.",
      image: "/team/yavuzhan.png"
    }
  ];

  const contactLinks = [
    {
      icon: "📧",
      label: "Email",
      value: "vesustain@gmail.com",
      href: "mailto:vesustain@gmail.com"
    },
    {
      icon: "𝕏",
      label: "Twitter",
      value: "@Vesustain",
      href: "https://twitter.com/Vesustain"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Meet the Team
          </h2>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Team Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="bg-secondary-50 rounded-xl p-6 flex items-start gap-6"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-secondary-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Team Includes
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Blockchain Developers</li>
                <li>• UX/UI Designers</li>
                <li>• Environmental Engineers</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              {contactLinks.map((contact) => (
                <Link
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow"
                >
                  <span className="text-2xl">{contact.icon}</span>
                  <div>
                    <p className="text-sm text-gray-600">{contact.label}</p>
                    <p className="text-lg font-medium text-gray-900">
                      {contact.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/50 rounded-lg">
              <p className="text-gray-600 text-sm">
                Note: GitHub link will be added soon.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 