import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../app/components/About";

describe("About", () => {
  it("renders the section heading", () => {
    render(<About />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders education info", () => {
    render(<About />);
    expect(screen.getByText("B.S. Computer Science, UC Berkeley")).toBeInTheDocument();
  });

  it("renders GPA", () => {
    render(<About />);
    expect(screen.getByText("3.8 / 4.0")).toBeInTheDocument();
  });

  it("renders location", () => {
    render(<About />);
    expect(screen.getByText("Berkeley, CA")).toBeInTheDocument();
  });

  it("mentions UC Berkeley in bio", () => {
    render(<About />);
    expect(screen.getByText("University of California, Berkeley")).toBeInTheDocument();
  });

  it("has the about section id", () => {
    render(<About />);
    expect(document.getElementById("about")).toBeInTheDocument();
  });
});
