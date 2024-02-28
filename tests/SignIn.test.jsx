import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { SignIn } from "../src/components/header/SignIn";
import { BrowserRouter } from "react-router-dom";

describe("SignIn component", () => {
  beforeEach(() =>
    render(
      <BrowserRouter initialIndex={["/"]}>
        <SignIn />
      </BrowserRouter>,
    ),
  );

  it("Hovering over the Accounts should show the drop down", async () => {
    const signinComponent = screen.getByText(/Accounts/i);
    await userEvent.hover(signinComponent);

    const listsText = await screen.findByText(/Your lists/i);
    expect(listsText).toBeInTheDocument();

    const accountInfoText = await screen.findByText(/Your Account/i);
    expect(accountInfoText).toBeInTheDocument();
  });
});
