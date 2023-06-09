import { useState, useEffect } from "react";
import "./images.css";
import image1 from "../images/laugh/laugh-dinner.jpg";
import image2 from "../images/laugh/laugh-dip.jpg";

function Laugh() {
  const [images, setImages] = useState([image1, image2]);
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
