import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  it("renders the correct number of buttons", () => {
    const totalPosts = 25;
    const postsPerPage = 5;
    const setCurrentPage = jest.fn();
    const currentPage = 1;
    render(
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(Math.ceil(totalPosts / postsPerPage));
  });

  it("calls setCurrentPage when a button is clicked", () => {
    const totalPosts = 25;
    const postsPerPage = 5;
    const setCurrentPage = jest.fn();
    const currentPage = 1;
    render(
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    );
    const button = screen.getByText("2");
    userEvent.click(button);
    expect(setCurrentPage).toHaveBeenCalledWith(2);
  });

  it("adds the active class to the current page button", () => {
    const totalPosts = 25;
    const postsPerPage = 5;
    const setCurrentPage = jest.fn();
    const currentPage = 3;
    render(
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    );
    const activeButton = screen.getByText("3");
    expect(activeButton).toHaveClass("active");
  });
});
