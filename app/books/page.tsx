"use client"
import { BookImg } from "./components/BookImg"

const murakami = "isbn/0099448823-L"
const keegan = "isbn/9780802158741"
const zevin = "isbn/9780593321218"

const bookArr = [murakami, keegan, zevin]



const Books = ( ) => { 
  
  return (
    <div className="border-black border-2 flex-col justify-center items-center">
    <h1 className="text-center">Recent reads</h1>
    <div className="items-center">
    {bookArr.map((book) => (
      <BookImg key={book} book={book}/>
    ))}
    </div>
    </div>
  )
}

export default Books