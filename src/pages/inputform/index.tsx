// pages/techpack/[id].tsx
'use client'
import InputForm from '@/components/inputform';
import { FormValues } from '@/app/types';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { generateUuid } from '@/app/utils/generateUuid';

interface TechpackProps {
  techpackId: string;
}

const TechpackPage = () => {
  const router = useRouter();
  const [techpackId, setTechpackId] = useState<string>(generateUuid());
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

  const handleColorChange = (color: string) => {
    setFormValues({
      ...formValues,
      color_style: color
    })
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('id', techpackId); // Use the techpackId from the previous page
    Object.entries(formValues).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value.toString());
      } else {
        formData.append(key, '')
      }
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
      router.push(`/viewer/${techpackId}`)

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getExistingTechpack = async (techpackId: string) => {
    try {
      const response = await fetch(`/api/inputform/${String(techpackId)}`, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json()
      console.log(`getExistingTechpack: ${JSON.stringify(result)}`)
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    // If techpackId is not provided, set it from router.query
    if (!techpackId) {
      const queryId = router.query.id as string | undefined;
      console.log(`TechpackPage: ${queryId}`);
      if (queryId) {
        setTechpackId(queryId);
      }
    } else {
      // Populate techpack data if row exists
      const fetchTechpack = async () => {
        try {
          const response = await getExistingTechpack(techpackId)
          if (response.status == 404) {
            // do nothing 

          } else {
            setFormValues(response)
          }

        } catch (error) {
          console.error(error)
        }
      }
      fetchTechpack();
    }
  }, [techpackId, router.query.id]);


  return (
    <div>
      <InputForm
        formValues={formValues}
        onChange={handleChange}
        onSubmit={handleSubmit}
        selectedSizing={formValues.sizing_preference}
        onSizingChange={handleSizingChange}
        onColorChange={handleColorChange}
      />
    </div>
  );
};

export default TechpackPage;
