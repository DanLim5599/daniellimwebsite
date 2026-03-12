import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Experience from "../app/components/Experience";

describe("Experience", () => {
  it("renders the section heading", () => {
    render(<Experience />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("renders all three job titles", () => {
    render(<Experience />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer Intern")).toBeInTheDocument();
    expect(screen.getByText("Front End Developer Intern")).toBeInTheDocument();
  });

  it("renders all company names", () => {
    render(<Experience />);
    expect(screen.getByText(/Karass/)).toBeInTheDocument();
    expect(screen.getByText(/Kitecyber/)).toBeInTheDocument();
    expect(screen.getByText(/Superflow/)).toBeInTheDocument();
  });

  it("renders date ranges", () => {
    render(<Experience />);
    expect(screen.getByText(/January 2026/)).toBeInTheDocument();
    expect(screen.getByText(/May 2025/)).toBeInTheDocument();
    expect(screen.getByText(/June 2024/)).toBeInTheDocument();
  });

  it("renders bullet points for Karass", () => {
    render(<Experience />);
    expect(
      screen.getByText(/Designed, implemented, and deployed a native iOS app/)
    ).toBeInTheDocument();
  });

  it("renders bullet points for Kitecyber", () => {
    render(<Experience />);
    expect(
      screen.getByText(/Built a Python tool that automatically sorts and labels/)
    ).toBeInTheDocument();
  });

  it("renders bullet points for Superflow", () => {
    render(<Experience />);
    expect(
      screen.getByText(/Built responsive pages for a learning platform/)
    ).toBeInTheDocument();
  });

  it("has the experience section id", () => {
    render(<Experience />);
    expect(document.getElementById("experience")).toBeInTheDocument();
  });
});
