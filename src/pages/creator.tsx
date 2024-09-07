import Image from 'next/image'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { ChevronRight, Image as ImageIcon, Send } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import TypewriterTextarea from '@/components/Typewriter'

export default function Creator() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploadResult, setUploadResult] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [techpackId, setTechpackId] = useState<string | null>(null);
  const router = useRouter();

  const handleRegenerate = () => {
    setImageUrl(null);
    setDescription(' ');
    setTechpackId(null);
    setUploadResult(null);
    setFile(null);
    setUploading(false);
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      await uploadFile(selectedFile);  // Automatically upload file
    }
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('message', "techpackName");

    setUploading(true);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        // console.log(`result: ${JSON.stringify(result)}`)
        setImageUrl(result.image_path);
        setDescription(result.description);
        setTechpackId(result.id);
        console.log(`techpackId: ${result.id}`)
        // convertDescription(result.description);
        setUploadResult('Upload successful');
  
      } else {
        const errorText = await response.text();
        setUploadResult(`Upload failed: ${errorText}`);
        console.error('Upload failed:', errorText);
      }
    } catch (error) {
      setUploadResult(`Error: ${error}`);
      console.error('Error:', error);
    } finally {
      setUploading(false);
    }
  };


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
            <Button 
              onClick={() => router.push(`/inputform/${techpackId}`)} 
              size="lg" 
              className="bg-[#3366FF] hover:bg-[#2952CC] text-white px-6 py-2.5 rounded-full text-base font-semibold"
              disabled={!techpackId}
            >
              Create a New Techpack
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex gap-6">
            <div className="w-1/2">
              <h2 className="text-sm font-medium mb-2 text-gray-700">Upload Image</h2>
              <div className="bg-gray-100 w-full h-[280px] relative rounded-lg overflow-hidden">
                {/* <Image 
                  src="/placeholder.svg?height=280&width=280" 
                  alt="AI Generated Fashion Image" 
                  layout="fill" 
                  objectFit="cover"
                /> */}
                {/* <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700 mb-2">Upload Sketch</label> */}
                {imageUrl ? (
              <div className="flex-1">
                <img src={imageUrl} alt="Uploaded" className="w-full h-auto border border-gray-300 rounded-lg" />
              </div>
            ) : (
              <div className="flex-1">
                {/* <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700 mb-2">Upload Sketch</label> */}
                {/* <div className="flex-1 flex items-center justify-center"> */}
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    className="block w-full px-3 py-2 rounded-lg"
                    disabled={uploading}
                  />
                {/* </div> */}
                {/* Upload Result Message */}
                {uploadResult && (
                  <div className="flex flex-col items-center space-y-2 mb-4">
                    <p className={`text-center ${uploadResult.startsWith('Upload successful') ? 'text-green-500' : 'text-red-500'}`}>
                      {uploadResult}
                    </p>
                  </div>
                )}
              </div>
            )}
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
              <h2 className="text-sm font-medium mb-2 text-gray-700">AI-Generated Description<span className="text-xs text-gray-500"> (editable)</span></h2>
              <div className="bg-white p-4 h-[280px] overflow-y-auto rounded-lg border border-gray-200">
                <p className="text-gray-400 italic text-sm">AI generated Image description</p>
                <TypewriterTextarea 
                text={description || ' '} 
                speed={50} 
              />
              </div>
              <div className="mt-4 flex justify-between">
                <Button variant="outline" className="text-gray-700 bg-white border-gray-300 rounded-full px-6">Back</Button>
                <Button onClick={handleRegenerate} className="bg-[#3366FF] hover:bg-[#2952CC] text-white rounded-full px-6">Regenerate</Button>
              </div>
            </div>
          </div>
        </Card>
      </main>
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
