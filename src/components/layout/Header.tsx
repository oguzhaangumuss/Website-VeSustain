'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#mission", label: "Mission" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#why-vesustain", label: "Why VeSustain" },
    { href: "#vechain-future", label: "VeChain" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-[80px] h-[45px] sm:w-[100px] sm:h-[55px]">
                <Image 
                  src="/images/app/logo.png" 
                  alt="VeSustain Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className={`text-xl sm:text-2xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                VeSustain
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`font-medium hover:text-primary-500 transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 