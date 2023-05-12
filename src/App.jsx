import { useState, useEffect } from "react";
import "./App.css";
import RelationshipDuration from "./components/RelationshipDuration";
import Laughs from "./components/Laughs";
import Laugh from "./components/Laugh";
import Us from "./components/Us";

function App() {
  return (
    <>
      <RelationshipDuration />
      <Laughs />
      <br />
      {/* <Laugh /> */}
      <br />
      <Us />
    </>
  );
}

export default App;
