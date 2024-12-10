import { Header } from '@/components/header'
import { ServiceSection } from '@/components/service-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AquascapeServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-[480px] mx-auto px-4 py-4 space-y-6 mt-24">
        <Card className="bg-green-50 border-none overflow-hidden">
          <CardContent className="p-4">
            <h1 className="text-2xl font-bold text-green-800 mb-2">Jasa Design Aquascape dan Maintenance</h1>
            <p className="text-sm text-green-700 mb-4">Layanan dan support yang profesional untuk aquascape Anda</p>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Hubungi Kami
            </Button>
          </CardContent>
        </Card>

        <ServiceSection
          title="Jasa Installasi Aquarium Baru"
          description="Kami bisa melakukan installasi aquarium aquascape untuk ruang tamu atau kantor Anda."
          services={[
            "Design untuk Aquascape",
            "Design Paludarium",
            "Design Vivarium",
            "Design Aquarium Ikan Hias Air Tawar",
            "Green Wall"
          ]}
          imageSrc="/placeholder.svg"
        />

        <ServiceSection
          title="Jasa Redesign"
          description="Ingin memperbaharui atau mengembangkan aquarium lama Anda?"
          services={[
            "Redesign Aquascape",
            "Pembersihan dan pembenahan aquarium lama",
            "Penambahan equipment baru",
            "Konsultasi perawatan dan perancangan"
          ]}
          imageSrc="/placeholder.svg"
        />

        <ServiceSection
          title="Jasa Maintenance / Perawatan"
          description="Kami dapat membantu merawat aquarium di rumah atau kantor Anda."
          services={[
            "Pengecekan air dan trimming rutin",
            "Pembersihan filter",
            "Perawatan dan pengecekan peralatan",
            "Penggantian tanaman dan ikan bila perlu"
          ]}
          imageSrc="/placeholder.svg"
        />

        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

