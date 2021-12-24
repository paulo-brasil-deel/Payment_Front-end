import React from "react";
import { UseCardInfo } from "../Context/CardInfoContext.jsx";

const CreditCardView = (props) => {
  const {
    cardHolder,
    creditCardNum,
    expireMonth,
    expireYear,
    cvv,
    Ref,
    cardTypeUrl,
  } = UseCardInfo();

  return (
    <div className="card-container">
      <div className="flip-card-inner" ref={Ref}>
        <div className="front">
          <div className="image">
            <img src="img/logos/chip.png" alt="" />
            <img src={cardTypeUrl} alt="" />
          </div>
          <div data-testid="cardNum" className="card-number-box">
            {creditCardNum ? creditCardNum : "#### #### #### ####"}
          </div>

          <div className="flexbox">
            <div className="card-holder">
              <h5  className="card-title">Card Holder</h5>
              <h3 data-testid="cardName" className="card-content">
                {" "}
                {cardHolder ? cardHolder : "AD SOYAD"}{" "}
              </h3>
            </div>

            <div className="expires">
              <h5 className="card-title">Expires</h5>
              <div>
                <h3 className="card-content">
                  {" "}
                  {expireMonth} / {expireYear.slice(-2)}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="back">
          <div className="stripe" />
          <div className="box ">
            <span>cvv</span>
            <div data-testid="Cardcvv" className="cvv-box">{cvv}</div>
            <img src={cardTypeUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardView;
