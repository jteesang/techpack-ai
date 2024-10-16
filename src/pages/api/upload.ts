import { UploadInfo } from "@/app/types";
import { generateDescription } from "@/app/services/ai";
import { createClient, getImagePath, getTechpackForm, saveUploadDescription } from "@/app/services/db";
import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const config = {
  api: {
      bodyParser: false, // Disable default body parsing to handle file uploads
  },
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const form = formidable();

  if (req.method == "POST") {
    form.parse(req, async (err, fields, files: formidable.Files) => {
      if (err) {
          return res.status(500).json({ error: 'Error parsing the files' });
      }
      const fileName = files?.file?.[0]?.originalFilename;
      const filePath = files?.file?.[0]?.filepath; // Adjust as needed
      const uploadName = `${fileName}-${Date.now()}`;

      if (!filePath) {
          return res.status(500).json({ error: 'No file uploaded' });
      }
      // Save file upload info to database
      if (files.file && files.file[0]) {

        //uploadImageToBucket(uploadName, files.file[0]);
        const fileBuffer = fs.readFileSync(filePath);
        const { data: upload, error: uploadError } = await supabase.storage
          .from('images')
          .upload(`public/${uploadName}`, fileBuffer, {
            contentType: files?.file?.[0]?.mimetype || undefined,
            cacheControl: '3600',
            upsert: false,
          });

        if (uploadError) {
          console.error(uploadError);
          throw new Error('Failed to upload the file');
        }

      } else {
        res.status(500).json({ error: 'No file uploaded' });
      }

      // Get Public Signed URL for image
      const imageUrl = getImagePath(uploadName);
      const publicUrl = await imageUrl;
      console.log(`publicUrl: ${publicUrl}`)
      
      // Call AI service to generate description
      const description = await generateDescription(publicUrl);
      let uploadinfo_object: UploadInfo;
      console.log(`description: ${JSON.stringify(description)}`)

      if (description.content) {
        uploadinfo_object = JSON.parse(description.content) as UploadInfo;
        uploadinfo_object.image_path = publicUrl;
        let response = await saveUploadDescription(uploadinfo_object);
        if (response) {
          res.status(201).json(response);
        } else {
          res.status(400).send('Failed to process upload information.');
        }
      } else {
        res.status(404).send('Failed to get upload information.');
      }
  });
  } else if (req.method == "GET") {

    // Check if ID is provided and is a string
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const inputForm = await getTechpackForm(id);
    res.status(200).json(inputForm)
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;