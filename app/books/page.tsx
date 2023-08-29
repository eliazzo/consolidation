"use client"
import { BookImg } from "./components/BookImg"

const murakami = "isbn/0099448823-L"
const keegan = "isbn/9780802158741"
const zevin = "isbn/9780593321218"

const bookArr = [murakami, keegan, zevin]



const Books = ( ) => { 
  
  return (
    <div className="border-black border-2 flex-col">
    <h1>Recent reads</h1>
    {bookArr.map((book) => (
      <BookImg key={book} book={book}/>
    ))}
    </div>
  )
}

export default Books