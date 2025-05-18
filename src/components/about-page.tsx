'use client'

import Image from 'next/image'
import Link from 'next/link'
import SharedHeader from './shared-header'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <SharedHeader />

      <main className="flex-grow container mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold mb-8">关于我</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 space-y-6">
            <p>
              你好,我是Wei,一名热爱摄影和视频制作的专业摄影师。我的旅程始于十年前,当时我第一次拿起相机,从那时起,我就爱上了捕捉生活中美好瞬间的艺术。
            </p>
            <p>
              我专注于风景和人像摄影,但我也喜欢探索其他风格。我相信每张照片都讲述着一个独特的故事,我的目标是通过我的镜头分享这些故事。
            </p>
            <p>
              除了摄影,我还热衷于制作有趣的视频。我喜欢将静态图像的美感与动态视频的活力相结合,创造出引人入胜的视觉体验。
            </p>
            <p>
              无论是商业项目还是个人委托,我都致力于为每位客户提供高质量、富有创意的作品。如果你有任何项目想法,欢迎与我联系!
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Tristan with his camera"
              width={400}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </main>

      <footer className="py-6 bg-gray-100">
        <div className="container mx-auto px-5 flex flex-col items-center text-center">
          <nav className="mb-4">
            <ul className="flex justify-center gap-8">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-black">关于</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-black">联系</Link></li>
              <li><a href="https://www.instagram.com/weiimyi/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-black">关注</a></li>
            </ul>
          </nav>
          <p className="text-sm text-gray-600">© 2025 Wei Mai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}