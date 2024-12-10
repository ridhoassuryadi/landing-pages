import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ServiceSectionProps {
  title: string
  description: string
  services: string[]
  imageSrc: string
}

export function ServiceSection({ title, description, services, imageSrc }: ServiceSectionProps) {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={200}
          className="w-full rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">{service}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white">
          Pelajari Lebih Lanjut
        </Button>
      </CardContent>
    </Card>
  )
}

