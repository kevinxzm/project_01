import { useContext, useState } from "react";
import { Context } from "../../App";

function Son() {
  const value = useContext(Context);
  const [input, setInput] = useState("hahaone");
  return (
    <div
      onClick={() => {
        value.dispatch({ type: "add" });
      }}
      data-testid="son"
    >
      son
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
}

export default Son;
