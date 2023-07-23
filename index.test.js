const each = require('jest-each').default;
const { checkWinner } = require("./index.js");

// Mock the prompt function to provide predefined user inputs

jest.mock('prompt-sync', () => {
    return () => jest.fn().mockReturnValueOnce('rock').mockReturnValueOnce('n');
  });

describe("checkWinner", () => {
  test("exists", () => {
    expect(checkWinner).toBeDefined();
  });

  test("is a function", () => {
    expect(typeof checkWinner).toEqual("function");
  });

  it("Throws an error when passed no values", () => {
    expect(() => checkWinner()).toThrow("This function requires two arguments!");
  });

  it("Throws an error when passed only one value", () => {
    expect(() => checkWinner("rock")).toThrow("This function requires two arguments!");
  });

  each([
    ["rock", "rock", "draw"],
    ["rock", "paper", "b"],
    ["rock", "scissors", "a"],
    ["paper", "rock", "a"],
    ["paper", "paper", "draw"],
    ["paper", "scissors", "b"],
    ["scissors", "rock", "b"],
    ["scissors", "paper", "a"],
    ["scissors", "scissors", "draw"]
  ]).test(`Returns %s when passed %s and %s`, (a, b, expected) => {
    expect(checkWinner(a, b)).toBe(expected);
  });
});