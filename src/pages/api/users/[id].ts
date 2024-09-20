import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;      
  // Check if ID is provided and is a string
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }  
  if (req.method == "GET") {
    console.log(`IN USERS[ID] MIDDLEWARE --- GET CALL`)
    const response = await axios.get(`${baseUrl}/users/${id}`, {
      method: "GET"
    });
    if (response.status == 404) {
      return res.status(404).json({ error: 'No entry found' })
    }
    res.status(200).json(response.data);
  } else if (req.method == "POST") {
    console.log(`IN USERS[ID] MIDDLEWARE --- POST CALL`)
    const { id } = req.query;
    const response = await axios.post(`${baseUrl}/users/${id}`, req, {
      // responseType: "stream",
      headers: {
        "Content-Type": req.headers["content-type"], // which is multipart/form-data with boundary included
      },
    });
    return res.status(200).json({response})
  }
  else {
    console.log(`IN USERS[ID] MIDDLEWARE --- METHOD DENIED`)
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;