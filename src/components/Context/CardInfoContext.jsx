import { useState, createContext, useContext, useRef } from "react";

const CardInfoContext = createContext();

export const UseCardInfo = () => useContext(CardInfoContext);

export default function CardInfoProvider(props) {
  const [creditCardNum, setCreditCardNum] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expireMonth, setExpireMonth] = useState("MM");
  const [expireYear, setExpireYear] = useState("YY");
  const [cardTypeUrl, setCardTypeUrl] = useState("img/logos/visa.png");
  const [cvv, setCvv] = useState("");

  const Ref = useRef(null);

  function updateCreditCardNum(value) {
    setCreditCardNum(value);
  }

  function updateCardType(value) {
    setCardType(value);
  }

  function updateCardHolder(value) {
    setCardHolder(value);
  }

  function updateExpireMonth(value) {
    setExpireMonth(value);
  }

  function updateExpireYear(value) {
    setExpireYear(value);
  }

  function updateCardTypeURL(value) {
    setCardTypeUrl(value);
  }

  function updateCardCvv(value) {
    setCvv(value);
  }

  function flipBack  () {
    Ref.current.style.transform = "perspective(1000px) rotateY(-180deg)";
  };

  function flipFront  () {
    Ref.current.style.transform = "perspective(1000px) rotateY(0deg)";
  };

  const value = {
    creditCardNum,
    cardType,
    cardHolder,
    expireMonth,
    expireYear,
    cardTypeUrl,
    cvv,
    Ref,
    updateCreditCardNum,
    updateCardType,
    updateCardHolder,
    updateExpireMonth,
    updateExpireYear,
    updateCardTypeURL,
    updateCardCvv,
    flipBack,
    flipFront,
  };

  return (
    <CardInfoContext.Provider value={value}>
      {props.children}
    </CardInfoContext.Provider>
  );
}
