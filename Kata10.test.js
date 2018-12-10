const testClass = require('./kata10');
test("null Check", () => {
    expect(testClass.Prime(1)).toBe(null);
});
test("Check for 2", () => {
    expect(testClass.Prime(2)).toEqual([2]);
});
test("Check for 3", () => {
    expect(testClass.Prime(3)).toEqual([3]);
});
test("Check for 4", () => {
    expect(testClass.Prime(4)).toEqual([2, 2]);
});
test("Check for 6", () => {
    expect(testClass.Prime(6)).toEqual([2, 3]);
});
test("Check for 8", () => {
    expect(testClass.Prime(8)).toEqual([2, 2, 2]);
});
test("Check for 9", () => {
    expect(testClass.Prime(9)).toEqual([3, 3]);
});