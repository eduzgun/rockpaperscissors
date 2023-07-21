
describe ("gameLoop", () => {
    test("exists", () => {
        expect(gameLoop).toBeDefined();
    })

    test("is a function", () => {
        expect(findLargest instanceof Function).toEqual(true);
    })
})

describe ("checkWinner", () => {
    test("exists", () => {
        expect(checkWinner).toBeDefined();
    })

    test("is a function", () => {
        expect(checkWinner instanceof Function).toEqual(true);
    })

    test("exists", () => {
        expect(findLargest).toBeDefined();
    })

    it("Throws an error when passed no values", () => {
        expect(() => checkWinner()).toThrow("This function requires two arguments!");
    })

    it("Throws an error when passed non-string arguments", () => {
        expect(() => getLonger(3, 6)).toThrow("Arguments must be strings!");
    })

    it("Throws an error when passed only one value", () => {
        expect(() => getLonger("red")).toThrow("This function requires two arguments!");
    })

    each([
        ["rock", "rock", "scissors"],
        ["paper", "paper", "rock"],
        ["scissors", "scissors", "paper"],
        ["draw", "rock", "rock"],
        ["draw", "scissors", "scissors"],
        ["draw", "paper", "paper"]
    ]).test(`Returns %s when passed %s and %s`, (expected, a, b) => {
        expect(checkWinner(a, b)).toBe(expected);
    })

})