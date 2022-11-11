import { describe, expect, it } from "vitest";
import { defaultUser } from "./05-assigning-type-to-variables.problem";
import { User } from "./05-assigning-type-to-variables.solution";

const getUserId = (user: User) => {
  return user.id;
};

describe("#GetUserId", () => {
  it("Should get the user id", () => {
    expect(getUserId(defaultUser)).toEqual(1);
  });
});
