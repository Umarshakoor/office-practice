import "./App.css";
// import FetchFort from "./components/FetchFort";
import Navbar from "./components/Navbar";
import Prevent from "./components/Prevent";
import Statistics from "./components/Statistics";
import WhatCrona from "./components/WhatCrona";

function App() {
  return (
    <>
      <Navbar />
      <Prevent />
      <Statistics />
      <WhatCrona />
    </>
  );
}

export default App;
