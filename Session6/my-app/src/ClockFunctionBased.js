import { useState } from "react";

export default function ClockFunctionBased() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  setInterval(() => tick(), 1000);

  return (
    <>
      <div className="App">
        <h1>Realtime Clock Component Function-Based</h1>
        <hr />
        <h1>{date.toLocaleTimeString()}</h1>
      </div>
    </>
  );
}
