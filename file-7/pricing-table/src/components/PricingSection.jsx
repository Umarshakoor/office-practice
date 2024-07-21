import { Switch } from "@mui/material";
import { useState } from "react";

function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "A common form of lorem ipsum reads: Lorem ipsum dolar sit amet, we provide are best",
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      description:
        "A common form of lorem ipsum reads: Lorem ipsum dolar sit amet, we provide are best",
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      description:
        "A common form of lorem ipsum reads: Lorem ipsum dolar sit amet, we provide are best",
    },
  ];
  return (
    <div>
      <div>
        <h2>here all our Plans</h2>
        <p>
          a simple paragraph is comprised of three major components. The which
          is often a declarative sentence
        </p>
      </div>
      <div>
        <label>
          <span>Montly</span>
          <Switch />
          <span>Yearly</span>
        </label>
      </div>
    </div>
  );
}

export default PricingSection;
