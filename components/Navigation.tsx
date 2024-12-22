'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Shop All', path: '/shop' },
  { name: 'Deals', path: '/deals' },
  { name: 'Trending', path: '/trending' },
  { name: 'Contact Us', path: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <Tabs value={pathname} className="w-full">
      <TabsList className="w-full justify-start">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} passHref>
            <TabsTrigger value={item.path}>{item.name}</TabsTrigger>
          </Link>
        ))}
      </TabsList>
    </Tabs>
  )
}

