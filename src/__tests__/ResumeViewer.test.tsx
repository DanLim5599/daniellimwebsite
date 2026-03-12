import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ResumeViewer from "../app/components/ResumeViewer";

describe("ResumeViewer", () => {
  it("renders the section heading", () => {
    render(<ResumeViewer />);
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("renders download button with correct href", () => {
    render(<ResumeViewer />);
    const link = screen.getByText("Download Resume").closest("a");
    expect(link).toHaveAttribute("href", "/Daniel_s_Software_Engineer_Resume.pdf");
    expect(link).toHaveAttribute("download");
  });

  it("renders PDF iframe with correct src", () => {
    render(<ResumeViewer />);
    const iframe = screen.getByTitle("Resume");
    expect(iframe).toHaveAttribute("src", "/Daniel_s_Software_Engineer_Resume.pdf");
  });

  it("has the resume section id", () => {
    render(<ResumeViewer />);
    expect(document.getElementById("resume")).toBeInTheDocument();
  });
});
