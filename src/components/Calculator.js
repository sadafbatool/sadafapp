import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Calculator() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  <br />;

  const [result, setResult] = useState("");
  const addMe = () => setResult(parseInt(firstInput) + parseInt(secondInput));
  const subtractMe = () =>
    setResult(parseInt(firstInput) - parseInt(secondInput));
  const multiplyMe = () =>
    setResult(parseInt(firstInput) * parseInt(secondInput));
  const divideMe = () =>
    setResult(parseInt(firstInput) / parseInt(secondInput));

  return (
    <div>
      {/*   <label>First input</label>
      <input
        value={firstInput}
        type="number"
        onChange={(event) => setFirstInput(event.target.value)}
      /> */}
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
          label="First"
          variant="filled"
          value={firstInput}
          type="number"
          onChange={(event) => setFirstInput(event.target.value)}
        />
      </Box>

      <br />
      {/*   <label>Second input</label>
      <input
        value={secondInput}
        type="number"
        onChange={(event) => setSecondInput(event.target.value)}
      /> */}
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
          label="Second"
          variant="filled"
          value={secondInput}
          type="number"
          onChange={(event) => setSecondInput(event.target.value)}
        />
      </Box>

      <br />

      {/*  <button onClick={addMe}>addMe</button> */}
      <Button variant="contained" onClick={addMe}>
        ADD
      </Button>
      <br />
      <br />
      <Button variant="contained" onClick={subtractMe}>
        SUBTRACT
      </Button>
      {/* <button onClick={subtractMe}>subtractMe</button> */}
      <br />
      <br />
      <Button variant="contained" onClick={multiplyMe}>
        MULTIPLY
      </Button>
      {/*   <button onClick={multiplyMe}>multiplyMe</button> */}
      <br />
      <br />
      <Button variant="contained" onClick={divideMe}>
        DIVIDE
      </Button>
      {/* <button onClick={divideMe}>divideMe</button> */}
      <br />
      <br />
      {result}
    </div>
  );
}
export default Calculator;
