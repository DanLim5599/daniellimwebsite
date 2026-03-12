import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Projects from "../app/components/Projects";

describe("Projects", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders all three project titles", () => {
    render(<Projects />);
    expect(screen.getByText("Productivity Calendar")).toBeInTheDocument();
    expect(screen.getByText("Image Classification System")).toBeInTheDocument();
    expect(screen.getByText("Secure Distributed File Sharing System")).toBeInTheDocument();
  });

  it("renders tech tags for each project", () => {
    render(<Projects />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Firebase")).toBeInTheDocument();
    expect(screen.getByText("PyTorch")).toBeInTheDocument();
    expect(screen.getByText("Go")).toBeInTheDocument();
    expect(screen.getByText("Cryptography")).toBeInTheDocument();
  });

  it("renders iframe for Productivity Calendar", () => {
    render(<Projects />);
    const iframe = screen.getByTitle("Productivity Calendar");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      "src",
      "https://productivity-calendar-3d674.web.app/"
    );
  });

  it("renders external link for Productivity Calendar", () => {
    render(<Projects />);
    const link = screen.getByLabelText("View Productivity Calendar");
    expect(link).toHaveAttribute(
      "href",
      "https://productivity-calendar-3d674.web.app/"
    );
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("does not render external links for projects without links", () => {
    render(<Projects />);
    expect(screen.queryByLabelText("View Image Classification System")).toBeNull();
    expect(
      screen.queryByLabelText("View Secure Distributed File Sharing System")
    ).toBeNull();
  });

  it("has the projects section id", () => {
    render(<Projects />);
    expect(document.getElementById("projects")).toBeInTheDocument();
  });
});
