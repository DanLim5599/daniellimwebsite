import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "../app/components/Hero";

describe("Hero", () => {
  it("renders name and title", () => {
    render(<Hero />);
    expect(screen.getByText("Daniel Lim")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  it("renders greeting text", () => {
    render(<Hero />);
    expect(screen.getByText("Hi, my name is")).toBeInTheDocument();
  });

  it("renders tagline", () => {
    render(<Hero />);
    expect(
      screen.getByText(/UC Berkeley CS graduate building robust software/)
    ).toBeInTheDocument();
  });

  it("renders View Resume button linking to #resume", () => {
    render(<Hero />);
    const btn = screen.getByText("View Resume").closest("a");
    expect(btn).toHaveAttribute("href", "#resume");
  });

  it("renders Contact Me button linking to #contact", () => {
    render(<Hero />);
    const btn = screen.getByText("Contact Me").closest("a");
    expect(btn).toHaveAttribute("href", "#contact");
  });

  it("has the hero section id", () => {
    render(<Hero />);
    expect(document.getElementById("hero")).toBeInTheDocument();
  });
});
