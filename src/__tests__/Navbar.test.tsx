import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../app/components/Navbar";

describe("Navbar", () => {
  it("renders the site name", () => {
    render(<Navbar />);
    expect(screen.getByText("Daniel Lim")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    const labels = ["About", "Experience", "Projects", "Skills", "Resume", "Contact"];
    labels.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1);
    });
  });

  it("has correct href for nav links", () => {
    render(<Navbar />);
    expect(screen.getByText("Daniel Lim").closest("a")).toHaveAttribute("href", "#hero");
  });

  it("toggles mobile menu on button click", () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText("Toggle menu");

    // Mobile menu should not be visible initially
    const nav = toggleButton.closest("nav");
    expect(nav?.querySelector(".md\\:hidden.bg-white")).toBeNull();

    // Click to open
    fireEvent.click(toggleButton);
    expect(nav?.querySelector(".md\\:hidden.bg-white")).toBeTruthy();

    // Click to close
    fireEvent.click(toggleButton);
    expect(nav?.querySelector(".md\\:hidden.bg-white")).toBeNull();
  });

  it("closes mobile menu when a link is clicked", () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(toggleButton);

    // Click the first mobile menu link
    const mobileLinks = screen.getAllByText("About");
    const mobileLink = mobileLinks[mobileLinks.length - 1];
    fireEvent.click(mobileLink);

    const nav = toggleButton.closest("nav");
    expect(nav?.querySelector(".md\\:hidden.bg-white")).toBeNull();
  });
});
