/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders todo header text", () => {
  render(<Header title="My Header" />);
  const headerElement = screen.getByText(/My Header/i);
  expect(headerElement).toBeInTheDocument();
});
