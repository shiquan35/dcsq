import { useState, useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import "./images.css";

const LAUGH_FOLDER_NAME = "laugh/";
// const storage = getStorage();

function Laugh() {
  const imagesRef = ref(storage, LAUGH_FOLDER_NAME);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    listAll(imagesRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <h1>laugh</h1>
      {imageUrls.map((url, index) => (
        <img src={url} alt={`Laughing image ${index}`} key={index} />
      ))}
    </>
  );
}

export default Laugh;
