'use client'

import * as React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const carouselItems = [
  { id: 1, image: '/placeholder.svg?height=400&width=800', link: '/promo1', alt: 'Promotional Banner 1' },
  { id: 2, image: '/placeholder.svg?height=400&width=800', link: '/promo2', alt: 'Promotional Banner 2' },
  { id: 3, image: '/placeholder.svg?height=400&width=800', link: '/promo3', alt: 'Promotional Banner 3' },
]

export function Carousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-0 relative">
        <div className="relative h-[400px]">
          {carouselItems.map((item, index) => (
            <Link key={item.id} href={item.link} passHref>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                style={{
                  objectFit: 'cover',
                  opacity: index === currentIndex ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
            </Link>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

