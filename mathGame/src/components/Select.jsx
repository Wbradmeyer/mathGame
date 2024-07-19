import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Select = (props) => {
  const navigate = useNavigate();
  const [operator, setOperator] = props;

  const handleVals = (e) => {
    setOperator(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/problems");
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={submitHandler}>
          <select name="operator" id="operator" onChange={handleVals}>
            <option value="+" selected>
              +
            </option>
            <option value="-">-</option>
            <option value="*">X</option>
            <option value="/">/</option>
          </select>
          <button>Choose</button>
        </form>
      </div>
    </div>
  );
};

export default Select;
