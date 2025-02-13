// pages/techpack/[id].tsx
'use client'
import InputForm from '@/components/inputform';
import { FormValues, TechpackForm } from '@/app/types';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/context/UserContext';

interface TechpackProps {
  techpackId: string;
}

const TechpackPage = () => {
  const router = useRouter();
  const {user} = useUser();
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

    formData.append('id', techpackId);
    if (user?.id) {
      formData.append('user_id', user.id);
    }

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
      if (response.status === 204) {
        console.log(`No content returned`);
        router.push(`/viewer/${techpackId}`)
      }
      else {
        const result = await response.json()
        console.log(`result: ${(result)}`)
      }

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }

    // Handle generate images for PDF
  };

  const getExistingTechpack = async (techpackId: string) => {
    // try {
      const response = await fetch(`/api/inputform/${String(techpackId)}`, {
        method: 'GET'
      });

      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      const result = await response.json()
      return result;
    // } catch (error) {
      // console.error('Error:', error);
      // return result.status
    // }
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
          if (response.status == 404 || response.status == 500) {
            // do nothing 
            console.log('Techpack does not currently exist.')
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
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-100 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex justify-center items-center">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full border-2 border-blue-500 border-r-transparent animate-spin"></div>
              </div>
              <p>Loading...</p>
            </div>
          </div>
        </div>
      ) : (
        <InputForm
          formValues={formValues}
          onChange={handleChange}
          onSubmit={handleSubmit}
          selectedSizing={formValues.sizing_preference}
          onSizingChange={handleSizingChange}
          onColorChange={handleColorChange}
        />
      )}
    </div>
  );
};

export default TechpackPage;
