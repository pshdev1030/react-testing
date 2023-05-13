import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  // find an elemenet with a role of button and text of '"Change to MidnightBlue"'
  const colorButton = screen.getByRole("button", {
    name: `Change to ${replaceCamelWithSpaces("MidnightBlue")}`,
  });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorButton);

  //expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent(
    `Change to ${replaceCamelWithSpaces("MediumVioletRed")}`
  );

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: `Change to ${replaceCamelWithSpaces("MidnightBlue")}`,
  });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkbox).not.toBeChecked();
});

test("when checkbox is checked, button should be disabled", () => {
  render(<App />);
  //checkbox
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: `Change to ${replaceCamelWithSpaces("MidnightBlue")}`,
  });

  // //check if the button is enabled when the check box is unchecked
  // expect(checkbox).not.toBeChecked();
  // expect(colorButton).toBeEnabled();

  // fireEvent.click(checkbox);

  // //check if the button is disabled when the check box is checked
  // expect(checkbox).toBeChecked();
  // expect(colorButton).not.toBeEnabled();

  // initial condition에 대한 검사는 위에서 했기 때문에 안 해도 된다.
  // 때문에 다음과 같이 수정 가능함

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  //이벤트를 다시 Trigger해서 원래 상태로 돌아오는지도 검사
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("DIsabled button has gray background and reverts to red", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: `Change to ${replaceCamelWithSpaces("MidnightBlue")}`,
  });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("Clicked disabled button has gray background and reverts to blue", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: `Change to ${replaceCamelWithSpaces("MidnightBlue")}`,
  });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
});

describe("spaces before camel-case capital lettets", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
