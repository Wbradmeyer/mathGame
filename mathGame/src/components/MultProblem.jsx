import { React, useState } from "react";
import "../App.css";

const MultProblem = () => {
  let [level, setLevel] = useState(1);
  let factor1 = Math.floor(Math.random() * 10 + 1);
  let factor2 = Math.floor(Math.random() * 10 + 1);
  let product = factor1 * factor2;

  const submitHandler = () => {
    if (e.target.value == product) {
      setLevel(level++);
    }
  };

  return (
    <div>
      <div className="container">
        <div>
          <h1>Level {level}</h1>
          <div className="problemBox">
            <p className="number">{factor1}</p>
            <div className="operation">
              <p className="number">X</p>
              <p className="number">{factor2}</p>
            </div>
          </div>
          <hr />
          <form onSubmit={submitHandler}>
            <input type="number" name="answer" id="answer" className="answer" />
            <button>Submit</button>
          </form>
        </div>
        <div className="character">
          <img
            src="./src/assets/Redplumberholdingstar.webp"
            alt="mario with star pic"
          />
        </div>
      </div>
    </div>
  );
};

export default MultProblem;
