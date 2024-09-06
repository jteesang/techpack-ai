import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const { data } = await axios.post(`${baseUrl}/upload`, req, {
      responseType: "stream",
      headers: {
        "Content-Type": req.headers["content-type"], // which is multipart/form-data with boundary included
      },
    });
    data.pipe(res);
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;