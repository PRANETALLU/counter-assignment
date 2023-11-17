// import necessary react testing library helpers here
// import the Counter component here
import React from "react";
import Counter from "../components/Counter";
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />); 
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const msg = screen.getByText("Counter");
  expect(msg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialVal = screen.getByTestId("count");
  expect(initialVal).toHaveTextContent(0); 
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const getIncrement = screen.getByText("+");
  fireEvent.click(getIncrement);
  const incVal = screen.getByTestId("count");
  expect(incVal).toHaveTextContent(1); 
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const getDecrement = screen.getByText("-");
  fireEvent.click(getDecrement);
  const decVal = screen.getByTestId("count");
  expect(decVal).toHaveTextContent(-1); 
});
