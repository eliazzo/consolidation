import React, { useState, useEffect } from "react";
import Image from "next/image";

import fetchImage from "../../api/covers/route";

interface Props {
  book: string;
}

export const BookImg = ({ book }: Props) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const loadImage = async () => {
      try {
        const img = await fetchImage(
          `https://covers.openlibrary.org/b/${book}.jpg`,
        );
        setImageSrc(img.src);
      } catch (error) {
        console.error("error loading image");
      }
    };

    loadImage();
  }, [book]);

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
