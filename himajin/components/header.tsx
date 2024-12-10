import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="max-w-[480px] mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
            <span className="text-lg font-bold text-green-600">SayurBox</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="mt-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300" placeholder="Cari sayur, buah, dll" />
          </div>
        </div>
      </div>
    </header>
  )
}

