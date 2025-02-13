import { getTechpackPages, getTechpacksForUser } from "@/app/services/db";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    // Check if ID is provided and is a string
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    if (req.method == "GET") {
      //const techpacks = await getTechpacksForUser(id);
      const techpackPages = await getTechpackPages(id);
      console.log(`techpackPages: ${JSON.stringify(techpackPages)}`)
      return res.status(200).json(techpackPages)
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;