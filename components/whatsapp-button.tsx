'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+91 9770670564'; // Update with your actual WhatsApp number
    const message = 'Hi Abhay Studio! I need help building a high-converting website for my business.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 group animate-bounce"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-3 bg-black text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
          Chat with us
          <div className="absolute top-full right-4 w-2 h-2 bg-black rotate-45 -translate-y-1" />
        </div>
      )}
    </button>
  );
}
