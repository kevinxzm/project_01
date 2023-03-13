import React, { useReducer } from "react";
import Father from "./components/Father";

export const Context = React.createContext();

const intialValue = { uname: "reese", age: 20 };
const reducer = (value, action) => {
  if (action.type === "add") {
    return { ...value, age: value.age + 1 };
  }

  if (action.type === "sub") {
    return { ...value, age: value.age - 1 };
  }
};

function App() {
  const [value, dispatch] = useReducer(reducer, intialValue);
  function add() {
    return { type: "add" };
  }

  return (
    <Context.Provider value={{ value, dispatch }}>
      <div className="App" data-testid="mytest">
        app
        <div>{value.age}</div>
        <button
          onClick={() => {
            dispatch(add());
          }}
        >
          +1
        </button>
        <hr />
        <Father></Father>
      </div>
    </Context.Provider>
  );
}

export default App;
