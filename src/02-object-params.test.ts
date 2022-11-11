import { describe, expect, it } from "vitest";
import { addTwoNumbersUseObjectParams } from "./02-object-params.problem";
import { addTwoNumbersUseObjectParamsInterfaceSolution } from "./02-object-params.solution";

describe("#AddTwoNumberUseObjectParams", () => {
  it("Should add the two numbers together", () => {
    expect(
      addTwoNumbersUseObjectParamsInterfaceSolution({ first: 10, second: 10 })
    ).toEqual(20);
  });
});
