import React from "react";
import "./App.css";

const plans = [
  {
    name: "Free",
    price: "$0/month",
    features: [
      { name: "Single User", enabled: true },
      { name: "50GB Storage", enabled: true },
      { name: "Unlimited Public Projects", enabled: true },
      { name: "Community Access", enabled: true },
      { name: "Unlimited Private Projects", enabled: false },
      { name: "Dedicated Phone Support", enabled: false },
      { name: "Free Subdomain", enabled: false },
      { name: "Monthly Status Reports", enabled: false },
    ],
    buttonText: "BUTTON",
  },
  {
    name: "Plus",
    price: "$9/month",
    features: [
      { name: "5 Users", enabled: true },
      { name: "50GB Storage", enabled: true },
      { name: "Unlimited Public Projects", enabled: true },
      { name: "Community Access", enabled: true },
      { name: "Unlimited Private Projects", enabled: true },
      { name: "Dedicated Phone Support", enabled: true },
      { name: "Free Subdomain", enabled: true },
      { name: "Monthly Status Reports", enabled: false },
    ],
    buttonText: "BUTTON",
  },
  {
    name: "Pro",
    price: "$49/month",
    features: [
      { name: "Unlimited Users", enabled: true },
      { name: "50GB Storage", enabled: true },
      { name: "Unlimited Public Projects", enabled: true },
      { name: "Community Access", enabled: true },
      { name: "Unlimited Private Projects", enabled: true },
      { name: "Dedicated Phone Support", enabled: true },
      { name: "Free Subdomain", enabled: true },
      { name: "Monthly Status Reports", enabled: true },
    ],
    buttonText: "BUTTON",
  },
];

const PricingCard = ({ plan }) => {
  return (
    <div className="pricing-card">
      <h2
        style={{
          color:
            plan.name === "Free"
              ? "blue"
              : plan.name === "Plus"
              ? "green"
              : "red",
        }}
      >
        {plan.name}
      </h2>
      <h3 style={{ fontSize: "24px" }}>{plan.price}</h3>
      <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
        {plan.features.map((feature, index) => (
          <li key={index} className={feature.enabled ? "enabled" : "disabled"}>
            {feature.enabled ? (
              <span className="check-mark">✔</span>
            ) : (
              <span className="cross-mark">x</span>
            )}
            {feature.name}
          </li>
        ))}
      </ul>
      <button>{plan.buttonText}</button>
    </div>
  );
};

const PricingTable = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-table">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <PricingTable />
    </div>
  );
}

export default App;
