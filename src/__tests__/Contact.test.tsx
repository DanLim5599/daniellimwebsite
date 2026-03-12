import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../app/components/Contact";

describe("Contact", () => {
  it("renders the section heading", () => {
    render(<Contact />);
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  });

  it("renders the contact form with all fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("renders send button", () => {
    render(<Contact />);
    expect(screen.getByText("Send Message")).toBeInTheDocument();
  });

  it("renders direct email link", () => {
    render(<Contact />);
    const emailLink = screen.getByText("daniellim@berkeley.edu");
    expect(emailLink).toHaveAttribute("href", "mailto:daniellim@berkeley.edu");
  });

  it("shows success message after form submission", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    ) as jest.Mock;

    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "test@test.com" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello" } });
    fireEvent.submit(screen.getByText("Send Message").closest("form")!);

    await waitFor(() => {
      expect(screen.getByText("Thanks for reaching out!")).toBeInTheDocument();
    });
  });

  it("shows alert on fetch failure", async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error("fail"))) as jest.Mock;
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Test" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "t@t.com" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hi" } });
    fireEvent.submit(screen.getByText("Send Message").closest("form")!);

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        "Something went wrong. Please email me directly."
      );
    });

    alertMock.mockRestore();
  });

  it("has the contact section id", () => {
    render(<Contact />);
    expect(document.getElementById("contact")).toBeInTheDocument();
  });
});
