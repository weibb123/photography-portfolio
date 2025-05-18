'use client'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'

const SharedHeader: React.FC = () => {
  return (
    <header className="bg-white text-black p-4">
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-10 ml-20">
            <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
            <li><Link href="/shop" className="hover:text-gray-600">Shop</Link></li>
            <li><Link href="/about" className="hover:text-gray-600">About</Link></li>
            <li><Link href="/support" className="hover:text-gray-600">Support</Link></li>
          </ul>
        </div>
        <div className="flex items-center">
          <Link href="/cart" className="hover:text-gray-600">
            <ShoppingCart size={24} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default SharedHeader;
