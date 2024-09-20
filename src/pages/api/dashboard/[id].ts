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
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    if (req.method == "GET") {
      const response = await axios.get(`${baseUrl}/techpacks/${String(id)}`, {
        method: "GET"
      });

      if (response.status == 404) {
        return res.status(404).json({ error: 'No entry found' })
      }
    res.status(200).json(response.data);
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;