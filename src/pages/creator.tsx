import Image from 'next/image'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { ChevronRight, Image as ImageIcon, Send } from 'lucide-react'

export default function Creator() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="flex justify-between items-center py-3 px-6 border-b border-gray-200">
        <div className="flex items-center">
          <Image src="/placeholder.svg?height=24&width=24" alt="techpack.ai" width={24} height={24} className="text-[#3366FF]" />
          <span className="ml-2 text-lg font-bold text-[#3366FF]">techpack.ai</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-sm font-medium">Wyatt Sommer</span>
          <span className="mr-2 text-xs text-gray-500">humanhood WORLD</span>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Wyatt Sommer" />
            <AvatarFallback>WS</AvatarFallback>
          </Avatar>
          <ChevronRight className="ml-1 h-4 w-4 text-gray-400" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto mt-8">
        <Card className="bg-gradient-to-b from-[#EBF3FF] via-[#E7F0FF] to-[#E1ECFF] p-8 rounded-3xl shadow-none border border-[#D1E2FF]">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Create a New Techpack</h1>
            <Button size="lg" className="bg-[#3366FF] hover:bg-[#2952CC] text-white px-6 py-2.5 rounded-full text-base font-semibold">
              Create an New Techpack
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex gap-6">
            <div className="w-1/2">
              <h2 className="text-sm font-medium mb-2 text-gray-700">Generated Image</h2>
              <div className="bg-gray-100 w-full h-[280px] relative rounded-lg overflow-hidden">
                <Image 
                  src="/placeholder.svg?height=280&width=280" 
                  alt="AI Generated Fashion Image" 
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
              <div className="mt-4 relative">
                <Input 
                  placeholder="Message Techpack AI" 
                  className="pr-20 bg-white border-gray-200 rounded-none text-sm h-12"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ImageIcon className="h-4 w-4 text-gray-400" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Send className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h2 className="text-sm font-medium mb-2 text-gray-700">AI-Generated Descriptions <span className="text-xs text-gray-500">(if you want can edit description)</span></h2>
              <div className="bg-white p-4 h-[280px] overflow-y-auto rounded-lg border border-gray-200">
                <p className="text-gray-400 italic text-sm">AI generated Image description</p>
              </div>
              <div className="mt-4 flex justify-between">
                <Button variant="outline" className="text-gray-700 bg-white border-gray-300 rounded-full px-6">Back</Button>
                <Button className="bg-[#3366FF] hover:bg-[#2952CC] text-white rounded-full px-6">Regenerate</Button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
