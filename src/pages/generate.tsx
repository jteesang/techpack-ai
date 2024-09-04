'use client'
import React, { useState } from 'react';

const Generate: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const [uploadResult, setUploadResult] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);

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
        setDescription(result);
        setUploadResult('Upload successful');
        // console.log('Upload successful:', uploadResult);
        // console.log('Uploading:', uploading);
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

  const handleCreateTechpack = async () => {
    console.log('create techpack')

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
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">Create a New Techpack</h2>
          {/* Add form or other components to create a techpack here */}
          <form>
            {/* Example input fields */}
            <div className="flex flex-col items-center mb-4 space-y-2">
              <label htmlFor="techpackName" className="block text-sm font-medium text-gray-700">Techpack Name</label>
              <input
                type="text"
                id="techpackName"
                name="techpackName"
                className="mt-1 block w-full px-3 py-2 border border-2 border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter techpack name"
              />
            { uploadResult ?
              <div className="flex flex-col items-center space-y-2">
                {uploadResult && (
                  <p className={`mt-4 ${uploadResult.startsWith('Upload successful') ? 'text-green-500' : 'text-red-500'}`}>
                    {uploadResult}
                  </p>
                )}
                {description && (
                  <p className="mt-4 text-gray-500">{description}</p>
                )}
              </div> 
              : <div className="flex flex-col items-center space-y-2">
              <input
                type="file"
                onChange={handleFileChange}
                className="p-2 border border-2 border-green-300 rounded-lg"
                disabled={uploading}  // Disable input while uploading
                />
            </div>
            }
       

            <button
                type="submit"
                onClick={handleCreateTechpack}
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                Create Techpack
            </button>
          </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Generate;
