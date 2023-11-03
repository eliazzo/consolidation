"use client";
import { BookImg } from "./components/BookImg";

import homegoing from "../public/assets/homegoing.jpg"
import murakami from "../public/assets/murakami.jpg"
import tomorrow from "../public/assets/tomorrow.jpg"
import demon from "../public/assets/demon.jpg"
import running from "../public/assets/running.jpg"
import catcher from "../public/assets/catcher.jpg"
import intimacies from "../public/assets/intimacies.jpg"
import small from "../public/assets/small.jpg"


const bookArr = [
  homegoing,
  murakami,
  tomorrow,
  demon,
  running,
  catcher,
  intimacies,
  small
];

const Books = () => {
  return (
    <>
      <h1 className="text-center mt-8">Recent reads</h1>
      <div className="flex justify-evenly flex-wrap p-8">
        {bookArr.map((book) => (
          <BookImg book={book} />
        ))}
      </div>
    </>
  );
};

export default Books;
