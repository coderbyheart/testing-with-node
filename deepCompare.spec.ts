import { describe, test as it } from "node:test";
import { aString, check, objectMatching } from "tsmatchers";

describe("deep compare", () => {
  it("should compare two objects", () => {
    const res = myFunction();

    check(res).is(
      objectMatching({
        requiredValue: aString,
      })
    );
  });
});

const myFunction = () => ({
  requiredValue: "we need the object to have this",
  anotherValue: "not interesting",
});
