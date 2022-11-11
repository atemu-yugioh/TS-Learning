import { describe, expect, it } from "vitest";
import { getName } from "./04-optinal-params.solution";

describe("#GetName", () => {
  it("Should work with just first name", () => {
    const name = getName("Nguyen");
    expect(name).toEqual("Nguyen");
  });
});

describe("#GetName", () => {
  it("Should work with first name and last name", () => {
    const name = getName("Nguyen", "Thieng");
    expect(name).toEqual("Nguyen Thieng");
  });
});
