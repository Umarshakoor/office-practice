import { useState } from "react";

function RenderText() {
  const initialState = false;
  const [text, setText] = useState(initialState);
  function HandleToggle() {
    setText(!text);
  }

  return (
    <div>
      <h1>useState Hook</h1>
      <div>
        {text ? <p>Hello World</p> : null}
        <button onClick={HandleToggle}>Click</button>
      </div>
    </div>
  );
}

export default RenderText;
