import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function TodoWithCss() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [editedId, setEditedId] = useState();
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("todoItems"));
    if (savedItems) setArray(savedItems);
  }, []);

  const handleSave = () => {
    const data = {
      id: new Date().getTime(),
      completed: false,
      value: input,
    };
    setArray([...array, data]);
    localStorage.setItem("todoItems", JSON.stringify([...array, data]));
    setInput("");
  };
  const handleDelete = (id) => {
    const updatedArray = array.filter((item) => item.id !== id);
    localStorage.setItem("todoItems", JSON.stringify(updatedArray));
    setArray(updatedArray);
  };
  const handleEdit = (item) => {
    setInput(item.value);
    setEditedId(item.id);
  };
  const handleUpdate = () => {
    const updatedArray = array.map((item) =>
      item.id === editedId ? { ...item, value: input } : item
    );
    setArray(updatedArray);
    localStorage.setItem("todoItems", JSON.stringify(updatedArray));
    setInput("");
  };
  const handleComplete = (id) => {
    const updatedArray = array.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setArray(updatedArray);
    localStorage.setItem("todoItems", JSON.stringify(updatedArray));
  };
  return (
    <div className="container">
      <Form
        input={input}
        setInput={setInput}
        handleSave={handleSave}
        editedId={editedId}
        handleUpdate={handleUpdate}
      />

      <br />

      <List
        array={array}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleComplete={handleComplete}
      />
    </div>
  );
}
export default TodoWithCss;
