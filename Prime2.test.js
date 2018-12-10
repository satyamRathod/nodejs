const objPrime = require('./Prime2');
test("null check", () => {
    expect(objPrime.primeFactors(1)).toBe(null);
});
test(" check with 2 ", () => {
    expect(objPrime.primeFactors(2)).toEqual([2]);
});
test(" check with 3 ", () => {
    expect(objPrime.primeFactors(3)).toEqual([3]);
});
test(" check with 4", () => {
    expect(objPrime.primeFactors(4)).toEqual([2, 2]);
});
test(" check with 6", () => {
    expect(objPrime.primeFactors(6)).toEqual([2, 3]);
});
test(" check with 8", () => {
    expect(objPrime.primeFactors(8)).toEqual([2, 2, 2]);
});
test(" check with 9", () => {
    expect(objPrime.primeFactors(9)).toEqual([3,3]);
});