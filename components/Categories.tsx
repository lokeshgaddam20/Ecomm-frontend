import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

const categories = [
  { id: 1, name: 'Electronics', link: '/category/electronics' },
  { id: 2, name: 'Fashion', link: '/category/fashion' },
  { id: 3, name: 'Home Decor', link: '/category/home-decor' },
  { id: 4, name: 'Books', link: '/category/books' },
]

export function Categories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={category.link} passHref>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-center">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* You can add category images or icons here */}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

