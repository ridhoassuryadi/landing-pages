import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "./product-card"

export function FlashSaleBanner() {
  const flashSaleProducts = [
    {
      name: "Fresh Organic Vegetables Bundle",
      price: 50000,
      originalPrice: 150000,
      image: "/placeholder.svg",
      discount: 70,
    },
    {
      name: "Premium Fruit Package",
      price: 75000,
      originalPrice: 250000,
      image: "/placeholder.svg",
      discount: 70,
    },
    {
      name: "Fresh Farm Eggs (30 pcs)",
      price: 45000,
      originalPrice: 150000,
      image: "/placeholder.svg",
      discount: 70,
    },
  ]

  return (
    <Card className="bg-pink-50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">Flash Sale</h2>
            <Badge className="bg-red-500 text-white">70% OFF</Badge>
          </div>
          <Button variant="link" className="text-red-500">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {flashSaleProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

