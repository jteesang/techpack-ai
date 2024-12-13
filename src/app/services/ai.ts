import OpenAI from 'openai';
import dotenv from 'dotenv';
import { zodResponseFormat } from "openai/helpers/zod";
import { techPackSystemPrompt } from '@/constants/prompts';
import { ImageDescription, Techpack, TechpackForm } from '@/app/types/index';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export const generateTechPack = async (imageUrl: string, techpackForm: TechpackForm) => {
  const response = await openai.beta.chat.completions.parse({
    model: "gpt-4o-2024-08-06",
    messages: [
      {
        role: "system",
        content: techPackSystemPrompt + 
        `
          Assume the role of an expert Technical Designer in garment manufacturing. 
          Using the information provided by the user, create a detailed tech pack in a structured, professional format. 
          Ensure each section is comprehensive, aligns with industry standards, and addresses the specific requirements of the garment:
          - Brand Information: ${techpackForm.brand_name}
          - Style ID: ${techpackForm.style_id}
          - Style Name: ${techpackForm.style_name}
          - Garment Description: ${techpackForm.description}
          - Additional Information: ${techpackForm.additional_details}
          - Size Labeling System: ${techpackForm.sizing_preference}
          - Image URL: ${imageUrl}
        `,
      },
      {
        role: "user",
        content: `Generate the tech pack based on the above information.`
      },
    ],
    response_format: zodResponseFormat(Techpack, 'techpack'),
  })

  return response.choices[0]?.message;
}

export const generateImage = async (prompt: string) => {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    n: 1,
    size: "1024x1024",
  })

  return response.data[0].url
}

export const generateDescription = async (imageUrl: string) => {
    console.log(`-------- imageURl in AI SERVICE\n: ${imageUrl}`)
  const response = await openai.beta.chat.completions.parse({
    model: "gpt-4o-2024-08-06",
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "Act as a fashion designer and intricately analyze the garment sketch with precision and provide a detailed description using the specified structure output. If no specified description, return 'None' as the value for the field.",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "image_url",
            image_url: {
              url: imageUrl,
              detail: "high",
            },
          },
        ],
      },
    ],
    response_format: zodResponseFormat(ImageDescription, 'imageDescription'),
    max_tokens: 3500,
  });
  return response.choices[0]?.message;
}

// This method calls a GPT model to generate a description given an image.
export const getDescription = async (imageUrl: string) => {
  try {
    const completion = await generateDescription(imageUrl);

    if (completion?.parsed) {
      return completion.parsed;
    } else {
      return completion.refusal;
    }
  } catch (error) {
    console.error('Error in analyzeGarmentSketch:', error);
    throw error;
  }
}

// This method calls a GPT model to generate the techpack information given a description.
export const getTechpackPages = async (imageUrl: string, techpackForm: TechpackForm) => {
  try {
    const completion = await generateTechPack(imageUrl, techpackForm);

    if (completion?.parsed) {
      return completion.parsed;
    } else {
      return completion.refusal;
    }
  } catch (error) {
    console.error(`Error in getting Techpack info:`, error);
    throw error;
  }
}
