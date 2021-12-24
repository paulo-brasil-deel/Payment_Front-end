import Cleave from "cleave.js/react";
import React from "react";
import "../../App.css";
import { UseCardInfo } from "../Context/CardInfoContext.jsx";

const CardForm = (props) => {
  const {
    updateCardHolder,
    updateCreditCardNum,
    expireYear,
    expireMonth,
    cvv,
    creditCardNum,
    cardHolder,
    updateExpireYear,
    updateExpireMonth,
    updateCardCvv,
    flipBack,
    flipFront,
    updateCardTypeURL,
  } = UseCardInfo();

  function handleOnChange  (e) {
    updateCardHolder(e.target.value);
  };

  function handleCardNumChange  (e) {
    updateCreditCardNum(e.target.value);
  };

  function handleExpMonth  (e) {
    updateExpireMonth(e.target.value);
  };

  function handleExpYear  (e) {
    updateExpireYear(e.target.value);
  };

  function handleCvvUpdate  (e) {
    updateCardCvv(e.target.value);
  };

  function handleCardType (type)  {
    if (type === "visa") {
      updateCardTypeURL("img/logos/visa.png");
    } else if (type === "mastercard") {
      updateCardTypeURL("img/logos/mastercard.png");
    } else if (type === "discover") {
      updateCardTypeURL("img/logos/discover.png");
    } else if (type === "amex") {
      updateCardTypeURL("img/logos/amex.png");
    } else if (type === "diners") {
      updateCardTypeURL("img/logos/dinersclub.png");
    } else if (type === "jcb") {
      updateCardTypeURL("img/logos/unionpay.png");
    }
  };

  function isNumber(n) {
    console.log(!isNaN(parseFloat(n)) && isFinite(n));
    return !isNaN(parseFloat(n));
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!((cvv.length === 4 || cvv.length === 3) && isNumber(cvv))) return false;   

    if (!isNumber(creditCardNum)) return false;

    if (!(cardHolder !== "")) return false;
    if (!(expireYear !== "" && expireYear !== "YY")) return false;
    if (!(expireMonth !== "" && expireMonth !== "MM")) return false;

    const data = {
      creditCardNum,
      cardHolder,
      expireYear,
      expireMonth,
      cvv,
    };
    alert(JSON.stringify(data, null, 2));
    window.location.reload();
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      styles={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
    >
      <div className="inputBox" onClick={flipFront}>
        <span>Card Number</span>
        <Cleave
          required
          delimiter="-"
          options={{
            blocks: [4, 4, 4, 4],
            creditCard: true,
            onCreditCardTypeChanged: handleCardType,
          }}
          onChange={handleCardNumChange}
          placeholder="Please enter your credit card number"
          data-testid="number"
        />
      </div>
      <div className="inputBox" onClick={flipFront}>
        <span>Card Holder</span>
        <input
          data-testid="holder"
          required
          onChange={handleOnChange}
          type="text"
          className="card-holder-input"
          placeholder="Please enter your name"
        />
      </div>
      <div className="flexbox">
        <div className="inputBox" onClick={flipFront}>
          <span>Expiration Date</span>
          <select
            required
            name="Month"
            className="month-input"
            value={expireMonth}
            onChange={handleExpMonth}
            placeholder="Month"
          >
            <option value="month">Month</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className="inputBox" onClick={flipFront}>
          <select
            name="Year"
            className="year-input"
            value={expireYear}
            onChange={handleExpYear}
          >
            <option value="year">
              Year
            </option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
        </div>

        <div className="inputBox" onClick={flipBack}>
          <span>cvv</span>

          <input
            data-testid="cvv"
            required
            type="number"
            maxLength="4"
            className="cvv-input"
            value={cvv}
            onChange={handleCvvUpdate}
          />
        </div>
      </div>
      <input required type="submit" value="submit" className="submit-btn" />
    </form>
  );
};

export default CardForm;
