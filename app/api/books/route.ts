import { NextResponse } from "next/server"

// create book arr and iterate to render multiple covers
export const GET = async (req: Request) => {
  const book = "isbn/9780593466322"
  const response = await fetch(`https://covers.openlibrary.org/b/${book}.json`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  const url = data.source_url
  return NextResponse.json({ url })
}






