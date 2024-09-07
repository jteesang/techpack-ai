// pages/techpack/[id].tsx
'use client'
import { GetServerSideProps } from 'next';
// import TechpackForm from '@/components/form';
import InputForm from '@/components/inputform';
import { FormValues } from '@/app/types';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface TechpackProps {
    techpackId: string;
}

const TechpackPage = () => {
    const router = useRouter();
    // const { id } = router.query;
    // console.log(`TechpackPage: ${id}`);

    const [techpackId, setTechpackId] = useState<string>(router.query.id as string);
    const [loading, setLoading] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValues>({
        description: '',
        brand_name: '',
        style_id: '',
        style_name: '',
        fabric: '',
        sizing_preference: '',
        color_style: '',
        colorways: '',
        additional_details: '',
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
        sizing_preference: sizing,
    });
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('id', techpackId); // Use the techpackId from the previous page

    Object.keys(formValues).forEach((key) => {
        formData.append(key, formValues[key as keyof FormValues].toString());
    });
    
    // Handle form submission logic here
    // Send FormData in a POST request
    try {
        const response = await fetch(`/api/inputform/${String(techpackId)}`, {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json()
    console.log(`techpackId: ${techpackId}`)
    router.push(`/viewer/${techpackId}`)
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
      <InputForm 
        formValues={formValues}
        onChange={handleChange} 
        onSubmit={handleSubmit}
        onSizingChange={handleSizingChange}
      />
    </div>
  );
};

export default TechpackPage;
