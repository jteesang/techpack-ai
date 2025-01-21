// pages/api/techpack/[id].ts
import { Techpack, TechpackForm, TechpackPages } from "@/app/types";
import { getTechpackForm, getTechpackOrCreate, saveTechpackForm, saveTechpackPages } from "@/app/services/db";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from "formidable";
import { getTechpackPages } from "@/app/services/ai";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = formidable();
  const { id } = req.query;
  console.log(`in inputform api call`)
  // Check if ID is provided and is a string
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }
  if (req.method == "POST") {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form data:', err);
        return res.status(400).json({ error: 'Error parsing form data.' });
      }

      // Here, `fields` contains the text inputs and `files` contains file uploads
      const body = Object.fromEntries(
        Object.entries(fields).map(([key, value]) => [key, value ? value[0] || '' : ''])
      );
      console.log(`body: `, body)
      try {
        // const techpackFormResponse = await saveTechpackForm(body as unknown as TechpackForm); 
        const techpackFormResponse = await getTechpackOrCreate(id, body as unknown as TechpackForm);
        const generatePagesResponse = await getTechpackPages(body.imageUrl, techpackFormResponse as unknown as TechpackForm);
        const savePagesResponse = await saveTechpackPages(generatePagesResponse as TechpackPages);
        return res.status(200).json(savePagesResponse)
      } catch (error) {
        console.error(`Error saving and generating techpack content`, error)
        return res.status(500).json({ error: "Internal Server Error" });
      }
      
    });
  } 
  else if (req.method == "GET") {
    try {
      const inputForm = await getTechpackForm(id);
      console.log(`GET endpoint getTechpackForm: ${JSON.stringify(inputForm)}`)
      return res.status(200).json(inputForm)
    } catch (error) {
      console.error(`Error fetching techpack`, error)
      return res.status(500).json({ error: "Internal Server Error"})
    }
  }
  else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  
};

export default handler;
