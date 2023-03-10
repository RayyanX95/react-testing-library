import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "./AddInput";

const mockedSetTodos = jest.fn();

test("should render the input element", () => {
  render(<AddInput />);

  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
});

test("should fire `change` event of the input element", () => {
  render(<AddInput setTodos={mockedSetTodos} todos={[]} />);

  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  fireEvent.change(inputElement, {
    target: { value: "Read the article" },
  });

  expect(inputElement.value).toBe("Read the article");
});

test("should render empty input when `Add` button clicked", () => {
  render(<AddInput setTodos={mockedSetTodos} todos={[]} />);

  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElem = screen.getByRole("button", { name: /Add/i });
  console.log("buttonElem", buttonElem.textContent);

  fireEvent.click(buttonElem);

  expect(inputElement.value).toBe("");
});
