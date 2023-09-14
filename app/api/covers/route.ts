const fetchImage = async (url: string): Promise<HTMLImageElement> => {
  const img = new Image();
  return new Promise((res, rej) => {
    img.onload = () => res(img);
    img.onerror = (e) => rej(e);
    img.src = url;
  });
};

export default fetchImage;
