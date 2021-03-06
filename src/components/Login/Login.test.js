import React from 'react'
import  { render, fireEvent } from '@testing-library/react';
import Login from './Login.js';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Login', () => {
  it('should render text that we expect', () => {
    const { getByRole, getByTestId, getByPlaceholderText, getByText } = render(<Login logInUser={jest.fn()}/>)

    const entireFormElement = getByTestId("form")
    const formHeadElement = getByTestId("header")
    const nameInputElement = getByPlaceholderText("Name")
    const emailInputElement = getByPlaceholderText("Email")
    const selectElement = getByText("---Please select reason for visit---")
    const buttonElement = getByRole("button")

    expect(entireFormElement).toBeInTheDocument()
    expect(formHeadElement).toBeInTheDocument()
    expect(nameInputElement).toBeInTheDocument()
    expect(emailInputElement).toBeInTheDocument()
    expect(selectElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })

  it('should allow user to login', () => {
    const mockSubmitLogin = jest.fn();

    const { getByRole, getByPlaceholderText, getByTestId } = render(<Router><Login logInUser={mockSubmitLogin}/></Router>)

    fireEvent.change(getByPlaceholderText("Name"), {target: {value: 'Dan'}})
    fireEvent.change(getByPlaceholderText("Email"), {target: {value: 'dreardon1021@gmail.com'}})
    fireEvent.change(getByTestId("select"), {target: {value: 'business'}})

    fireEvent.click(getByRole("button"))

    expect(mockSubmitLogin).toHaveBeenCalledWith({
      name: "Dan",
      favorites: [],
      email: 'dreardon1021@gmail.com',
      visitReason: 'business'
    })
  })

  it('should display an error message if form is invalid', () => {
    const mockSubmitLogin = jest.fn();

    const { getByText, getByRole, getByPlaceholderText, getByTestId } = render(<Login logInUser={mockSubmitLogin}/>)

    fireEvent.change(getByPlaceholderText("Name"), {target: {value: ''}})
    fireEvent.change(getByPlaceholderText("Email"), {target: {value: 'dreardon1021@gmail.com'}})
    fireEvent.change(getByTestId("select"), {target: {value: 'business'}})

    fireEvent.click(getByRole("button"))

    const errorMessageElement = getByText("Please enter a valid name")

    expect(errorMessageElement).toBeInTheDocument()
  })
})