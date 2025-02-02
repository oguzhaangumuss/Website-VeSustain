import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/vercel.svg" 
                alt="VeSustain Logo" 
                width={40} 
                height={40}
              />
              <span className="text-xl font-bold text-primary-600">VeSustain</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#problem" className="text-gray-600 hover:text-primary-600">
              Problem
            </Link>
            <Link href="#solution" className="text-gray-600 hover:text-primary-600">
              Solution
            </Link>
            <Link href="#team" className="text-gray-600 hover:text-primary-600">
              Team
            </Link>
            <button className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
} 