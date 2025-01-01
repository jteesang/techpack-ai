import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import { ChevronDown, Download, Edit2 } from 'lucide-react'
import { coverTemplateValues, FormValues } from '@/app/types';
import { COVER_GARMENT_LINK, COVER_IMAGE, COVER_VALUE_NAME, COVER_VALUE_SEASON, COVER_VALUE_STYLE } from "@/constants/cover";
import NavBar from '@/components/NavBar';
import Home from '@/components/ui/Home';
import Footer from '@/components/ui/Footer';
import { convertToBase64 } from '@/app/utils/convertImage';
import { generateTestPDF, generateViewPDF } from '@/app/utils/pdfme/generate';



export default function TechpackViewer() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerInitialized = useRef(false);
  const [techpackId, setTechpackId] = useState<string>(router.query.id as string);
  const [pdf, setPdf] = useState<Blob | null>(null);
  const [pdfData, setPdfData] = useState<Uint8Array | null>(null);
  const [inputs, setInputs] = useState<coverTemplateValues[]>([{
    "cover-garment-link": { link: "" },
    "cover-value-style": { style: "" },
    "cover-value-name": { name: "" },
    "cover-value-season": { season: "" },
    "cover-value-vendor": { vendor: "" },
    "cover-value-coo": { coo: "" },
    "cover-value-createdby": { createdBy: "" },
    "cover-value-date-2": { date2: "" },
    "cover-value-labdips": { labdips: "" },
    "cover-value-fabrics": { fabrics: "" },
    "cover-value-prototypes": { prototypes: "" },
    "cover-value-trims": { trims: "" },
    "cover-value-salessamples": { salessamples: "" },
    "cover-value-bulkdelivery": { bulkdelivery: "" },
    "cover-value-date": { date: "" },
    "cover-image": { image: "" }
  }]
  );

  // fancy template
  // const template: Template = {
  //   schemas: 
  //     [
  //       {
  //         coverImage: {
  //           "name": "coverImage",
  //           "type": "image",
  //           "content": "",
  //           "position": {
  //             "x": 28.58,
  //             "y": 52.47
  //           },
  //           "width": 154.83,
  //           "height": 138.95,
  //           "rotate": 0,
  //           "opacity": 1,
  //           "required": false,
  //           "readOnly": false
  //         }

  //       },
  //       {
  //         coverHeading: {
  //           "name": "coverHeading",
  //           "type": "text",
  //           "content": "COVER",
  //           "position": {
  //             "x": 9.26,
  //             "y": 20.37
  //           },
  //           "width": 14.84,
  //           "height": 10,
  //           "rotate": 0,
  //           "alignment": "left",
  //           "verticalAlignment": "top",
  //           "fontSize": 13,
  //           "lineHeight": 1,
  //           "characterSpacing": 0,
  //           "fontColor": "#000000",
  //           "backgroundColor": "",
  //           "opacity": 1,
  //           "strikethrough": false,
  //           "underline": false,
  //           "required": false,
  //           "readOnly": false
  //         }
  //       },
  //       {
  //         coverStyleHeading: {
  //           "name": "coverStyleHeading",
  //           "type": "text",
  //           "content": "STYLE",
  //           "position": {
  //             "x": 9.26,
  //             "y": 30.42
  //           },
  //           "width": 15.1,
  //           "height": 10,
  //           "rotate": 0,
  //           "alignment": "left",
  //           "verticalAlignment": "top",
  //           "fontSize": 13,
  //           "lineHeight": 1,
  //           "characterSpacing": 0,
  //           "fontColor": "#000000",
  //           "backgroundColor": "",
  //           "opacity": 1,
  //           "strikethrough": false,
  //           "underline": false,
  //           "required": false,
  //           "readOnly": false,
  //           "text": "STYLE"
  //         }
  //       },
  //       {
  //         coverStyleValue: {
  //           "name": "coverStyleValue",
  //           "type": "multiVariableText",
  //           "position": {
  //             "x": 25.61,
  //             "y": 30.37
  //           },
  //           "required": false,
  //           "content": "{\"style\":\"STYLE\"}",
  //           "width": 50,
  //           "height": 9.71,
  //           "rotate": 0,
  //           "alignment": "left",
  //           "verticalAlignment": "top",
  //           "fontSize": 13,
  //           "lineHeight": 1,
  //           "characterSpacing": 0,
  //           "fontColor": "#000000",
  //           "backgroundColor": "",
  //           "opacity": 1,
  //           "strikethrough": false,
  //           "underline": false,
  //           "readOnly": false,
  //           "text": "{style}",
  //           "variables": [
  //             "style"
  //           ]
  //         }

  //       }
  //     ],
  //     basePdf: {
  //     "width": 210,
  //       "height": 297,
  //         "padding": [
  //           0,
  //           0,
  //           0,
  //           0
  //         ]
  //   }
  // };
  const handleOpenPDF = async () => {
    const blobPDF = await generateTestPDF();
    if (blobPDF) {
      setPdf(blobPDF);
      const url = URL.createObjectURL(blobPDF);
      window.open(url, '_blank');
      // Clean up the URL object after opening
      URL.revokeObjectURL(url);
    }
  };

  const handleEditInputForm = () => {
    router.push(`/inputform/${techpackId}`)
  }

  const populatePDF = async () => {
    try {
      const response = await fetch(`/api/inputform/${String(techpackId)}`, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json()
      console.log(`populatePDF method: ${typeof(response)}`)
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const getImageUrl = async () => {
    try {
      const response = await fetch(`/api/image/${String(techpackId)}`, {
        method: 'GET'
      });
      // const response = await fetch(`/api/upload/${String(techpackId)}`, {
      //   method: 'GET'
      // });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json()
      // console.log(`${JSON.stringify(result)}`)
      return result.image_path;
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // const getInputs = async () => {
  //     const getData = await populatePDF();
  //     const getImage = await getImageUrl();
  //     const inputs = mapDataToPDF(getData, getImage);
  //     setInputs([inputs]);
  // }

  const mapDataToPDF = (data: FormValues, image_path: string) => {
    const sample_img_path = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=`
    console.log(`JSON.stringify(data): ${JSON.stringify(data)}`)
    return {
      "cover-style-value": {style: data.style_id}
    }
    // return {
    //   "cover-garment-link": { link: "https://example.com/garment-detail" },
    //   "cover-value-style": { style: data.style_id },
    //   "cover-value-name": { name: data.style_name },
    //   "cover-value-season": { season: "" },
    //   "cover-value-vendor": { vendor: "" },
    //   "cover-value-coo": { coo: "" },
    //   "cover-value-createdby": { createdBy: "" },
    //   "cover-value-date-2": { date2: "" },
    //   "cover-value-labdips": { labdips: "" },
    //   "cover-value-fabrics": { fabrics: data.fabric },
    //   "cover-value-prototypes": { prototypes: "" },
    //   "cover-value-trims": { trims: "" },
    //   "cover-value-salessamples": { salessamples: "" },
    //   "cover-value-bulkdelivery": { bulkdelivery: "" },
    //   "cover-value-date": { date: "" },
    //   "cover-image": { image: sample_img_path }
    // }
  }

  // if (!pdfData) {
  //   return <div>Loading PDF...</div>
  // }

  useEffect(() => {
    console.log('useEffect triggered');
    console.log('techpackId:', techpackId);
    console.log('router.query:', router.query);
    console.log('router.isReady:', router.isReady);

    // If techpackId is not provided, set it from router.query
    if (router.isReady) {
      const queryId = router.query.id as string | undefined;
      setTechpackId(queryId || '');
    }

    // const queryId = router.query.id as string | undefined;
    // if (!techpackId && queryId) {
    //   console.log(`Setting techpackId: ${queryId}`);
    //   setTechpackId(queryId);
    // }
    // if (containerRef.current && !viewerInitialized.current) {

    //   viewer['render']();
    //   viewerInitialized.current = true;
    // }

    // chatgpt display pdf using file
    const loadPdf = async () => {
      handleOpenPDF();

      if (pdf?.type != 'application/pdf') {
        console.error(`Provided file is not a PDF`);
        return;
      }
      if (containerRef.current) {
        const viewer = await generateViewPDF(containerRef.current);
        viewer['render'];
      }
    };

    loadPdf();
  }, [router.isReady, router.query.id, pdf]);


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="flex justify-between items-center py-3 px-6 bg-gradient-to-b from-[#F8FAFC] via-[#E7F0FF] to-[#E1ECFF] p-8 shadow-none border border-[#D1E2FF]">
        <Home />
        <NavBar />
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-600">Techpack Generated</h1>
            <div className="flex space-x-4">
              <button onClick={handleOpenPDF} className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:opacity-80">
                <Download className="mr-2 h-5 w-5" />
                Export
              </button>
              <button onClick={handleEditInputForm} className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full flex items-center hover:opacity-80">
                <Edit2 className="mr-2 h-5 w-5" />
                Edit Techpack
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">PDF View</h2>            
            <div
              ref={containerRef}
              style={{ width: '100%', height: '100vh' }} // Adjust styles as needed
            >
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}