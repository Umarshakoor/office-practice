import { useState } from "react";
import "./todo.css";

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
    <div className="wrapper">
      <div className="input-btn">
        <div className="app-text">
          <h4>To Do List</h4>
        </div>
        <div className="inp-btn">
          <input
            type="text"
            placeholder="Enter your To Do"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
            className="btn-add"
            onClick={() => {
              addList(inputText);
              setInputText("");
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="map-wrapper">
        {listTodo.map((listItem, index) => (
          <div key={index} className="list-map">
            <div className="li-btn">
              <li>{listItem}</li>
              <button
                className="btn-remove"
                onClick={(e) => {
                  handleDelete(e);
                }}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDo;
