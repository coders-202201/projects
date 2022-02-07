import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("App does things", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const link = screen.getByRole("link", { name: /projects list/i });
  userEvent.click(link);

  const title = screen.getByRole("heading", { name: /projects page/i });

  expect(title).toBeInTheDocument();
});
