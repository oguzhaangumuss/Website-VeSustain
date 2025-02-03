'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/Vesustain',
      icon: '𝕏'
    },
    {
      name: 'Email',
      href: 'mailto:vesustain@gmail.com',
      icon: '📧'
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-600"
          >
            © 2025 VeSustain. Creating a Sustainable Future Together.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xl">{link.icon}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 