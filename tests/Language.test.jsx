import { beforeEach, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "chai";
import { BrowserRouter } from "react-router-dom";
import { Language } from "../src/components/header/Language";

describe("Location Component", () => {
  beforeEach(() =>
    render(
      <BrowserRouter initialIndex={["/"]}>
        <Language />
      </BrowserRouter>,
    ),
  );

  it("Hovering over the location should show the options to check the locations", async () => {
    const languageContainer = await screen.getByText(/EN/);
    await userEvent.hover(languageContainer);

    const chooseLanguage = await screen.getByText(/choose language/i);

    expect(chooseLanguage).toBeInTheDocument();
  });
});
