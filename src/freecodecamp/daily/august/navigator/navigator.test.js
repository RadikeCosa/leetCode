/**
 * FreeCodeCamp Problem: Navigator
 * Category: Daily
 *
 * On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.
 *
 * Given an array of browser commands you executed on Netscape Navigator, return the current page you are on after executing all the commands using the following rules:
 *
 * You always start on the "Home" page, which will not be included in the commands array.
 * Valid commands are:
 * "Visit Page": Where "Page" is the name of the page you are visiting. For example, "Visit About" takes you to the "About" page. When you visit a new page, make sure to discard any forward history you have.
 * "Back": Takes you to the previous page in your history or stays on the current page if there isn't one.
 * "Forward": Takes you forward in the history to the page you came from or stays on the current page if there isn't one.
 * For example, given ["Visit About Us", "Back", "Forward"], return "About Us".
 *
 * Examples:
 * - navigate(["Visit About Us", "Back", "Forward"]) should return "About Us"
 * - navigate(["Forward"]) should return "Home"
 * - navigate(["Back"]) should return "Home"
 * - navigate(["Visit About Us", "Visit Gallery"]) should return "Gallery"
 * - navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) should return "Home"
 * - navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) should return "Contact"
 * - navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) should return "Visit Us"
 *
 * Constraints:
 * - Commands array can be empty or contain valid commands
 * - Page names can contain spaces and special characters
 * - Always start on "Home" page
 * - "Back" and "Forward" should stay on current page if no history available
 * - "Visit" commands discard forward history
 */

import navigate from "./navigator.js";
import { describe, it, expect } from "vitest";

describe("Navigator", () => {
  it("should return 'About Us' for ['Visit About Us', 'Back', 'Forward']", () => {
    expect(navigate(["Visit About Us", "Back", "Forward"])).toBe("About Us");
  });

  it("should return 'Home' for ['Forward']", () => {
    expect(navigate(["Forward"])).toBe("Home");
  });

  it("should return 'Home' for ['Back']", () => {
    expect(navigate(["Back"])).toBe("Home");
  });

  it("should return 'Gallery' for ['Visit About Us', 'Visit Gallery']", () => {
    expect(navigate(["Visit About Us", "Visit Gallery"])).toBe("Gallery");
  });

  it("should return 'Home' for ['Visit About Us', 'Visit Gallery', 'Back', 'Back']", () => {
    expect(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"])).toBe(
      "Home"
    );
  });

  it("should return 'Contact' for ['Visit About', 'Visit Gallery', 'Back', 'Visit Contact', 'Forward']", () => {
    expect(
      navigate([
        "Visit About",
        "Visit Gallery",
        "Back",
        "Visit Contact",
        "Forward",
      ])
    ).toBe("Contact");
  });

  it("should return 'Visit Us' for ['Visit About Us', 'Visit Visit Us', 'Forward', 'Visit Contact Us', 'Back']", () => {
    expect(
      navigate([
        "Visit About Us",
        "Visit Visit Us",
        "Forward",
        "Visit Contact Us",
        "Back",
      ])
    ).toBe("Visit Us");
  });
});
