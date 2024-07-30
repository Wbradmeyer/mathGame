import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const MultProblem = (props) => {
  const { operator, setOperator } = props;
  let [level, setLevel] = useState(1);
  // const [answer, setAnswer] = useState("");
  const [answer, setAnswer] = useState(0);
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateNewProblem();
  }, []);

  const handleVals = (e) => {
    setAnswer(e.target.value);
    console.log(`answer is: ${answer}`);
  };

  const generateNewProblem = () => {
    setOperand1(Math.floor(Math.random() * 10 + 1));
    setOperand2(Math.floor(Math.random() * 10 + 1));
  };

  const calculate = (num1, num2, oper) => {
    let total;
    if (oper === "+") {
      total = num1 + num2;
    } else if (operator === "-") {
      if (num2 > num1) {
        total = num2 - num1;
      } else {
        total = num1 - num2;
      }
    } else if (operator === "x") {
      total = num1 * num2;
    }
    setCalculation(total);
  };

  useEffect(() => {
    calculate(operand1, operand2, operator);
  }, [operand1, operand2, operator]);

  const submitHandler = (e) => {
    e.preventDefault();
    calculate(operand1, operand2, operator);
    // if (Number(answer) == calculation) {
    if (answer == calculation) {
      if (level === 10) {
        setMessage("You Win!");
      } else {
        setLevel(level + 1);
        // setAnswer("");
        setAnswer(0);
        if (level == 9) {
          setOperand1(Math.floor(Math.random() * 10 + 11));
          setOperand2(Math.floor(Math.random() * 10 + 11));
        } else if (level >= 5) {
          setOperand1(Math.floor(Math.random() * 10 + 11));
          setOperand2(Math.floor(Math.random() * 10 + 1));
        } else {
          generateNewProblem();
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
          {operand1 >= operand2 ? (
            <div className="problemBox">
              <p className="number">{operand1}</p>
              <div className="operation">
                <p className="number">{operator}</p>
                <p className="number">{operand2}</p>
              </div>
            </div>
          ) : (
            <div className="problemBox">
              <p className="number">{operand2}</p>
              <div className="operation">
                <p className="number">{operator}</p>
                <p className="number">{operand1}</p>
              </div>
            </div>
          )}
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
