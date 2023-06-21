import { useState } from "react";

function Array() {
  const [newInput, setnewInput] = useState("");
  const [array, setArray] = useState([]);
  const handleSave = () => {
    setArray([...array, newInput]);
    setnewInput("");
  };
  const handleDelete = (index) => {
    const updatedArray = array.filter((name, i) => i !== index);
    setArray(updatedArray);
  };
  return (
    <div>
      <label>NEW INPUT</label>
      <input
        value={newInput}
        onChange={(event) => setnewInput(event.target.value)}
      />
      <button onClick={handleSave}>ADD</button>

      <br />
      <ol>
        {array.map((item, index) => (
          <li>
            {item}
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Array;
