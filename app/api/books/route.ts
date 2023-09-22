// import { NextResponse } from "next/server"
import { NextResponse } from "next/server"

export const GET = async (res: Response) => {
  console.log("hello")
  const book = "isbn/9780593466322"
  const response = await fetch(`https://covers.openlibrary.org/b/${book}.json`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  // const data = await response.blob()
  // const url = URL.createObjectURL(data)
  console.log(data)
  return NextResponse.json({ data })
}






