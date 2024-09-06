import React, { useState, useEffect, ChangeEvent } from 'react';
import { FormValues } from '@/app/types';
import { useRouter } from 'next/router';


interface TechpackFormProps {
  formValues: FormValues;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  onSizingChange: (sizing: string) => void;
}

const TechpackForm: React.FC<TechpackFormProps> = ({ formValues, onChange, onSubmit, onSizingChange  }) => {
  const router = useRouter();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };

  // const handleSizingChange = (sizing: string) => {
  //   setFormValues({
  //     ...formValues,
  //     sizing,
  //   });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   setLoading(true);

  //   console.log(formValues);
  //   const formData = new FormData();
  //   formData.append('id', techpackId); // Use the techpackId from the previous page

  //   Object.keys(formValues).forEach((key) => {
  //     formData.append(key, formValues[key as keyof FormValues].toString());
  //   });
    
  //   // Handle form submission logic here
  //   // Send FormData in a POST request
  //   try {
  //     const response = await fetch(`/api/techpack/${techpackId}`, {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     console.log('Success:', result);
      
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  // useEffect(() => {
  //   const fetchDescription = async () => {
  //     console.log(`Techpack id in form: ${techpackId}`);
  //     setLoading(true);
  //     setError(null); 
  //     try {
  //       // const response = await fetch(`/api/techpack/${techpackId}`);
  //       // setDescription(response.data.description); // Adjust based on actual API response structure
  //     } catch (err) {
  //       setError('Failed to fetch description');
  //       console.error('Error fetching description:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchDescription();
  // }, [techpackId]); // Fetch data whenever `techpackId` changes

  return (
    <div>
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Techpack Generator</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">

    <h1 className="text-2xl font-semibold mb-6 text-center">Techpack Form</h1>
    <form onSubmit={onSubmit} className="space-y-4">
    {/* Description */}
    <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
        id="description"
        name="description"
        value={formValues.description}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        rows={4}
        placeholder="Enter description"
        />
    </div>

  {/* Brand Name */}
  <div>
    <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">Brand Name</label>
    <input
      type="text"
      id="brandName"
      name="brandName"
      value={formValues.brandName}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Enter brand name"
    />
  </div>

  {/* Style ID */}
  <div>
    <label htmlFor="styleId" className="block text-sm font-medium text-gray-700">Style ID</label>
    <input
      type="text"
      id="styleId"
      name="styleId"
      value={formValues.styleId}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Enter style ID"
    />
  </div>

  {/* Style Name */}
  <div>
    <label htmlFor="styleName" className="block text-sm font-medium text-gray-700">Style Name</label>
    <input
      type="text"
      id="styleName"
      name="styleName"
      value={formValues.styleName}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Enter style name"
    />
  </div>

  {/* Fabric */}
  <div>
    <label htmlFor="fabric" className="block text-sm font-medium text-gray-700">Fabric</label>
    <input
      type="text"
      id="fabric"
      name="fabric"
      value={formValues.fabric}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Enter fabric"
    />
  </div>

  {/* Sizing Selection */}
  <fieldset>
    <legend className="block text-sm font-medium text-gray-700">Sizing</legend>
    <div className="flex space-x-4 mt-2">
    <button
        type="button"
        onClick={() => onSizingChange('XSmall')}
        className={`py-2 px-4 border rounded-md ${formValues.sizing === 'XSmall' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        XSmall
      </button>
      <button
        type="button"
        onClick={() => onSizingChange('Small')}
        className={`py-2 px-4 border rounded-md ${formValues.sizing === 'Small' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Small
      </button>
      <button
        type="button"
        onClick={() => onSizingChange('Medium')}
        className={`py-2 px-4 border rounded-md ${formValues.sizing === 'Medium' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Medium
      </button>
      <button
        type="button"
        onClick={() => onSizingChange('Large')}
        className={`py-2 px-4 border rounded-md ${formValues.sizing === 'Large' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Large
      </button>
      <button
        type="button"
        onClick={() => onSizingChange('XLarge')}
        className={`py-2 px-4 border rounded-md ${formValues.sizing === 'XLarge' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        XLarge
      </button>
    </div>
  </fieldset>

    {/* Color Style */}
    <div>
        <label htmlFor="colorStyle" className="block text-sm font-medium text-gray-700">Color Style</label>
        <input
        type="text"
        id="colorStyle"
        name="colorStyle"
        value={formValues.colorStyle}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Enter color style"
        />
    </div>

    {/* Additional Details */}
    <div>
        <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700">Additional Details</label>
        <textarea
        id="additionalDetails"
        name="additionalDetails"
        value={formValues.additionalDetails}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        rows={4}
        placeholder="Enter additional details"
        />
    </div>
    <div className="relative max-w-2xl p-6 mt-4 ">
        {/* Back Button */}
        <button
        onClick={handleBack}
        className="absolute bottom-0 left-0 py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-opacity duration-300"
        >
        Back
        </button>
        {/* Submit Button */}
        <button
          onClick={onSubmit}
          type="submit"
          className="absolute bottom-0 right-0 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
    </div>

</form>

</div>
    </div>
   
  );
};

export default TechpackForm;
