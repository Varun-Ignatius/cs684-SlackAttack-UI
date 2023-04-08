import {getByLabelText, render, screen, fireEvent, getByTestId} from '@testing-library/react';
import Login from './Login';
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import SignUp from "./Signup";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

it("renders without crashing", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
  });

it('renders the Login form correctly', () => {
  render(<Login />);
  const usernameInput = screen.getByTestId('username');
  const passwordInput = screen.getByTestId('password');
  const submitButton = screen.getByTestId('submitButton');
  const checkboxButton = screen.getByTestId('custom-checkbox');

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(checkboxButton).toBeInTheDocument();
});












