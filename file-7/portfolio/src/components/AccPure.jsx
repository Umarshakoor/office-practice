import React from "react";
import "./accpure.css";

function AccPure() {
  return (
    <div>
      <div>
        <div>
          <input type="checkbox" id="title1" />
          <label htmlFor="title1">Accordion1</label>
          <div className="content">
            <p>
              your content goes here inside this division with the class content
            </p>
          </div>
        </div>
        <div>
          <input type="checkbox" id="title2" />
          <label htmlFor="title2">Accordion2</label>
          <div className="content">
            <p>
              your content goes here inside this division with the class content
            </p>
          </div>
        </div>
        <div>
          <input type="checkbox" id="title3" />
          <label htmlFor="title3">Accordion3</label>
          <div className="content">
            <p>
              your content goes here inside this division with the class content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccPure;
