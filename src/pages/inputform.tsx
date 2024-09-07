import Image from 'next/image'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/Select"
import { ChevronDown } from 'lucide-react'

export default function InputForm() {
  return (
    <div className="min-h-screen bg-white font-jost">
      <header className="flex justify-between items-center py-4 px-6 border-b border-gray-200 shadow-sm">
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

      <main className="max-w-4xl mx-auto mt-8 px-4">
        <form>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="description">Description</label>
            <Textarea id="description" placeholder="Description" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" rows={4} />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="brandName">Brand Name</label>
              <Input id="brandName" placeholder="Enter your Brand Name" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="styleId">Style ID:</label>
              <Input id="styleId" placeholder="Enter Style ID" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="styleName">Style Name:</label>
              <Input id="styleName" placeholder="Enter your style name" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="fabric">Fabric</label>
              <Input id="fabric" placeholder="Enter your Fabric" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Sizing preference</label>
              <div className="flex space-x-2">
                {['XS', 'S', 'M', 'L', 'XL', '1', '2', '3'].map((size) => (
                  <Button 
                    key={size} 
                    variant={size === 'XS' ? 'default' : 'outline'} 
                    className={`px-3 py-1 text-sm rounded-md ${size === 'XS' ? 'bg-[#0374FC] text-white' : 'border-[#0047FF]'}`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="colorStyle">Color Style</label>
              <Select>
                <SelectTrigger className="w-full p-2 border-2 border-[#0047FF] rounded-lg flex justify-between items-center">
                  <SelectValue placeholder="Select color" />
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Sketch Upload Front & back side <span className="text-xs text-gray-500">(Optional but recommended for the best result)</span></label>
            <div className="grid grid-cols-1 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="border-2 border-dashed border-[#0047FF] rounded-lg p-8 text-center">
                  <p className="text-blue-500">Drag & drop or choose file to upload jpg, or pdf front side</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="additionalDetails">Additional details <span className="text-xs text-gray-500">(Optional but recommended for the best result)</span></label>
              <Input id="additionalDetails" placeholder="Type" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="selectColorways">Select colorways <span className="text-xs text-gray-500">(Optional if you want)</span></label>
              <Select>
                <SelectTrigger className="w-full p-2 border-2 border-[#0047FF] rounded-lg flex justify-between items-center">
                  <SelectValue placeholder="Select colorway" />
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <Button variant="outline" className="px-6 py-2 rounded-full border-2 border-[#0047FF]">Back</Button>
            <Button className="px-6 py-2 bg-[#0047FF] hover:bg-[#0037CC] text-white rounded-full">
              Create an New Techpack
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </form>
      </main>

      {/* Footer content remains unchanged */}
    </div>
  )
}