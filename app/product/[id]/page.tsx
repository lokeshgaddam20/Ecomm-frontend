'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useParams } from 'next/navigation'

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
}

interface RecommendedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

// Mock function to fetch product data (replace with actual API call in a real application)
const fetchProduct = async (id: string): Promise<Product> => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 500))
  return {
    id,
    name: 'Elegant Saree',
    price: 2999,
    rating: 4.5,
    reviewCount: 120,
    description: 'This elegant saree is perfect for special occasions. Made from high-quality silk, it features intricate embroidery and a comfortable fit.',
    images: [
      '/placeholder.svg?height=600&width=600',
      '/placeholder.svg?height=600&width=600',
      '/placeholder.svg?height=600&width=600',
      '/placeholder.svg?height=600&width=600',
    ]
  }
}

// Mock function to fetch recommended products (replace with actual API call in a real application)
const fetchRecommendedProducts = async (): Promise<RecommendedProduct[]> => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 500))
  return [
    { id: '2', name: 'Silk Kurta', price: 1499, image: '/placeholder.svg?height=300&width=300' },
    { id: '3', name: 'Embroidered Lehenga', price: 3999, image: '/placeholder.svg?height=300&width=300' },
    { id: '4', name: 'Designer Blouse', price: 999, image: '/placeholder.svg?height=300&width=300' },
    { id: '5', name: 'Chiffon Dupatta', price: 599, image: '/placeholder.svg?height=300&width=300' },
  ]
}

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [recommendedProducts, setRecommendedProducts] = useState<RecommendedProduct[]>([])
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (id && typeof id === 'string') {
      fetchProduct(id).then(setProduct)
      fetchRecommendedProducts().then(setRecommendedProducts)
    }
  }, [id])

  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - left) / width * 100
    const y = (e.clientY - top) / height * 100
    setZoomPosition({ x, y })
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image preview section */}
        <div className="md:w-1/2">
          <div 
            className="relative w-full h-[600px] overflow-hidden cursor-zoom-in"
            onMouseMove={handleImageHover}
          >
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                transform: 'scale(1.5)',
              }}
            />
          </div>
          <div className="flex mt-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`w-20 h-20 relative cursor-pointer ${selectedImage === index ? 'border-2 border-primary' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <Image src={image} alt={`${product.name} ${index + 1}`} fill style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Product details section */}
        <div className="md:w-1/2">
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.reviewCount} reviews)</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">₹{product.price}</p>
          
          <div className="flex items-center mb-4">
            <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="mx-4 text-xl">{quantity}</span>
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex gap-4 mb-6">
            <Button className="flex-1">Add to Cart</Button>
            <Button className="flex-1" variant="secondary">Buy Now</Button>
          </div>
          
          <div className="border-t border-b py-4 mb-6">
            <button
              className="flex justify-between items-center w-full"
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            >
              <span className="font-semibold">Product Description</span>
              {isDescriptionExpanded ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isDescriptionExpanded && (
              <p className="mt-2 text-gray-600">{product.description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Recommended products section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recommended Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {recommendedProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <div className="relative w-full h-48 mb-2">
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 className="font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

