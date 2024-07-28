import React from "react";
import "./flexlayout.css";

function FlexLayout() {
  return (
    <div className="wrapper">
      <header className="header">
        <h1>Headrer</h1>
      </header>
      <article className="main">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          praesentium nisi a illo impedit aperiam! Corporis laboriosam iste odit
          alias excepturi iusto porro possimus harum aperiam? Rem laborum sunt
          obcaecati!
        </p>
      </article>
      <aside className="aside aside1">
        <h1>aside 1</h1>
      </aside>
      <aside className="aside aside1">
        <h1>aside 2</h1>
      </aside>
      <footer className="footer">
        <h1>footer</h1>
      </footer>
    </div>
  );
}

export default FlexLayout;
