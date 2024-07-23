import { useState } from "react";
import "./Accordion.css";
import logo from "../assets/gradient.png";

function AccordionTask() {
  const tabName = "Inspection Form";

  const items = [
    {
      id: "0",
      title: "Gear Shifting",
      content: ["Link 1", "Link 2", "Link 3"],
      rightText: "2 Questions",
    },
    {
      id: "1",
      title: "Mountings",
      content: ["Link 1", "Link 2"],
      rightText: "3 Questions",
    },
    {
      id: "2",

      title: "Noise",
      content: ["Link 1", "Link 2", "Link 3"],
      rightText: "2 Questions",
    },
    {
      id: "3",

      title: "Fluid and Oil Leaks",
      content: ["Link 1", "Link 2"],
      rightText: "5 Questions",
    },
    {
      id: "4",
      title: "Gear Selector and Lever",
      content: ["Link 1", "Link 2", "Link 3"],
      rightText: "2 Questions",
    },
  ];

  const createInitialState = () => {
    let obj;
    items.map((item) => {
      obj = {
        ...obj,
        [item.id]: false,
      };
    });

    return obj;
  };

  const [active, setActive] = useState(createInitialState());
  console.log(active);

  const toggleAccordion = (id) => {
    setActive({
      ...active,
      [id]: !active[id],
    });
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
        <section>
          <div className="accordion">
            {items.map((item) => (
              <div key={item.id} className="accordion-item">
                <div
                  className="accordion-title"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="accordion-header">
                    <span
                      className={`arrow ${
                        active[item.id] === true ? "down" : "right"
                      }`}
                    >
                      ^
                    </span>
                    <span className="title">{item.title}</span>
                    <span className="right-text">
                      {item.content.length} Questions
                    </span>
                  </div>
                </div>
                {active[item.id] === true && (
                  <div className="accordion-content">
                    {item.content.map((contentItem, contentIndex) => (
                      <div key={contentIndex}>{contentItem}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
