import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Select = (props) => {
  const navigate = useNavigate();
  const { operator, setOperator } = props;

  const handleVals = (e) => {
    setOperator(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/problems");
  };

  return (
    <div>
      <div className="selectContainer">
        <h1>Mario Math Game</h1>
        <h2>Please select what type of problems you'd like.</h2>
        <form onSubmit={submitHandler} className="selectForm">
          <select
            name="operator"
            id="operator"
            className="selectOperator"
            onChange={handleVals}
          >
            <option value="+">Addition +</option>
            <option value="-">Subtraction -</option>
            <option value="x">Multiplication x</option>
            <option value="/">Division /</option>
          </select>
          <button>Choose</button>
        </form>
      </div>
    </div>
  );
};

export default Select;
