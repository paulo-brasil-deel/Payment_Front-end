import React from "react";
import "./App.css";
import CreditCardView from "./components/CreditCard/CreditCardView";
import CardForm from "./components/CardForm/CardForm";
import CardInfoProvider from "./components/Context/CardInfoContext";
import Layout from "./components/Layout"

function App() {
  return (
    <Layout>
      <CardInfoProvider>
        <CreditCardView />
        <CardForm />
      </CardInfoProvider>
    </Layout>
  );
}

export default App;
