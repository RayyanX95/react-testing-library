import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "./Todo";

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTodos = (todos) => {
  const inputElem = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElem = screen.getByRole("button", { name: /Add/i });

  todos.forEach((todo) => {
    fireEvent.change(inputElem, { target: { value: todo } });
    fireEvent.click(buttonElem);
  });
};

test("should add new todo to the todos list", () => {
  render(<MockTodo />);
  addTodos(["Study the last lesson!"]);

  const divELem = screen.getByTestId("todo-id");
  expect(divELem).toBeInTheDocument();
});

test("should add THREE new todos to the todos list", () => {
  render(<MockTodo />);
  addTodos(["Study the last lesson!", "Call mom", "Create PR"]);

  const divELems = screen.getAllByTestId("todo-id");
  expect(divELems.length).toBe(3);
});

test("task should not have completed class", () => {
  render(<MockTodo />);
  addTodos(["Study the last lesson!"]);

  const divELem = screen.getByTestId("todo-id");
  expect(divELem).not.toHaveClass("todo-item-active");
});

test("task should have completed class when clicked", () => {
  render(<MockTodo />);
  addTodos(["Study the last lesson!"]);

  const divELem = screen.getByTestId("todo-id");
  fireEvent.click(divELem);
  expect(divELem).toHaveClass("todo-item-active");
});
