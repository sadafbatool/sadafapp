import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import Tasbeeh from "./Tasbeeh";
import Calculator from "./Calculator";
import ResponsiveAppBar from "./navbar";
import Todo from "./Todo";

import TodoWithCss from "./Update";
function Approuter() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="calculator" element={<Calculator />} />
        <Route path="muitodo" element={<Todo />} />
        <Route path="csstodo" element={<TodoWithCss />} />

        <Route path="tasbeeh" element={<Tasbeeh />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
