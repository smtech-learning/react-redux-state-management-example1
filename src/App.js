import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import increment from "./actions/increment";

function App() {
  const counter = useSelector(state => state.counter);
  // const counter2 = useSelector(state => state.isLoggedIn);

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1> Counter {counter}</h1>
      <h1> Counter {counter}</h1>
      <button class='btn' onClick={() => dispatch(increment())}>
        Addition
      </button>{" "}
      <br />
      <button class='btn'>Substraction</button> <br />
    </div>
  );
}

export default App;
