import FancyText from "./assets/FancyText";
import InspirationGenerator from "./assets/InspirationGenerator";
import Copyright from "./assets/Copyright";

function App(){
  return(
    <>
    <FancyText title text="Get Inspired"/>
    <InspirationGenerator>
      <Copyright year={2004} />
    </InspirationGenerator>
    </>
  );
}

export default App;