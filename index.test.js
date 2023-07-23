const each = require('jest-each').default;
const { checkWinner } = require("./index.js");

describe("checkWinner", () => {
    test("exists", () => {
        expect(checkWinner).toBeDefined();
    });

    test("is a function", () => {
        expect(checkWinner instanceof Function).toEqual(true);
    });

    it("Throws an error when passed no values", () => {
        expect(() => checkWinner()).toThrow("This function requires two arguments!");
    });


    it("Throws an error when passed only one value", () => {
        expect(() => checkWinner("rock")).toThrow("This function requires two arguments!");
    });

    each([
        ["rock", "rock", "scissors"],
        ["paper", "paper", "rock"],
        ["scissors", "scissors", "paper"],
        ["draw", "rock", "rock"],
        ["draw", "scissors", "scissors"],
        ["draw", "paper", "paper"]
    ]).test(`Returns %s when passed %s and %s`, (expected, a, b) => {
        expect(checkWinner(a, b)).toBe(expected);
    });
});
