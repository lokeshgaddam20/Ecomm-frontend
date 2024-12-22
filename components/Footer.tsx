import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <nav className="flex flex-wrap">
              <Link href="/about" className="mr-4 hover:underline">About Us</Link>
              <Link href="/privacy" className="mr-4 hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
            </nav>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 mr-4">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 mr-4">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

