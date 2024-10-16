import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/Select"
import { ChevronRight } from 'lucide-react'
import { FormValues } from '@/app/types'
import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import Home from './ui/Home'
import NavBar from './NavBar'
import Footer from './ui/Footer'

interface TechpackFormProps {
  formValues: FormValues;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  selectedSizing: string;
  onSizingChange: (sizing: string) => void;
  onColorChange: (color: string) => void;
}

export default function InputForm({ formValues, onChange, onSubmit, selectedSizing, onSizingChange, onColorChange }: TechpackFormProps) {
  const router = useRouter();

  const handleSizingPreference = (sizing: string, e: React.MouseEvent) => {
    e.preventDefault()
    onSizingChange(sizing)
  }

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  const handleColorChange = (color: string) => {
    onColorChange(color)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-jost">
      <header className="flex justify-between items-center py-3 px-6 bg-gradient-to-b from-[#EBF3FF] via-[#E7F0FF] to-[#E1ECFF] p-8 shadow-none border border-[#D1E2FF]">
          <Home />
          <NavBar />
      </header>
      <main className="max-w-4xl mx-auto mt-8 px-4">
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="description">Description</label>
            <Textarea id="description" name="description" value={formValues.description} onChange={onChange} placeholder="Description" 
              className="w-full p-2 border-2 border-[#0047FF] rounded-lg" rows={4} />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="brandName">Brand Name</label>
              <Input id="brandName" name="brand_name" value={formValues.brand_name} onChange={onChange} placeholder="Brand Name" 
                className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="styleId">Style ID</label>
              <Input id="styleId" name="style_id" value={formValues.style_id} onChange={onChange} placeholder="Style ID" 
                className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="styleName">Style Name</label>
              <Input id="styleName" name="style_name" value={formValues.style_name} onChange={onChange} placeholder="Style Name" 
                className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="fabric">Fabric</label>
              <Input id="fabric" name="fabric" value={formValues.fabric} onChange={onChange} placeholder="Fabric" 
                className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Sizing Preference</label>
              <div className="flex space-x-2">
                <Button
                  onClick={(e) => handleSizingPreference('S/M/L', e)}
                  name="sizing_preference"
                  value={formValues.sizing_preference}
                  key={'S/M/L'}
                  variant={'S/M/L' === selectedSizing ? 'default' : 'outline'}
                  className={`px-3 py-1 text-sm rounded-md hover:bg-[#0374FC] text-white 
                    ${'S/M/L' === selectedSizing ? 'bg-[#0374FC]' : 'border-[#0047FF] border-2 text-gray-500'}`}
                >
                  S/M/L
                </Button>
                <Button
                  onClick={(e) => handleSizingPreference('1/2/3', e)}
                  name="sizing_preference"
                  value={formValues.sizing_preference}
                  key={'1/2/3'}
                  variant={'1/2/3' === selectedSizing ? 'default' : 'outline'}
                  className={`px-3 py-1 text-sm rounded-md hover:bg-[#0374FC] text-white 
                    ${'1/2/3' === selectedSizing ? 'bg-[#0374FC]' : 'border-[#0047FF] border-2 text-gray-500'}`}
                >
                  1/2/3
                </Button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="colorStyle">Color Style</label>
              <Select name="color_style" value={formValues.color_style} onValueChange={(value) => handleColorChange(value)}>
                <SelectTrigger className="w-full p-2 border-2 border-[#0047FF] rounded-lg flex justify-between items-center text-gray-500">
                  <SelectValue placeholder="Select Color" />
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
            <label className="block text-sm font-medium mb-2">Sketch Upload Front & Back Side <span className="text-xs text-gray-500">(Optional but recommended for the best result)</span></label>
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
              <label className="block text-sm font-medium mb-2" htmlFor="additionalDetails">Additional Details <span className="text-xs text-gray-500">(Optional but recommended for the best result)</span></label>
              <Input id="additionalDetails" name="additional_details" value={formValues.additional_details} onChange={onChange} placeholder="Additional Details" className="w-full p-2 border-2 border-[#0047FF] rounded-lg" />
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
            <Button onClick={handleBack} variant="outline" className="px-6 py-2 rounded-full border-2 border-gray-300">Back</Button>
            <Button onClick={onSubmit} type="submit" className="px-6 py-2 bg-[#0047FF] hover:bg-[#0037CC] text-white rounded-full">
              Submit
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </form>

      </main>
      <Footer />
    </div>
  )
}