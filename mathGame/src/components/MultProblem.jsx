import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const MultProblem = (props) => {
  const { operator, setOperator } = props;
  let [level, setLevel] = useState(1);
  // const [answer, setAnswer] = useState("");
  const [answer, setAnswer] = useState(0);
  const [factor1, setFactor1] = useState(0);
  const [factor2, setFactor2] = useState(0);
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [calculation, setCalculation] = useState(0);
  let product = factor1 * factor2;
  const [message, setMessage] = useState("");

  useEffect(() => {
    // setFactor1(Math.floor(Math.random() * 10 + 1));
    // setFactor2(Math.floor(Math.random() * 10 + 1));
    setOperand1(Math.floor(Math.random() * 10 + 1));
    setOperand2(Math.floor(Math.random() * 10 + 1));
    calculate(operand1, operand2);
  }, []);

  const handleVals = (e) => {
    setAnswer(e.target.value);
  };

  const calculate = (num1, num2) => {
    if (operator == "+") setCalculation(num1 + num2);
    else if (operator == "-") setCalculation(num1 - num2);
    else if (operator == "*") setCalculation(num1 * num2);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // if (Number(answer) == product) {
    if (answer == calculation) {
      if (level == 10) {
        setMessage("You Win!");
      } else {
        setLevel(level + 1);
        // setAnswer("");
        setAnswer(0);
        if (level == 9) {
          // setFactor1(Math.floor(Math.random() * 10 + 11));
          // setFactor2(Math.floor(Math.random() * 10 + 11));
          setOperand1(Math.floor(Math.random() * 10 + 11));
          setOperand2(Math.floor(Math.random() * 10 + 11));
          calculate(operand1, operand2);
        } else if (level >= 5) {
          // setFactor1(Math.floor(Math.random() * 10 + 11));
          // setFactor2(Math.floor(Math.random() * 10 + 1));
          setOperand1(Math.floor(Math.random() * 10 + 11));
          setOperand2(Math.floor(Math.random() * 10 + 1));
          calculate(operand1, operand2);
        } else {
          // setFactor1(Math.floor(Math.random() * 10 + 1));
          // setFactor2(Math.floor(Math.random() * 10 + 1));
          setOperand1(Math.floor(Math.random() * 10 + 1));
          setOperand2(Math.floor(Math.random() * 10 + 1));
          calculate(operand1, operand2);
        }
      }
    }
  };

  return (
    <div>
      <Link to={"/"} className="button">
        Back to Select
      </Link>
      <div className="container">
        <div>
          {message ? <h1>{message}</h1> : <h1>Level {level}</h1>}
          <div className="problemBox">
            {/* <p className="number">{factor1}</p>
            <div className="operation">
              <p className="number">X</p>
              <p className="number">{factor2}</p>
            </div> */}
            <p className="number">{operand1}</p>
            <div className="operation">
              <p className="number">{operator}</p>
              <p className="number">{operand2}</p>
            </div>
          </div>
          <hr />
          <form onSubmit={submitHandler}>
            <input
              type="number"
              name="answer"
              id="answer"
              className="answer"
              onChange={handleVals}
              value={answer}
            />
            <button>Submit</button>
          </form>
        </div>
        <div className="character">
          {message ? (
            <img
              src="./src/assets/SMBWInvincibleMarioShadow.webp"
              alt="invincibility picture"
              className="invincible"
            />
          ) : level == 10 ? (
            <img
              src="./src/assets/bowser.webp"
              alt="bowser picture"
              className="bowser"
            />
          ) : (
            <img
              src="./src/assets/Redplumberholdingstar.webp"
              alt="mario with star pic"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MultProblem;
