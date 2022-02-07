import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Project from "./Project";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Project component", () => {
  describe("When it receives the id 8 and the user clicks on the text", () => {
    test("Then it should invoke navigate method with '/projects/view/8'", () => {
      const project = {
        id: 8,
        name: "Magic nosequé",
      };
      const expectedPath = `/projects/view/${project.id}`;

      render(
        <BrowserRouter>
          <Project project={project} />
        </BrowserRouter>
      );

      const text = screen.getByText(`Id ${project.id}`);

      userEvent.click(text);

      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });
});
