import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Abhay Web Studio | Get Your Website Built',
  description: 'Get in touch with Abhay Studio. Free consultation for your web design project. Response within 24 hours. 100+ businesses served.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
