'use client'

import Link from 'next/link'
import SharedHeader from './shared-header'

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <SharedHeader />

      <main className="flex flex-col md:flex-row items-center justify-center px-5 py-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I&apos;m Wei. I shoot epic <span className="underline">photos</span> and make <span className="relative">
              <span className="absolute -inset-1 bg-black rounded-full"></span>
              <span className="relative text-white px-2">fun videos</span>
            </span>
          </h1>
          <button className="border-2 border-black px-8 py-2 hover:bg-black hover:text-white transition-colors">
            Let&apos;s work
          </button>
        </div>
        
      </main>

      <footer className="mt-auto py-6 bg-gray-100">
        <div className="container mx-auto px-5 flex flex-col items-center text-center">
          <nav className="mb-4">
            <ul className="flex justify-center gap-8">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-black">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-black">Contact</Link></li>
              <li><a href="https://www.instagram.com/weiimyi/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-black">Follow</a></li>
            </ul>
          </nav>
          <p className="text-sm text-gray-600">© 2025 Wei Mai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
