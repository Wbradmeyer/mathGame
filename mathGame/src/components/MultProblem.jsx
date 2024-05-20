import React from "react";
import "../App.css";

const MultProblem = () => {
  let factor1 = Math.floor(Math.random() * 10 + 1);
  let factor2 = Math.floor(Math.random() * 10 + 1);
  let product = factor1 * factor2;

  return (
    <div>
      <div className="container">
        <div>
          <h1>Level 1</h1>
          <div className="problemBox">
            <p className="number">{factor1}</p>
            <div className="operation">
              <p className="number">X</p>
              <p className="number">{factor2}</p>
            </div>
          </div>
          <hr />
          <input type="number" name="answer" id="answer" className="answer" />
          <p className="number">{product}</p>
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
