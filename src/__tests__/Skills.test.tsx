import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Skills from "../app/components/Skills";

describe("Skills", () => {
  it("renders the section heading", () => {
    render(<Skills />);
    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
  });

  it("renders all four category headings", () => {
    render(<Skills />);
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("Frameworks")).toBeInTheDocument();
    expect(screen.getByText("Developer Tools")).toBeInTheDocument();
    expect(screen.getByText("Libraries")).toBeInTheDocument();
  });

  it("renders language skills", () => {
    render(<Skills />);
    ["Java", "Python", "C/C++", "Go", "Swift", "JavaScript", "TypeScript", "SQL"].forEach(
      (skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument();
      }
    );
  });

  it("renders framework skills", () => {
    render(<Skills />);
    ["React", "SwiftUI", "Docker", "MongoDB", "PostgreSQL"].forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders tool skills", () => {
    render(<Skills />);
    ["Git", "VS Code", "Xcode", "Figma", "Jira"].forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders library skills", () => {
    render(<Skills />);
    ["PyTorch", "NumPy", "Pandas", "Selenium", "BeautifulSoup"].forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("has the skills section id", () => {
    render(<Skills />);
    expect(document.getElementById("skills")).toBeInTheDocument();
  });
});
