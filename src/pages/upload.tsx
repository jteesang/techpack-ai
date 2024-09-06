'use client'
import React, { useState } from 'react';
import TypewriterTextarea from '@/components/Typewriter';
import { useRouter } from 'next/router';
import NextButton from '@/components/NextButton';

const Generate: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploadResult, setUploadResult] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [techpackId, setTechpackId] = useState<string | null>(null);

  const router = useRouter();

  // TODO - FIX THIS
  const handleBack = () => {
    if (window.history.length > 1) {
      console.log('back')
      router.back();
    } else {
      console.log('default to path')
      router.push('/path'); // Redirect to a fallback page if no history
    }
  };

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

  const handleCreateTechpack = () => {
    console.log(`techpackId: ${techpackId}`)
    router.push(`/techpack/${techpackId}`)
  }

  const convertDescription = (description: string) => {
    const values = Object.values(description);
    const filteredValues = values.filter(value => value !== null && value !== undefined && value !== 'none');
    const descriptionString = filteredValues.map(val => String(val)).join('\n');
    console.log(`descriptionString: ${descriptionString}`)
    setDescription(descriptionString);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Techpack Generator</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-1 flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create a New Techpack</h2>
        <form>
          {/* Form Content */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
          {imageUrl ? (
              <div className="flex-1">
                <img src={imageUrl} alt="Uploaded" className="w-full h-auto border border-gray-300 rounded-lg" />
              </div>
            ) : (
              <div className="flex-1">
                <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700 mb-2">Upload Sketch</label>
                {/* <div className="flex-1 flex items-center justify-center"> */}
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    className="block w-full px-3 py-2 border border-2 border-green-300 rounded-lg"
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

            {/* File Input Section */}
            {/* <div className="flex-1">
              <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                className="block w-full px-3 py-2 border border-2 border-green-300 rounded-lg"
                disabled={uploading}  // Disable input while uploading
              /> */}

       
            
            {/* Description Section */}
            <div className="flex-1">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Generated Description</label>
              <TypewriterTextarea 
                text={description || ' '} 
                speed={50} 
                placeholder="AI generated description"
              />
            </div>
          </div>

          <div className="relative w-full p-6 mt-4 ">
            {/* Back Button */}
            <button
            onClick={handleBack}
            className="absolute bottom-0 left-0 py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-opacity duration-300"
            >
            Back
            </button>

            {/* Customized Next Button */}
            <NextButton 
            nextId={techpackId || ''}
            disabled={!techpackId} />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Generate;
