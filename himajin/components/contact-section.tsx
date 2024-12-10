import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-4">Hubungi Kami</h2>
        <p className="text-sm text-gray-600 mb-4">Silakan hubungi kami, showroom kami akan terbuka bagi anda</p>
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
          0811 822 500 - Deddy
        </Button>
      </CardContent>
    </Card>
  )
}

