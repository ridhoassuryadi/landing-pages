import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { CategoryIcon } from "@/components/category-icon"
import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { SpecialToday } from "@/components/special-today"

export default function Home() {
  const categories = [
    { name: "Sayur", icon: "/placeholder.svg", href: "#sayur" },
    { name: "Buah", icon: "/placeholder.svg", href: "#buah" },
    { name: "Daging", icon: "/placeholder.svg", href: "#daging" },
    { name: "Ikan", icon: "/placeholder.svg", href: "#ikan" },
    { name: "Telur", icon: "/placeholder.svg", href: "#telur" },
    { name: "Bumbu", icon: "/placeholder.svg", href: "#bumbu" },
  ]

  const products = [
    { name: "Bawang Merah", price: 35000, unit: "500 gr", image: "/placeholder.svg" },
    { name: "Jeruk Mandarin", price: 29900, unit: "500 gr", image: "/placeholder.svg" },
    { name: "Tomat Cherry", price: 15000, unit: "250 gr", image: "/placeholder.svg", discount: 20 },
    { name: "Wortel", price: 8900, unit: "500 gr", image: "/placeholder.svg" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-[480px] mx-auto px-4 py-4 space-y-4 mt-24">
        {/* Banner Promo */}
        <Card className="bg-green-50 border-none overflow-hidden">
          <CardContent className="p-3">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-lg font-bold text-green-800">Transaksi Pertama Diskon 50%!</h1>
              <p className="text-sm text-green-700">Gunakan kode SAYURHEMAT</p>
              <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white text-xs">
                Belanja Sekarang
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Special Hari Ini */}
        <SpecialToday />

        {/* Kategori */}
        <div>
          <h2 className="text-base font-semibold mb-2">Kategori</h2>
          <div className="grid grid-cols-4 gap-2">
            {categories.map((category, index) => (
              <CategoryIcon key={index} {...category} />
            ))}
          </div>
        </div>

        {/* Flash Sale */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold">Flash Sale</h2>
            <Button variant="link" className="text-green-600 text-xs p-0">
              Lihat Semua
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

        {/* Produk Terlaris */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold">Produk Terlaris</h2>
            <Button variant="link" className="text-green-600 text-xs p-0">
              Lihat Semua
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

