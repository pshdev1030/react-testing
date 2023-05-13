import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("check initial State", () => {
  render(<SummaryForm />);
  const confirmButton = screen.getByRole("button", { name: /Confirm order/i });
  const checkBox = screen.getByRole("checkbox");

  // check that the checkbox starts out unchecked
  expect(checkBox).not.toBeChecked();

  // check that the button starts out enabled
  expect(confirmButton).toBeDisabled();
});

test("Check if the button is enabled according to whether the check box is checked or not", async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();
  const confirmButton = screen.getByRole("button", { name: /Confirm order/i });
  const checkBox = screen.getByRole("checkbox");

  // check that the button is enabled when the check box is checked.

  await user.click(checkBox);
  expect(confirmButton).toBeEnabled();

  // check that the button is deactivated again when the check box is clicked again.
  await user.click(checkBox);
  expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears on mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  await expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  await user.unhover(termsAndConditions);
  await user.unhover(termsAndConditions);

  expect(popover).not.toBeInTheDocument();
});
