import assert from "node:assert";
import { describe, it } from "node:test";

describe("async code", () => {
  it("should test an async function", async () => {
    assert.equal(await giveMeANumber(), 42);
  });
  it("should not throw", async () => {
    await assert.doesNotReject(giveMeANumber);
  });
  it("should throw", async () => {
    await assert.rejects(thisWillThrow, /Ahh!/);
  });
});

const giveMeANumber = async (): Promise<number> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(42), 500);
  });

const thisWillThrow = async () => {
  throw new Error(`Ahh!`);
};
