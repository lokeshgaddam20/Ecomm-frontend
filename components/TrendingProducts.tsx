'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useState, useEffect } from 'react'

// This is a mock function to simulate fetching products from an API
async function fetchTrendingProducts() {
  // In a real application, this would be an API call
  return [
    { id: 1, name: 'Wireless Earbuds', price: 79.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 2, name: 'Smart Watch', price: 199.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 3, name: 'Laptop', price: 999.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 4, name: 'Smartphone', price: 699.99, image: '/placeholder.svg?height=200&width=200' },
  ]
}

export function TrendingProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchTrendingProducts().then(setProducts)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="relative h-48 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            <Button>Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

