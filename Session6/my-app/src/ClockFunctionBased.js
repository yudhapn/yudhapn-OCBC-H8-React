import { useEffect, useState } from "react";

export default function ClockFunctionBased() {
  const [date, setDate] = useState(new Date());

  const tick = () => setDate(new Date());

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

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
