import { getPrimeFactors } from './PrimeFactor1';
test("null check", () => {
    expect(getPrimeFactors(1)).toBe(null);
});
test("2 check", () => {
    expect(getPrimeFactors(2)).toEqual([2]);
});
test("check for 3", () => {
    expect(getPrimeFactors(3)).toEqual([3]);
});
test("check for 4", () => {
    expect(getPrimeFactors(4)).toEqual([2, 2]);
});
test("check for 6", () => {
    expect(getPrimeFactors(6)).toEqual([2, 3]);
});
test("check for 8", () => {
    expect(getPrimeFactors(8)).toEqual([2, 2, 2]);
});
test("check for 9", () => {
    expect(getPrimeFactors(9)).toEqual([3, 3]);
});