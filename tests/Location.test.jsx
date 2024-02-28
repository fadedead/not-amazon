import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Location } from "../src/components/header/Location";

describe("Location component", () => {
  beforeEach(() =>
    render(
      <BrowserRouter initialIndex={["/"]}>
        <Location />
      </BrowserRouter>,
    ),
  );

  it("Clicking over the location component should show the location input", async () => {
    const locationComponent = screen.getByText(/Deliver to/i);
    await userEvent.click(locationComponent);

    const chooseLocationText = await screen.findByText(/Choose your location/i);
    expect(chooseLocationText).toBeInTheDocument();
  });

  it("Clicking on done closes the location input", async () => {
    const locationComponent = screen.getByText(/Deliver to/i);
    await userEvent.click(locationComponent);

    const doneButton = await screen.findByRole("button", { name: "Done" });

    await userEvent.click(doneButton);

    const chooseLocationText = screen.queryByText(/Choose your location/i);
    expect(chooseLocationText).not.toBeInTheDocument();
  });

  it("Chaning the location in dropdown updates the location in header", async () => {
    const locationComponent = screen.getByText(/Deliver to/i);
    await userEvent.click(locationComponent);

    await userEvent.selectOptions(await screen.findByRole("combobox"), "Moon");

    const doneButton = await screen.findByRole("button", { name: "Done" });

    await userEvent.click(doneButton);

    const chooseLocationText = screen.queryByText(/Moon/i);
    expect(chooseLocationText).toBeInTheDocument();
  });
});
