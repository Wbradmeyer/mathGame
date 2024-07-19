import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MultProblem from "./components/MultProblem";
import Select from "./components/Select";

function App() {
  const [operator, setOperator] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Select setOperator={setOperator} />} />
          <Route
            path="/problems"
            element={<MultProblem operator={operator} />}
          />
        </Routes>
      </BrowserRouter>
      <Select></Select>
      <MultProblem></MultProblem>
    </>
  );
}

export default App;
