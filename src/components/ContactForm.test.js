import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm'
import { act } from "react-dom/test-utils";


test("test the inputs and labels", async () => {
    render(<ContactForm/>)
    const inputFirstName = await screen.findByLabelText(/first name*/i)
    const inputLastName = await screen.findByLabelText(/last name*/i)
    const inputEmail = await screen.findByLabelText(/email*/i)
    const inputMessage = await screen.findByLabelText(/message*/i)

    fireEvent.change(inputFirstName,{target:{ value:"Tony", name:"firstName"}})
    fireEvent.change(inputLastName,{target:{ value:"Cortese", name:"lastName"}})
    fireEvent.change(inputEmail,{target:{ value:"Hello@gmail.com", name:"email"}})
    fireEvent.change(inputMessage,{target:{ value:"hi", name:"message"}})

    const submit = screen.getByTitle('submit')
    
    act(() => {
        fireEvent.click(sconst submit = screen.getByTitle('submit')
    
        act(() => {
        fireEvent.click(submit)
    })
})
  

    
    
    
    // const fNameInput = screen.getByLabelText(/first name/i)
    // const lNameInput = screen.getByLabelText(/last name/i)
    // const emailInput = screen.getByLabelText(/email/i)
    // const messInput = screen.getByLabelText(/message/i)

    // userEvent.type(fNameInput, "Tony" );
    // userEvent.type(lNameInput, "Cortese" );
    // userEvent.type(emailInput, "tony@tony.com" );
    // userEvent.type(messInput, "input, hello, anything" );

    // const button = screen.getByRole("button")

    // userEvent.click(button);

    // const fNameText = screen.queryByText(/first name/i)
    // const lNameText = screen.queryByText(/last name/i)
    // const emailText = screen.queryByText(/email/i)
    // const messText = screen.queryByText(/message/i)

    // expect(fNameText).toBeInTheDocument()
    // expect(lNameText).toBeInTheDocument()
    // expect(emailText).toBeInTheDocument()
    // expect(messText).toBeInTheDocument()

})