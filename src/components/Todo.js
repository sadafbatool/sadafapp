import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Todo() {
  const [newInput, setnewInput] = useState("");
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
      value: newInput,
    };
    setArray([...array, data]);
    localStorage.setItem("todoItems", JSON.stringify([...array, data]));
    setnewInput("");
  };
  const handleDelete = (id) => {
    const updatedArray = array.filter((item) => item.id !== id);

    localStorage.setItem("todoItems", JSON.stringify(updatedArray));
    setArray(updatedArray);
  };
  const handleEdit = (item, index) => {
    setnewInput(item.value);
    setEditedId(item.id);
  };
  const handleUpdate = () => {
    const updatedArray = array.map((item) =>
      item.id === editedId ? { ...item, value: newInput } : item
    );
    setArray(updatedArray);
    localStorage.setItem("todoItems", JSON.stringify(updatedArray));
    setnewInput("");
  };
  const handleComplete = (id) => {
    const updatedArray = array.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setArray(updatedArray);
    localStorage.setItem("todoItems", JSON.stringify(updatedArray));
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          value={newInput}
          onChange={(event) => setnewInput(event.target.value)}
        />
      </Box>

      {/* <label>New Input</label>
      <input
        value={newInput}
        onChange={(event) => setnewInput(event.target.value)}
      /> */}
      {editedId ? (
        <Button variant="contained" onClick={handleUpdate}>
          {""}
          UPDATE
        </Button>
      ) : (
        <Button variant="contained" onClick={handleSave}>
          ADD
        </Button>
      )}

      <br />
      <ol>
        {array.map((item) => (
          <li className={item.completed && "completed"}>
            <input onChange={() => handleComplete(item.id)} type="checkbox" />
            {item.value}

            <Stack spacing={2} direction="row">
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(item.id)}
              >
                <DeleteIcon />
              </IconButton>

              {/*  <Button variant="contained" onClick={() => handleDelete(index)}>
                Delete
              </Button> */}
              {/* <Button
                variant="contained"
                onClick={() => handleEdit(item, index)}
              >
                Edit
              </Button> */}
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 2,
                  },
                }}
              >
                <IconButton
                  color="secondary"
                  aria-label="add an edit"
                  onClick={() => handleEdit(item)}
                >
                  <EditIcon />
                </IconButton>
              </Box>
            </Stack>
            {/*  <button onClick={() => handleDelete(index)}>Delete</button> */}
            {/*  <button onClick={() => handleEdit(item, index)}>Edit</button> */}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Todo;
