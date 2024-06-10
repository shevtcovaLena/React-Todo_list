import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
});

test("button", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /добавить/i });
  const input = screen.getByPlaceholderText(/добавьте заметку/i);
  const form = screen.getByTestId("task-form");
  expect(button).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(form).toMatchSnapshot();
});

describe("correct ListCard render", () => {
  test("input test", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/добавьте заметку/i);
    const button = screen.getByRole("button", { name: /добавить/i });
    fireEvent.input(input, { target: { value: 'Купить молоко' } });
    fireEvent.click(button)
    const record = screen.getByTestId('test-task');
    expect(record).toBeInTheDocument()
    screen.debug();
  });
});
