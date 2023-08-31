import React, { useState, useEffect } from 'react';
import Image from "next/image";

import fetchImage from '../../api/covers/route';

interface Props {
  book: string
}

export const BookImg = ( {book}: Props ) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);

  useEffect(() => {
    const loadImage = async () => {
    try {
    const img = await fetchImage(`https://covers.openlibrary.org/b/${book}.jpg`)
    setImageSrc(img.src)
    setImageWidth(img.width);
    setImageHeight(img.height);
    } catch (error) {
      console.error('error loading image')
    }
  }

  loadImage()

  }, [book])

  return (
    <div className="justify-center items-center text-center">
    <Image src={imageSrc} alt="book cover" width={imageWidth} height={imageHeight}/>
    </div>
  )

}