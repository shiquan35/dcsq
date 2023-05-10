import { useState, useEffect } from "react";
import "./images.css";
import image1 from "../images/us/smile.jpg";

function Laugh() {
  const [images, setImages] = useState([image1]);
  return (
    <>
      {/* <img src={image1} alt="Image 1" />
      <img src={image2} alt="Image 2" /> */}

      {images.map((image) => {
        return <img src={image} />;
      })}
    </>
  );
}

export default Laugh;
