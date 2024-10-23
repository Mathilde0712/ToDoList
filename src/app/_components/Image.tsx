/* eslint-disable @next/next/no-img-element */
export const Image = ({ src, alt }: { src: string; alt: string }) => {
  return <img className="w-5 " src={src} alt={alt} />;
};
