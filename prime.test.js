const objToTest = require('./PrimeFactor');
test(`null check`, () => {
    expect(objToTest.primeFactors(1)).toBe(null);
});
test(`2 check`, () => {
    expect(objToTest.primeFactors(2)).toEqual([2]);
});
test(`3 check`, () => {
    expect(objToTest.primeFactors(3)).toEqual([3]);
});
test(`4 check`, () => {
    expect(objToTest.primeFactors(4)).toEqual([2, 2]);
});
test(`5 check`, () => {
    expect(objToTest.primeFactors(8)).toEqual([2, 2, 2]);
});
test(`6 check`, () => {
    expect(objToTest.primeFactors(9)).toEqual([3,3]);
});
test(`6 check`, () => {
    expect(objToTest.primeFactors(121)).toEqual([11,11]);
});