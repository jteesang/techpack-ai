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
    <div>
      <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col">
        <header className="flex justify-between items-center py-3 px-6 bg-gradient-to-b from-[#F8FAFC] via-[#E7F0FF] to-[#E1ECFF] p-8 shadow-none border border-[#D1E2FF]">
          <Home />
          <NavBar />
        </header>

        <main className="flex-grow flex items-center justify-center">
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
                  {imageUrl ? (
                    <div className="flex-1">
                      <img src={imageUrl} alt="Uploaded" className="w-full h-auto border border-gray-300 rounded-lg" />
                    </div>
                  ) : (
                    <div className="flex-1">
                      {uploading === true ?
                        <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                          <span className="sr-only">Loading...</span>
                        </div>
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
                        <div className="flex-1">
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
      </div>
      <Footer />
    </div>

  )
}
