import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const [currDate, setCurrDate] = useState();
  const [startDate, setStartDate] = useState();
  const [numYears, setNumYears] = useState();
  const [numMonths, setNumMonths] = useState();
  const [numDays, setNumDays] = useState();
  const [howLong, setHowLong] = useState({});

  // get today's date
  useEffect(() => {
    setCurrDate(new Date().toLocaleDateString("en-GB", options));
    setStartDate(new Date("2022-07-31"));
  }, []);

  // calculate how long we've been together
  useEffect(() => {
    const today = new Date();
    const differenceInTime = today.getTime() - startDate;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    const years = Math.floor(differenceInDays / 365);
    const months = Math.floor((differenceInDays % 365) / 30);
    const days = Math.floor((differenceInDays % 365) % 30);

    setHowLong({
      numYears: years,
      numMonths: months,
      numDays: days,
    });
  }, [startDate]);

  return (
    <>
      <h3>Today's date: {currDate}</h3>
      <h3>
        We've been together for:
        <br />
        {howLong.numYears} Years,
        <br />
        {howLong.numMonths} Months,
        <br />
        {howLong.numDays} Days
      </h3>
    </>
  );
}

export default App;
