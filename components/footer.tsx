'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-[#0B0F19] dark:to-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/logos/logo.png"
                  alt="Abhay Web Studio"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/logos/logo.png"
                  alt="Abhay Web Studio"
                  fill
                  className="object-contain hidden dark:block"
                />
              </div>
              <span className="font-bold text-black dark:text-white">Abhay Web Studio</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Premium web design agency creating websites that turn visitors into customers. Trusted by 100+ businesses across 50+ countries.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              est. 2024 • Abhay Web Studio Team
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="https://x.com/ithinkabhay" className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
                <Twitter size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/abhaysinghp01" className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
                <Linkedin size={20} />
              </Link>
              <Link href="https://www.instagram.com/ithinkabhay?igsh=OTIwNnZuNGh0MDZ5" className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
                <Instagram size={20} />
              </Link>
              <Link href="mailto:singh.abhayparaste@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Abhay Web Studio. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#22c55e]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
