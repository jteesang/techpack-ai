import { createClient, getImageUrl } from "@/app/services/db";
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
  console.log(`in api/image/techpack endpoint`)

  if (req.method == "GET") {
    console.log(`\nIN api/image/ GET method`)
    // Check if ID is provided and is a string
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const inputForm = await getImageUrl(id);
    res.status(200).json(inputForm)
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;