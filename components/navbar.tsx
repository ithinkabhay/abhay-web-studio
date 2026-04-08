'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-30 h-30 md:w-30 md:h-30">
              <Image
                src="/logos/logo.png"
                alt="Abhay Studio"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/logos/logo.png"
                alt="Abhay Studio"
                fill
                className="object-contain hidden dark:block"
              />
            </div>
            <span className="text-lg font-bold text-black dark:text-white hidden sm:inline">
              Abhay Web Studio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium">
              Portfolio
            </Link>
            {/* <Link href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium">
              Pricing
            </Link> */}
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium">
              Contact
            </Link>
            <Link href="/contact">
              <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
            <Link href="#services" className="block py-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
              Services
            </Link>
            <Link href="#portfolio" className="block py-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
              Portfolio
            </Link>
            <Link href="#pricing" className="block py-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
              Contact
            </Link>
            <Link href="/contact" className="block">
              <Button className="w-full mt-4 bg-[#22c55e] hover:bg-[#16a34a] text-black font-medium">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
