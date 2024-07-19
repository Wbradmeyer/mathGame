import { useState } from "react";
import "./App.css";
import MultProblem from "./components/MultProblem";
import Select from "./components/Select";

function App() {
  const [operator, setOperator] = useState("");

  return (
    <>
      <Select></Select>
      <MultProblem></MultProblem>
    </>
  );
}

export default App;
