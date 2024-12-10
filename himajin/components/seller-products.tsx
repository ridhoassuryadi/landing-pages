import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface SellerProductsProps {
  products: Product[]
}

export function SellerProducts({ products }: SellerProductsProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold">Other Listings by Seller</h2>
        <Button variant="link" className="text-green-600 text-xs p-0">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="border-none">
              <Image
                src={product.image}
                alt={product.name}
                width={120}
                height={120}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="p-2">
                <div className="text-sm font-medium">Rp {product.price.toLocaleString()}</div>
                <h3 className="text-xs text-gray-600 line-clamp-1">{product.name}</h3>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

