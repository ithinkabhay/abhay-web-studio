'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setLoading(false);
  //     setSubmitted(true);
  //     setTimeout(() => {
  //       setSubmitted(false);
  //       setFormData({ name: '', email: '', phone: '', businessType: '', message: '' });
  //     }, 3000);
  //   }, 1000);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_l47mp42',
        'template_smzawoa',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          business_type: formData.businessType,
          message: formData.message,
        },
        'xTUr3yxfKHBqWNCN3' // Public Key
      );

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        message: '',
      });
    } catch (error) {
      alert("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 text-center">
        <div className="w-16 h-16 bg-[#22c55e] rounded-full flex items-center justify-center mb-6 animate-scale-in">
          <Check className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-3xl font-bold text-black dark:text-white mb-2">Thank You!</h3>
        {/* <p className="text-gray-600 dark:text-gray-400 max-w-md">
          We&apos;ve received your message. Our team will get back to you within 24 hours.
        </p> */}
        <p>
          Thanks {formData.name}, we’ll contact you within 24 hours 🚀
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="text-sm font-semibold text-black dark:text-white mb-2 block">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-lg h-12 text-black dark:text-white placeholder:text-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm font-semibold text-black dark:text-white mb-2 block">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-lg h-12 text-black dark:text-white placeholder:text-gray-400"
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-sm font-semibold text-black dark:text-white mb-2 block">
              Phone / WhatsApp
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-lg h-12 text-black dark:text-white placeholder:text-gray-400"
            />
          </div>

          {/* Business Type */}
          <div>
            <Label htmlFor="businessType" className="text-sm font-semibold text-black dark:text-white mb-2 block">
              Business Type
            </Label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg h-12 text-black dark:text-white px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
            >
              <option value="">Select your business type</option>
              <option value="restaurant">Restaurant</option>
              <option value="salon">Salon / Spa</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="professional">Professional Services</option>
              <option value="portfolio">Portfolio / Creative</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <Label htmlFor="message" className="text-sm font-semibold text-black dark:text-white mb-2 block">
            Tell us about your project
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Describe your website needs, goals, and any specific requirements..."
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-lg min-h-36 text-black dark:text-white placeholder:text-gray-400 p-4 text-sm font-medium resize-none focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold py-3 md:py-4 text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Get My Website <ArrowRight className="w-5 h-5" />
            </>
          )}
        </Button>

        <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-4">
          We respect your privacy. No spam, just a quick response about your project.
        </p>
      </form>
    </div>
  );
}
