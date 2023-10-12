import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  book: string;
}

export const BookImg = ({ book }: Props) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const loadImage = async () => {
      const response = await fetch(`/api/books?id=${book}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      const url = data.url
      
      setImageSrc(url)
      }
    loadImage()
  }, []);

  return (
    <Image
      src={imageSrc}
      alt="book cover"
      width={200}
      height={320}
      className="mt-4 my-4"
    />
  );
};
