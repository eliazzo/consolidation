import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  book: string;
}

export const BookImg = ({ book }: Props) => {
  // const [imageSrc, setImageSrc] = useState<Response>();

  useEffect(() => {
    const loadImage = async () => {
      const response = await fetch("/api/books", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
    }
    loadImage()
  }, []);

  return (
    <h1>hello</h1>
    // <Image
    //   src={imageSrc}
    //   alt="book cover"
    //   width={200}
    //   height={320}
    //   className="mt-4 my-4"
    // />
  );
};
