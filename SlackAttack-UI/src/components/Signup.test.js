import { render} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";

describe("SignUp Component", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
  });

  it("displays error messages for invalid input", async () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );

  });

});

