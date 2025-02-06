import { generate3DVisualization, generateFlatSketch } from "@/app/services/ai";
import { createClient, getImageUrl, getTechpackForm, saveGeneratedImages } from "@/app/services/db";
import { NextApiRequest, NextApiResponse } from "next";

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
  console.log(`in api/sketch/techpack endpoint`)

  if (req.method == "GET") {
    console.log(`\nIN api/sketch/ GET method`)
    // Check if ID is provided and is a string
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const formResponse = await getTechpackForm(id);
    console.log(formResponse);
    const flatSketchResponse = await generateFlatSketch(formResponse);
    const visualSketchResponse = await generate3DVisualization(formResponse);
    const saveGeneratedImgResponse = await saveGeneratedImages(id, flatSketchResponse as string, visualSketchResponse as string);
    return res.status(200).json({saveGeneratedImgResponse})
    
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;