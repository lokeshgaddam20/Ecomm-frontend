"use client"

import { useState, useEffect } from 'react'
import { Carousel } from '@/components/Carousel'
import { Categories } from '@/components/Categories'
import { MainNav } from '@/components/MainNav'
import { TrendingProducts } from '@/components/TrendingProducts'
import { Footer } from '@/components/Footer'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'

export default function HomePage() {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken')
    setToken(storedToken)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="App Logo" width={40} height={40} />
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/account">
              <Button variant="ghost">Account</Button>
            </Link>
            <Link href="/orders">
              <Button variant="ghost">Orders</Button>
            </Link>
            {token ? (
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Button>
            ) : (
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
            )}
          </div>
        </div>
        <nav className="mt-4">
          <MainNav />
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4">
        <section className="mb-8">
          <Carousel />
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
          <Categories />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Trending Products</h2>
          <TrendingProducts />
        </section>
      </main>
      <Footer />
    </div>
  )
}

