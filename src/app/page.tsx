'use client'

import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function Home() {
  return (
    <>
      <header className="bg-white text-black p-4">
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-10 ml-20">
              <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
              <li><Link href="/shop" className="hover:text-gray-600">Shop</Link></li>
              <li><Link href="/about" className="hover:text-gray-600">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
            </ul>
          </div>
          <div className="flex items-center">
            <Link href="/cart" className="hover:text-gray-600">
              <ShoppingCart size={24} />
            </Link>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Description and Button */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Professional Photo Editing</h1>
            <p className="text-lg text-gray-600">
              Transform your photos with professional editing services. Whether you need color correction,
              retouching, or complete photo manipulation, we'll help bring your vision to life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Professional color grading</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Portrait retouching</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Background enhancement</span>
              </div>
            </div>
            <Link 
              href="/shop/services" 
              className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              View Services
            </Link>
          </div>

          {/* Right side - Image Comparison Slider */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="/images/before-edit.jpg"
                  alt="Before editing"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="/images/after-edit.jpg"
                  alt="After editing"
                />
              }
              position={50}
              className="h-[600px] object-cover"
            />
          </div>
        </div>

        {/* Additional Examples Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">More Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-lg overflow-hidden shadow-lg">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={`/images/example-${item}-before.jpg`}
                      alt={`Example ${item} before`}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={`/images/example-${item}-after.jpg`}
                      alt={`Example ${item} after`}
                    />
                  }
                  position={50}
                  className="h-[400px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
