// pages/api/techpack/[id].ts
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};
// Define the shape of the response data (adjust as needed)
interface TechpackData {
  id: string;
  image_path: string;
  description: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const { id } = req.query;

  // Check if ID is provided and is a string
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  if (req.method == "POST") {
    const response = await axios.post(`${baseUrl}/inputform/${id}`, req, {
      // responseType: "stream",
      headers: {
        "Content-Type": req.headers["content-type"], // which is multipart/form-data with boundary included
      },
    });
    
    res.status(200).json(response.data);
  }  else if (req.method == "GET") {
    const response = await axios.get(`${baseUrl}/inputform/${id}`, {
      method: "GET"
    });
    res.status(200).json(response.data);
  }
  else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  
};

export default handler;
