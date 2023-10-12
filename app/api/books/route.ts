import { NextResponse } from "next/server"
import { NextApiRequest, NextApiResponse } from "next";

// create book arr and iterate to render multiple covers
export const GET = async (req: NextApiRequest) => {
  const book = req.query.id;
  const response = await fetch(`https://covers.openlibrary.org/b/${book}.json`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  const url = data.source_url
  return NextResponse.json({ url })
}






