// pages/api/techpack/[id].ts
import { TechpackForm } from "@/app/types";
import { getTechpackForm, saveTechpackForm } from "@/app/services/db";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from "formidable";

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
      console.log('Fields:', fields); // Access non-file inputs
      const body = Object.fromEntries(
        Object.entries(fields).map(([key, value]) => [key, value ? value[0] || '' : ''])
      );
      const response = await saveTechpackForm(body as unknown as TechpackForm);
      return res.status(200).json(response);
    });






    // console.log(`[id].ts body: ${JSON.stringify(body)}`)
    // const response = await saveTechpackForm(body as unknown as TechpackForm);
    // res.status(200).send(response)
  } 
  else if (req.method == "GET") {
    const inputForm = await getTechpackForm(id);
    console.log(`getTechpackForm: ${JSON.stringify(inputForm)}`)
    res.status(200).send(inputForm)
  }
  else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  
};

export default handler;
