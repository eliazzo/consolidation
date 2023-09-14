"use client";
import { BookImg } from "./components/BookImg";

// do these need to be stored somewhere else?
const murakami = "isbn/0099448823-L";
const keegan = "isbn/9780802158741";
const zevin = "isbn/9780593321218";
const salinger = "isbn/9780316769532";
const caldwell = "isbn/9780571353743";
const boyne = "isbn/9781784161002";
const hamid = "isbn/9780241953938";
const atkinson = "isbn/9780593466322";

const bookArr = [
  murakami,
  keegan,
  zevin,
  salinger,
  caldwell,
  boyne,
  hamid,
  atkinson,
];

const Books = () => {
  return (
    <>
      <h1 className="text-center mt-8">Recent reads</h1>
      <div className="flex justify-evenly flex-wrap p-8">
        {bookArr.map((book) => (
          <BookImg key={book} book={book} />
        ))}
      </div>
    </>
  );
};

export default Books;
