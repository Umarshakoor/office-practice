import { useState } from "react";

function ToDo() {
  const [inputText, setInputText] = useState("");
  const [listTodo, SetListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") {
      SetListTodo([...listTodo, inputText]);
    }
  };

  const handleDelete = (index) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    SetListTodo([...newListTodo]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your To Do"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addList(inputText);
            setInputText("");
          }}
        >
          +
        </button>
      </div>
      <div>
        {listTodo.map((listItem, index) => (
          <div key={index}>
            <li>{listItem}</li>
            <button
              onClick={(e) => {
                handleDelete(e);
              }}
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDo;
