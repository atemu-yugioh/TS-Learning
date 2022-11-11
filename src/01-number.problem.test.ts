import { describe, expect, it } from "vitest";
import { addTwoNumbers } from "./01-number.problem";
import { addTwoNumbersSollution } from "./01-number.solution";

describe("#AddTwoNumbers", () => {
  it("Should add two numbers together", () => {
    expect(addTwoNumbers(2, 3)).toEqual(5);
    expect(addTwoNumbers(3, 4)).toEqual(7);
    expect(addTwoNumbers(0, 0)).toEqual(0);
  });
});

describe("#AddTwoNumbersSolution", () => {
  it("Should add two numbers together", () => {
    expect(addTwoNumbersSollution(2, 3)).toEqual(5);
    expect(addTwoNumbersSollution(3, 4)).toEqual(7);
    expect(addTwoNumbers(0, 0)).toEqual(0);
  });
});
