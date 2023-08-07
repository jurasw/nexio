import { useRef } from "react";

interface Params {
  primaryImg: string;
  secondaryImg: string;
}

const ImageChangeColor = ({ primaryImg, secondaryImg }: Params) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  return (
    <img
      style={{ margin: "auto", height: "40px", width: "auto", maxWidth: "102px" }}
      onMouseOver={() => {
        if (imageRef.current) {
          imageRef.current.src = secondaryImg;
        }
      }}
      onMouseOut={() => {
        if (imageRef.current) {
          imageRef.current.src = primaryImg;
        }
      }}
      src={primaryImg}
      alt=""
      ref={imageRef}
    />
  );
};

export default ImageChangeColor;
