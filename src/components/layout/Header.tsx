'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Image 
                  src="/logo.png" 
                  alt="VeSustain Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">VeSustain</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#problem" className="text-gray-100 hover:text-primary-500 font-medium text-white">
              Problem
            </Link>
            <Link href="#solution" className="text-white hover:text-primary-500 font-medium">
              Solution
            </Link>
            <Link href="#team" className="text-white hover:text-primary-500 font-medium">
              Team
            </Link>
            <button className="bg-transparent border border-white text-white px-6 py-2.5 rounded-full hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl hover:shadow-primary-500/20">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
} 