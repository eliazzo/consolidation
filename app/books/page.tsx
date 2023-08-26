"use client"
import fetchImage from "../api/covers/route";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const Books = () => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);


  useEffect(() => {
    const loadImage = async () => {
    try {
    const img = await fetchImage("https://covers.openlibrary.org/b/isbn/0099448823-L.jpg")
    setImageSrc(img.src)
    setImageWidth(img.width);
    setImageHeight(img.height);
    } catch (error) {
      console.error('error loading image')
    }
  }

  loadImage()
  

  }, [])
 
  
  return (
    <>
    <h1>list recent reads using books api</h1>
    <Image src={imageSrc} alt="book cover" width={imageWidth} height={imageHeight} />
    </>
  )
}

export default Books