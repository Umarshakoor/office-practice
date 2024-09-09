import * as react from "react";
import Quotes from "./Quotes";
import FancyText from "./FancyText";

export default function InspirationGenerator(props) {
  const [index, setIndex] = react.useState(0);
  const Quote = Quotes[index];
  const next = () => setIndex((index + 1) % Quotes.length);

  return (
    <>
      <p>Your Inspiration quote is:</p>
      <FancyText text={Quote} />
      <button onClick={next}>Next Quote</button>
    </>
  );
}
