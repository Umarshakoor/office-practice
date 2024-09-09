import { Switch } from "@mui/material";
import { useState } from "react";
import "./pricesection.css";

function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const handleChange = (event) => {
    setIsYearly(event.target.checked);
  };

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "A common form of lorem ipsum reads: Lorem ipsum dolar sit amet, we provide are best",
      green: "/src/assets/circlegreen.png",
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      description:
        "A common form of lorem ipsum reads: Lorem ipsum dolar sit amet, we provide are best",
      green: "/src/assets/circlegreen.png",
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      description:
        "A common form of lorem ipsum reads: Lorem ipsum dolar sit amet, we provide are best",
      green: "/src/assets/circlegreen.png",
    },
  ];
  return (
    <div className="wrapper">
      <div className="main-text">
        <h2>here all our Plans</h2>
        <p>
          a simple paragraph is comprised of three major components. The which
          is often a declarative sentence
        </p>
      </div>
      <div className="switch">
        <label>
          <span>Montly</span>
          <Switch checked={isYearly} onChange={handleChange} />
          <span>Yearly</span>
        </label>
      </div>
      <div className="map-wrapper">
        {packages.map((pkg, index) => (
          <div key={index} className="map-div" id={`id${index}`}>
            <h3 className="pkg-name">{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p className="pkg-price">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
              <span>/{isYearly ? "year" : "month"}</span>
            </p>
            <ul>
              <li>
                <img src={pkg.green} alt="" height="15px" />
                Videos of Lesson
              </li>
              <li>
                <img src={pkg.green} alt="" height="15px" />
                Ai Access
              </li>
              <li>
                <img src={pkg.green} alt="" height="15px" />
                live call
              </li>
              <li>
                <img src={pkg.green} alt="" height="15px" />
                24/7 customer service
              </li>
              <li>
                <img src={pkg.green} alt="" height="15px" />
                4k high quality
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingSection;
