import { describe, test as it } from "node:test";
import assert from "node:assert";

describe("numberSum()", () => {
  for (const [input, expected] of [
    [[1, 2, 3], 6],
    [[2, 2], 4],
    [[2, 3], 5],
  ] as [number[], number][]) {
    it(`should sum up numbers ${input} to ${expected}`, () =>
      assert.equal(numberSum(input), expected));
  }
});

const numberSum = (numbers: number[]): number =>
  numbers.reduce((sum, number) => sum + number, 0);
