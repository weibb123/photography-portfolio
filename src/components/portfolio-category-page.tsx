'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import SharedHeader from './shared-header'
import { storage } from '../firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

interface PortfolioCategoryPageProps {
  category: string;
}

export default function PortfolioCategoryPage({ category }: PortfolioCategoryPageProps) {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(storage, `images/${category}`)
      const imageList = await listAll(imagesRef)
      const imagePromises = imageList.items.map(async (item) => {
        const url = await getDownloadURL(item)
        return { src: url, alt: item.name }
      })
      const fetchedImages = await Promise.all(imagePromises)
      setImages(fetchedImages)
    }

    fetchImages()
  }, [category])

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <SharedHeader />

      <main className="flex-grow container mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold mb-8 capitalize">{category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="aspect-w-3 aspect-h-2">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-auto py-6 bg-gray-100">
        {/* ... footer content ... */}
      </footer>
    </div>
  )
}