import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from 'lucide-react'
import Image from "next/image"

interface ProductCardProps {
  name: string
  price: number
  unit: string
  image: string
  discount?: number
}

export function ProductCard({ name, price, unit, image, discount }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm">
      <CardContent className="p-2">
        <div className="relative mb-2">
          <Image
            src={image}
            alt={name}
            width={160}
            height={160}
            className="w-full object-cover aspect-square rounded-lg"
          />
          {discount && (
            <Badge className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5">
              -{discount}%
            </Badge>
          )}
        </div>
        <h3 className="font-medium text-sm mb-0.5 line-clamp-2">{name}</h3>
        <div className="text-xs text-gray-500 mb-1">{unit}</div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-sm">Rp {price.toLocaleString()}</div>
          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white rounded-full w-6 h-6 p-0">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

