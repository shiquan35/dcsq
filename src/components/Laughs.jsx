import { useState, useEffect } from "react";
import { storage } from "../firebase.js";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import "./images.css";

function Laughs() {
  const [images, setImages] = useState([]);
  const imagesRef = ref(storage, "laugh/");

  useEffect(() => {
    listAll(imagesRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImages((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <h6>Laughs</h6>
      <h6>firebase is working</h6>
      {images.map((image) => {
        return <img src={image} />;
      })}
    </>
  );
}

export default Laughs;
