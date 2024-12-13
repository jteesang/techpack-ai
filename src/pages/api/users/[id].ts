import { getUserDetails } from "@/app/services/db";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;      
  // Check if ID is provided and is a string
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }  
  if (req.method == "GET") {
    const users = getUserDetails(id);
    res.status(200).json(users);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;