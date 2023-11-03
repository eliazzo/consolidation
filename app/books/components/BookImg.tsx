import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
  book: StaticImageData;
}

export const BookImg = ({ book }: Props) => {

  return (
    <Image
      src={book}
      alt="book cover"
      width={200}
      height={320}
      className="mt-4 my-4"
    />
  );
};
