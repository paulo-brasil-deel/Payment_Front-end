import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import App from "./App"

describe("<App />", () => {
    beforeEach(() => {
      render(<App />);
    });
  
    describe("when a input field is typed", () => {
        beforeEach(() => {
     
          userEvent.type(screen.getByTestId("holder"),"James Potter")

          //Only accepts number as input
          userEvent.type(screen.getByTestId("number"),"not a number")
  
          //Can't have more then 4 digets
          userEvent.type(screen.getByTestId("cvv"),"12345")                  
          
        });
    
        it("then validates the content", () => {
          expect(screen.getByPlaceholderText(/Please enter your credit card number/i)).toHaveDisplayValue("");
          expect(screen.getByTestId("Cardcvv")).toHaveTextContent("1234")
          expect(screen.getByDisplayValue('James Potter')).toBeInTheDocument;        
          
        });
      });


    describe("when a user fills the form", () => {
        beforeEach(() => {
          userEvent.type(screen.getByTestId("holder"),"James Potter")
          userEvent.type(screen.getByTestId("number"),"1111111111")
          userEvent.type(screen.getByTestId("cvv"),"1234")        
          
        });
  
        it("then updates the creditCardView component", () => {
          expect(screen.getByTestId("cardNum")).toHaveTextContent("1111 11111 1")
          expect(screen.getByTestId("cardName")).toHaveTextContent("James Potter")
          expect(screen.getByTestId("Cardcvv")).toHaveTextContent("1234")
        });
      });   
  

  });




