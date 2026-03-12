import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../app/components/Footer";

describe("Footer", () => {
  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/Daniel Lim. All rights reserved/)).toBeInTheDocument();
  });

  it("renders current year in copyright", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders GitHub link with correct href", () => {
    render(<Footer />);
    const link = screen.getByLabelText("GitHub");
    expect(link).toHaveAttribute("href", "https://github.com/DanLim5599");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders LinkedIn link with correct href", () => {
    render(<Footer />);
    const link = screen.getByLabelText("LinkedIn");
    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/daniel-z-lim/");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders email link with correct href", () => {
    render(<Footer />);
    const link = screen.getByLabelText("Email");
    expect(link).toHaveAttribute("href", "mailto:daniellim@berkeley.edu");
  });
});
