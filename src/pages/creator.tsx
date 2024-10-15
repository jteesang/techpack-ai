import Image from 'next/image'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { ChevronRight, Image as ImageIcon, Send } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import TypewriterTextarea from '@/components/Typewriter'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Home from '@/components/ui/Home'
import NavBar from '@/components/NavBar'
import Footer from '@/components/ui/Footer'

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
    setDescription(null);
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

      const result = await response.json();
      if (response.ok) {
        setImageUrl(result.image_path);
        setDescription(result.description);
        setTechpackId(result.id);
        setUploadResult('Upload successful');
      } else {
        setUploadResult('Upload failed, try again!');
      }
    } catch (error) {
      setUploadResult(`Error: ${error}`);
      console.error('Error:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <header className="flex justify-between items-center py-3 px-6 bg-gradient-to-b from-[#EBF3FF] via-[#E7F0FF] to-[#E1ECFF] p-8 shadow-none border border-[#D1E2FF]">
        <Home />
        <NavBar />
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
                    {uploading === true ?
                      <LoadingSpinner />
                      :
                      <div>
                        <input
                          type="file"
                          id="fileInput"
                          onChange={handleFileChange}
                          className="block w-full px-3 py-2 rounded-lg"
                          disabled={uploading}
                        />
                      </div>
                    }

                    {/* Upload Result Message */}
                    {uploadResult && (
                      <div className="flex flex-col items-center space-y-2 mb-4">
                        {uploading ? (
                          <LoadingSpinner />
                        ) : (
                          <p className={`text-center ${uploadResult.startsWith('Upload successful') ? 'text-green-500' : 'text-red-500'}`}>
                            {uploadResult}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <h2 className="text-sm font-medium mb-2 text-gray-700">AI-Generated Description<span className="text-xs text-gray-500"></span></h2>
              <div className="bg-white p-4 h-[280px] overflow-y-auto rounded-lg border border-gray-200">
                <TypewriterTextarea
                  text={description ?? ' '}
                  speed={50}
                />
                <p className="text-gray-400 italic text-center text-sm p-4">AI generated descriptions may be incorrect.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <Button onClick={handleBack} variant="outline" className="px-6 py-2 rounded-full border-2 border-gray-300">Back</Button>
            <Button onClick={handleRegenerate} disabled={!techpackId} className="px-6 py-2 bg-[#0047FF] hover:bg-[#0037CC] text-white rounded-full">
              Regenerate
            </Button>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
