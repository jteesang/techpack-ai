// pages/techpack/[id].tsx
'use client'
import { GetServerSideProps } from 'next';
import TechpackForm from '@/components/form';
import { FormValues } from '@/app/types';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface TechpackProps {
    techpackId: string;
}

const TechpackPage = () => {
    const router = useRouter();
    const { id } = router.query;
    // console.log(`TechpackPage: ${id}`);

    const [techpackId, setTechpackId] = useState<string>(router.query.id as string);
    const [loading, setLoading] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValues>({
        description: '',
        brandName: '',
        styleId: '',
        styleName: '',
        fabric: '',
        sizing: '',
        colorStyle: '',
        additionalDetails: '',
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


const handleSizingChange = (sizing: string) => {
    setFormValues({
        ...formValues,
        sizing,
    });
};

const printFormData = (formData: FormData) => {
    // Convert FormData entries to an array and log each key-value pair
    Array.from(formData.entries()).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
};


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log(formValues); // delete

    const formData = new FormData();
    formData.append('id', techpackId); // Use the techpackId from the previous page


    printFormData(formData);

    Object.keys(formValues).forEach((key) => {
        formData.append(key, formValues[key as keyof FormValues].toString());
    });
    
    // Handle form submission logic here
    // Send FormData in a POST request
    try {
        const response = await fetch(`/api/techpack/${String(techpackId)}`, {
        method: 'POST',
        body: formData,
    });

        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log('Success:', result);
        
    } catch (error) {
        console.error('Error:', error);
    }
    };

    useEffect(() => {
        // If techpackId is not provided, set it from router.query
        if (!techpackId) {
            const queryId = router.query.id as string | undefined;
            console.log(`TechpackPage: ${queryId}`);
            if (queryId) {
                setTechpackId(queryId);
            }
        }
    }, [techpackId, router.query.id]);


  return (
    <div>
      <TechpackForm 
        formValues={formValues}
        onChange={handleChange} 
        onSubmit={handleSubmit}
        onSizingChange={handleSizingChange}
      />
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.query; // Get the dynamic id from the URL
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL; // Replace with your API's base URL

//   // Fetch data based on the id
//   const response = await fetch(`${baseUrl}/techpack/${encodeURIComponent(String(id))}`, {
//     method: 'GET', // or POST, PUT, DELETE, etc.
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   });

//   const data = await response.json();

//   return {
//     props: {
//       id,
//       data
//     }
//   };
// };

export default TechpackPage;
