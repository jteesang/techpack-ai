import Image from 'next/image'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/Select"
import { ChevronDown, ChevronRight } from 'lucide-react'
import { FormValues } from '@/app/types'
import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/router'

interface TechpackFormProps {
  formValues: FormValues;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  selectedSizing: string;
  onSizingChange: (sizing: string) => void;
}

export default function InputForm({ formValues, onChange, onSubmit, selectedSizing, onSizingChange }: TechpackFormProps) {
  const router = useRouter();

  const handleSizingPreference = (sizing: string, e: React.MouseEvent) => {
    e.preventDefault()
    onSizingChange(sizing)
  }

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  function handleFormChange(arg0: string, value: string): void {
    throw new Error('Function not implemented.')
  }

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
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="description">Description</label>
            <Textarea id="description" name="description" value={formValues.description} onChange={onChange} placeholder="Description" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" rows={4} />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="brandName">Brand Name</label>
              <Input id="brandName" name="brand_name" value={formValues.brand_name} onChange={onChange} placeholder="Enter your Brand Name" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="styleId">Style ID:</label>
              <Input id="styleId" name="style_id" value={formValues.style_id} onChange={onChange} placeholder="Enter Style ID" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="styleName">Style Name:</label>
              <Input id="styleName" name="style_name" value={formValues.style_name} onChange={onChange} placeholder="Enter your style name" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="fabric">Fabric</label>
              <Input id="fabric" name="fabric" value={formValues.fabric} onChange={onChange} placeholder="Enter your Fabric" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Sizing preference</label>
              <div className="flex space-x-2">
                <Button
                    onClick={(e) => handleSizingPreference('S/M/L', e)}
                    name="sizing_preference"
                    value={formValues.sizing_preference}
                    key={'S/M/L'}
                    variant={'S/M/L' === selectedSizing ? 'default' : 'outline'}
                    className={`px-3 py-1 text-sm rounded-md ${'S/M/L' === selectedSizing ? 'bg-[#0374FC] text-white' : 'border-[#0047FF] text-black'}`}
                  >
                  S/M/L
                </Button>
                <Button
                    onClick={(e) => handleSizingPreference('1/2/3', e)}
                    name="sizing_preference"
                    value={formValues.sizing_preference}
                    key={'1/2/3'}
                    variant={'1/2/3' === selectedSizing ? 'default' : 'outline'}
                    className={`px-3 py-1 text-sm rounded-md ${'1/2/3' === selectedSizing ? 'bg-[#0374FC] text-white' : 'border-[#0047FF] text-black'}`}
                  >
                  1/2/3
                </Button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="colorStyle">Color Style</label>
              <Select name="color_style" value={formValues.color_style} onValueChange={(value) => handleFormChange('colorStyle', value)}>
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
              <Input id="additionalDetails" name="additional_details" value={formValues.additional_details} onChange={onChange} placeholder="Type" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
            {/* <div>
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
            </div> */}
          </div>

          <div className="flex justify-between items-center mt-8">
            <Button onClick={handleBack} variant="outline" className="px-6 py-2 rounded-full border-2 border-[#0047FF]">Back</Button>
            <Button onClick={onSubmit} type="submit" className="px-6 py-2 bg-[#0047FF] hover:bg-[#0037CC] text-white rounded-full">
              Submit
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </form>
      </main>


      {/* Footer content remains unchanged */}
      <footer className="bg-gradient-to-t from-[#6BFFF2] via-[#66F9F3] to-white pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <Image src="/placeholder.svg?height=48&width=48" alt="techpack.ai" width={48} height={48} className="mb-4" />
              <div className="flex space-x-4">
                {['linkedin', 'facebook', 'twitter', 'instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">{social}</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Demo video</h3>
              <h3 className="font-semibold mb-4">Features</h3>
              <h3 className="font-semibold mb-4">Pricing</h3>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Log In</h3>
              <h3 className="font-semibold mb-4">Sign UP</h3>
              <h3 className="font-semibold mb-4">Help</h3>
            </div>
            <div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="flex-grow px-4 py-2 rounded-l-full bg-gradient-to-r from-blue-500 to-blue-400 text-white placeholder-white"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-r-full">
                  Subscribe
                </button>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Terms of service</a>
                {' · '}
                <a href="#" className="hover:text-gray-900">Privacy policy</a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-600">
            ©2024 techpack.ai LLC
          </div>
        </div>
      </footer>
    </div>
  )
}