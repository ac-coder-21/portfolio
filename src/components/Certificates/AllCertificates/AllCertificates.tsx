"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CldImage } from 'next-cloudinary';

// Define types for our data
interface Certificate {
  id: string
  name: string
  imageUrl: string
  category: string
}

const categories = [
  "All",
  "Data Science Professional",
  "Data Engineering Professional",
  "Data Analyst Professional",
  "LCO",
  "Others",
]

// Sample certificates data
const certificates: Certificate[] = [
  {
    id: "1",
    name: "Certificate Name",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vJpTlsuZgT2B6iKtEj9L1CZWbXB90p.png",
    category: "Data Science Professional",
  },
  {
    id: "2",
    name: "Certificate Name",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vJpTlsuZgT2B6iKtEj9L1CZWbXB90p.png",
    category: "Data Engineering Professional",
  },
  {
    id: "3",
    name: "Certificate Name",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vJpTlsuZgT2B6iKtEj9L1CZWbXB90p.png",
    category: "Data Analyst Professional",
  },
  {
    id: "4",
    name: "Certificate Name",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vJpTlsuZgT2B6iKtEj9L1CZWbXB90p.png",
    category: "LCO",
  },
]

export default function AllCertificates() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCertificates = certificates.filter((cert) =>
    selectedCategory === "All" ? true : cert.category === selectedCategory,
  )

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-16 px-4">
      <h1 className="text-heading-large font-inter text-light-heading pt-8 pb-24 text-center text-[3rem] md:text-[4rem]">
        All Certificates
      </h1>

        <div className="flex gap-6">
          {/* Categories Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category ? "bg-gray-200 text-gray-900" : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <ScrollArea className="flex-1 h-[calc(100vh-12rem)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
              {filteredCertificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="bg-white rounded-lg shadow-sm p-4"
                >
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-900 pointer-events-none">{certificate.name}</h3>
                    <div className="relative aspect-video w-full overflow-hidden rounded-md pointer-events-none">
                      <CldImage
                        width="600"
                        height="400"
                        sizes="100vw"
                        src="Portfolio/certificates/SPRKML"
                        alt="Certificate"
                        className="object-cover"
                      />
                    </div>
                    <Button 
                      variant="default" 
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white transition-all hover:scale-[1.02]"
                    >
                      View Certificate
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

