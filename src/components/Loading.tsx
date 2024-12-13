import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function TechpackLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-radial">
      <header className="flex justify-between items-center py-4 px-6 bg-white">
        <div className="flex items-center">
          <Image src="/placeholder.svg?height=32&width=32" alt="techpack.ai" width={32} height={32} className="text-[#0047FF]" />
          <span className="ml-2 text-xl font-extrabold text-black">techpack.ai</span>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-end mr-2">
            <span className="text-sm font-bold">Wyatt Sommer</span>
            <span className="text-xs text-gray-500">humanhood WORLD</span>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src="/placeholder.svg?height=40&width=40" alt="Wyatt Sommer" width={40} height={40} />
          </div>
          <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="relative w-80 h-80">
          {/* Placeholder for the triangle animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-60 h-60 border-4 border-yellow-400 rotate-45 transform"></div>
          </div>
          {/* Placeholder for the techpack.ai logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/placeholder.svg?height=64&width=64" alt="techpack.ai logo" width={64} height={64} className="text-[#0047FF]" />
          </div>
          {/* Placeholder for arrow images */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-yellow-400 text-4xl">→</span>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, #BBF6A6 0%, #1473DF 100%);
        }
      `}</style>
    </div>
  )
}