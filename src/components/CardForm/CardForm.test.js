import {render,screen, within} from "@testing-library/react"
import CardForm from "./CardForm"
import CardInfoProvider from "../Context/CardInfoContext"
import user from "@testing-library/user-event"

test("renders something",async () => {
    render(
        <CardInfoProvider>
      <div className="container">
        <CardForm />
      </div>
    </CardInfoProvider>
    )
    const cardNumberInput = screen.findAllByPlaceholderText('Please enter your credit card number')
    expect(cardNumberInput).toBeInTheDocument
    user.type(cardNumberInput,"123456789")

    const cardHolderInput = screen.findAllByPlaceholderText('Please enter your name')
    user.type(cardHolderInput,"James Potter")

    const cvvInput = screen.getAllByRole('textbox')
    user.type(cvvInput,"1234")


})




