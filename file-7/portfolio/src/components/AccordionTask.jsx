import { useState } from "react";
import "./Accordion.css";
import logo from "../assets/gradient.png";

function AccordionTask() {
  const [tabName, setTabName] = useState("Inspection Form");
  /*   const [accordions] = useState([
    {
      name: "Accordion 1",
      checkboxes: [
        { id: 1, label: "Checkbox 1", type: "checkbox" },
        { id: 2, label: "Checkbox 2", type: "checkbox" },
      ],
    },
    {
      name: "Accordion 2",
      checkboxes: [
        { id: 3, label: "Checkbox 3", type: "checkbox" },
        { id: 4, label: "Checkbox 4", type: "checkbox" },
      ],
    },
    {
      name: "Accordion 2",
      checkboxes: [
        { id: 3, label: "Checkbox 3", type: "checkbox" },
        { id: 4, label: "Checkbox 4", type: "checkbox" },
      ],
    },
    {
      name: "Accordion 2",
      checkboxes: [
        { id: 3, label: "Checkbox 3", type: "checkbox" },
        { id: 4, label: "Checkbox 4", type: "checkbox" },
      ],
    },
    {
      name: "Accordion 2",
      checkboxes: [
        { id: 3, label: "Checkbox 3", type: "checkbox" },
        { id: 4, label: "Checkbox 4", type: "checkbox" },
      ],
    },
  ]); */

  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="app-wrapper">
      <header>
        <div className="img-h3">
          <img src={logo} alt="App Logo" className="img-logo" />
          <h3 className="tabname">{tabName}</h3>
        </div>
      </header>
      <main>
        <div className="progress-div">
          <progress className="progress" value="20" max="100"></progress>
          <span className="progress-span">20%</span>
        </div>
        <div className="Transmission">
          <h3 className="tran-text">Transmission</h3>
        </div>
        <section className="accordion">
          <div>
            <input type="checkbox" id="title1" />
            <label htmlFor="title1">Gear Shifting</label>
            <div className="content">
              <p>Question1</p>
              <p>Question2</p>
            </div>
          </div>
          <div className="dropdown">
            <div className="arrow-btn">
              <div className="arrow-down">^</div>
              <h3 className="dropbtn">Gear Shifting</h3>
            </div>
            <h3 className="dropbtn">2 Question</h3>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="dropdown">
            <div className="arrow-btn">
              <div className="arrow-down">^</div>
              <h3 className="dropbtn">Mountings</h3>
            </div>
            <h3 className="dropbtn">3 Question</h3>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="dropdown">
            <div className="arrow-btn">
              <div className="arrow-down">^</div>
              <h3 className="dropbtn">Noise</h3>
            </div>
            <h3 className="dropbtn">2 Question</h3>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="dropdown">
            <div className="arrow-btn">
              <div className="arrow-down">^</div>
              <h3 className="dropbtn">Fluid and Oil Leaks</h3>
            </div>
            <h3 className="dropbtn">5 Question</h3>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="dropdown">
            <div className="arrow-btn">
              <div className="arrow-down">^</div>
              <h3 className="dropbtn">Gear Selector and Lever</h3>
            </div>
            <h3 className="dropbtn">2 Question</h3>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="btn-div">
          <button className="btn-previous">Previous</button>
          <button className="btn-next">Next</button>
        </div>
      </footer>
    </div>
  );
}

export default AccordionTask;
