import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { BackHeader } from "@/components/back-header"
import { SellerProducts } from "@/components/seller-products"

export default function ProductDetail() {
  // Sample data - in a real app this would come from an API
  const product = {
    name: "Alpukat Mentega Ready to Eat",
    price: 25000,
    description: "Alpukat mentega siap makan, fresh dari kebun. Dipetik langsung saat matang sempurna untuk menjaga kualitas dan rasa terbaik. Alpukat ini memiliki daging buah yang lembut dan creamy, cocok untuk dijadikan guacamole, ditambahkan ke dalam salad, atau dimakan langsung. Kaya akan nutrisi seperti lemak sehat, serat, vitamin K, folat, vitamin C, potassium, dan vitamin B6. Penyimpanan yang tepat dapat memperpanjang kesegaran buah hingga 3-5 hari pada suhu ruang atau 7-10 hari dalam lemari es.",
    condition: "Fresh",
    weight: "500gr",
    seller: {
      name: "Fresh Market",
      image: "/placeholder.svg",
      rating: 4.8,
      products: [
        {
          id: "1",
          name: "Jeruk Mandarin",
          price: 35000,
          image: "/placeholder.svg"
        },
        {
          id: "2",
          name: "Apel Fuji",
          price: 45000,
          image: "/placeholder.svg"
        },
        {
          id: "3",
          name: "Pisang Cavendish",
          price: 28000,
          image: "/placeholder.svg"
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <BackHeader />
      
      {/* Product Image */}
      <div className="relative w-full aspect-square mt-[52px]">
        <Image
          src="/placeholder.svg"
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="max-w-[480px] mx-auto">
        <div className="bg-white p-4 space-y-4">
          <div>
            <h1 className="text-xl font-bold mb-2">{product.name}</h1>
            <div className="text-2xl font-bold text-green-600">
              Rp {product.price.toLocaleString()}
            </div>
          </div>

          <Separator />

          {/* Product Details */}
          <div className="space-y-2">
            <h2 className="font-semibold">Detail Produk</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-600">Kondisi</div>
              <div>{product.condition}</div>
              <div className="text-gray-600">Berat</div>
              <div>{product.weight}</div>
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div className="space-y-2">
            <h2 className="font-semibold">Deskripsi</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>

          <Separator />

          {/* Seller Info */}
          <div className="flex items-center gap-3">
            <Image
              src={product.seller.image}
              alt={product.seller.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{product.seller.name}</h3>
              <div className="text-sm text-gray-600">
                Rating {product.seller.rating}
              </div>
            </div>
          </div>
        </div>

        {/* Other Products */}
        <div className="mt-4 bg-white p-4">
          <SellerProducts products={product.seller.products} />
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-[480px] mx-auto px-4 py-3 flex items-center gap-3">
          <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
            Beli di Tokopedia
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
            Beli via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}

