import "./App.css";
import WidthHeightMinMax from "./components/WidthHeightMinMax";
// import FlexLayout from "./components/FlexLayout";
// import GridResponsive from "./components/GridResponsive";
// import ImageSlider from "./ImageSlider";

function App() {
  return (
    /*    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "500px",
        margin: "0 auto",
      }}
      className="image-slider-div"
    >
      <ImageSlider />
    </div> */
    <div>
      {/* <FlexLayout /> */}
      {/* <GridResponsive /> */}
      <WidthHeightMinMax />
    </div>
  );
}

export default App;
