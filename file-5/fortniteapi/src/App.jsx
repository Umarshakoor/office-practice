import "./App.css";
import Cards from "./components/Cards";
import Dangerous from "./components/Dangerous";
// import FetchFort from "./components/FetchFort";
import Navbar from "./components/Navbar";
import Prevent from "./components/Prevent";
import Statistics from "./components/Statistics";
import Steps from "./components/Steps";
import WhatCrona from "./components/WhatCrona";

function App() {
  return (
    <>
      <Navbar />
      <Prevent />
      <Statistics />
      <WhatCrona />
      <Dangerous />
      <Steps />
      <Cards />
    </>
  );
}

export default App;
