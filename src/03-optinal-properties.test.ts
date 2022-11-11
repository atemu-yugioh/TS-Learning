import { describe, expect, it } from "vitest";
import { getName } from "./03-optinal-properties.solution";

describe("#GetName", () => {
  it("Should work with just first name", () => {
    const name = getName({ first: "Nguyen" });
    expect(name).toEqual("Nguyen");
  });
});

describe("#GetName", () => {
  it("Should work with first name and last name", () => {
    const name = getName({ first: "Nguyen", last: "Thieng" });
    expect(name).toEqual("Nguyen Thieng");
  });
});
