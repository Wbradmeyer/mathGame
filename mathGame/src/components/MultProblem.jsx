import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const MultProblem = () => {
  // const navigate = useNavigate();
  let [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState("");
  const [factor1, setFactor1] = useState(0);
  const [factor2, setFactor2] = useState(0);
  let product = factor1 * factor2;

  useEffect(() => {
    setFactor1(Math.floor(Math.random() * 10 + 1));
    setFactor2(Math.floor(Math.random() * 10 + 1));
  }, []);

  const handleVals = (e) => {
    setAnswer(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (Number(answer) == product) {
      setLevel(level + 1);
      setAnswer("");
      if (level == 9) {
        setFactor1(Math.floor(Math.random() * 10 + 11));
        setFactor2(Math.floor(Math.random() * 10 + 11));
      } else if (level >= 5) {
        setFactor1(Math.floor(Math.random() * 10 + 11));
        setFactor2(Math.floor(Math.random() * 10 + 1));
      } else {
        setFactor1(Math.floor(Math.random() * 10 + 1));
        setFactor2(Math.floor(Math.random() * 10 + 1));
      }
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
          {level == 10 ? (
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
