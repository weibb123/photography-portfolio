'use client'

import Link from 'next/link'
import { Instagram, Mail, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { FaTiktok } from 'react-icons/fa'

const SharedHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Wei Photography
        </Link>
        <ul className="hidden md:flex space-x-4">
          <li className="relative group">
            <button className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
              Portfolio <ChevronDown className="ml-1" />
            </button>
            {isOpen && (
              <ul className="absolute left-0 mt-2 space-y-2 bg-white border rounded shadow-md">
                <li><Link href="/portfolio/landscapes" className="block px-4 py-2 hover:bg-gray-100">Landscapes</Link></li>
                <li><Link href="/portfolio/portraits" className="block px-4 py-2 hover:bg-gray-100">Portraits</Link></li>
                <li><Link href="/portfolio/travels" className="block px-4 py-2 hover:bg-gray-100">Travel</Link></li>
              </ul>
            )}
          </li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/weiimyi/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Instagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@weiimyi" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FaTiktok size={20} />
          </a>
          <Link href="/contact" className="flex items-center">
            <Mail size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default SharedHeader;
