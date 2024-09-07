import React, { useState } from 'react';
import { UploadIcon, DocumentTextIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/navigation';



const UploadOrDescribe: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'upload' | 'describe' | null>(null);
  const router = useRouter();

  const handleUpload = () => {
    router.push('/creator');
  };

  const handleDescribe = () => {
    router.push('/inputform');
  };

  return (
    
    <div className="flex flex-col  min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Techpack Generator</h1>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col justify-items-center bg-white p-8 shadow-lg rounded-lg max-w-2xl w-full">
            <h2 className="text-2xl font-semibold mb-4 text-center">Choose Your Input</h2>
            <div className="flex justify-center mb-4 space-x-4">

            <button
            onClick={handleUpload}
            className="flex flex-col items-center justify-center w-48 h-48 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:opacity-80 transition-opacity duration-300"
            
          >
            <UploadIcon className="h-12 w-12" aria-hidden="true" />
            <span className="mt-2 text-sm">Upload</span>
          </button>
          <button
            onClick={handleDescribe}
            className="flex flex-col items-center justify-center w-48 h-48 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 hover:opacity-80 transition-opacity duration-300"
            
          >
            <DocumentTextIcon className="h-12 w-12" aria-hidden="true" />
            <span className="mt-2 text-sm">Describe</span>
          </button>
            </div>
        </div>
    </main>
    </div>
  );
};

export default UploadOrDescribe;
