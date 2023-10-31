import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'home' links", () => {
      const expectedTextHome = "home";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const navigationLinkHome = screen.getByRole("link", {
        name: expectedTextHome,
      });

      expect(navigationLinkHome).toBeInTheDocument();
    });
  });
});

describe("When it is rendered", () => {
  test("Then it should show 'create' links", () => {
    const expectedTextCreate = "create";

    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );

    const navigationLinkCreate = screen.getByRole("link", {
      name: expectedTextCreate,
    });

    expect(navigationLinkCreate).toBeInTheDocument();
  });
});
