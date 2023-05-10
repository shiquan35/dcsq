import { useState, useEffect } from "react";
import "./App.css";
import RelationshipDuration from "./components/RelationshipDuration";
import Laugh from "./components/Laugh";
import Us from "./components/Us";

function App() {
  return (
    <>
      <RelationshipDuration />
      {/* <Laughs /> */}
      <Laugh />
      <br />
      <Us />
    </>
  );
}

export default App;
