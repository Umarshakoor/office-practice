import "./App.css";
import Cards from "./components/Cards";
import Dangerous from "./components/Dangerous";
// import FetchFort from "./components/FetchFort";
import Navbar from "./components/Navbar";
// import News from "./components/News";
import Prevent from "./components/Prevent";
import Protect from "./components/Protect";
import Statistics from "./components/Statistics";
import Steps from "./components/Steps";
import Symptoms from "./components/Symptoms";
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
      <Protect />
      <Symptoms />
      {/* <News /> */}
    </>
  );
}

export default App;
