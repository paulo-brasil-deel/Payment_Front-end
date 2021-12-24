import React from "react";
import "./App.css";
import CreditCardView from "./components/CreditCard/CreditCardView";
import CardForm from "./components/CardForm/CardForm";
import CardInfoProvider from "./components/Context/CardInfoContext";

function App() {
  return (
    <CardInfoProvider>
      <div className="container">
        <CreditCardView />
        <CardForm />
      </div>
    </CardInfoProvider>
  );
}

export default App;
