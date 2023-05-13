import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("check initial State", () => {
  render(<SummaryForm />);
  const confirmButton = screen.getByRole("button", { name: /Confirm order/i });
  const checkBox = screen.getByRole("checkbox");

  // check that the checkbox starts out unchecked
  expect(checkBox).not.toBeChecked();

  // check that the button starts out enabled
  expect(confirmButton).toBeDisabled();
});

test("Check if the button is enabled according to whether the check box is checked or not", () => {
  render(<SummaryForm />);
  const confirmButton = screen.getByRole("button", { name: /Confirm order/i });
  const checkBox = screen.getByRole("checkbox");

  // check that the button is enabled when the check box is checked.

  fireEvent.click(checkBox);
  expect(confirmButton).toBeEnabled();

  // check that the button is deactivated again when the check box is clicked again.
  fireEvent.click(checkBox);
  expect(confirmButton).toBeDisabled();
});
