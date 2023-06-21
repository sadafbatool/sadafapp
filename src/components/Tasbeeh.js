import { useState } from "react";

function Tasbeeh() {
  const [newInput, setNewInput] = useState(0);
  const handleClick = () => {
    setNewInput(newInput + 1);
  };
  const handleReset = () => {
    setNewInput(0);
  };
  console.log("sdfasdf");
  return (
    <div>
      <h1>TASBEEH COUNTER</h1>
      <input type="number" value={newInput} />
      <button onClick={handleClick}>Count</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default Tasbeeh;
