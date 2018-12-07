const Cal = require('./NewCalculator');
describe("rotaeArray", () => {
    test("undefined value check", () => {
        expect(Cal.rotate(undefined)).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("0 value check", () => {
        expect(Cal.rotate(0)).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("-ve value check", () => {
        expect(Cal.rotate(-5)).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("1 value check", () => {
        expect(Cal.rotate(1)).toEqual([2, 3, 4, 5, 6, 1]);
    });
    test("2 value check", () => {
        expect(Cal.rotate(2)).toEqual([3, 4, 5, 6, 1, 2]);
    });
    test("4 value check", () => {
        expect(Cal.rotate(4)).toEqual([5, 6, 1, 2, 3, 4]);
    });
    test("7 value check", () => {
        expect(Cal.rotate(7)).toEqual([2, 3, 4, 5, 6, 1]);
    });
});

describe("numParse", () => {
    test("0-9 check", () => {
        expect(Cal.noParser(0)).toEqual([0]);
    });
    test("undefined check", () => {
        expect(Cal.noParser(undefined)).toBe(undefined);
    });
    test("other check", () => {
        expect(Cal.noParser(12)).toEqual([1, 2]);
    });
    test("large check", () => {
        expect(Cal.noParser(2342)).toEqual([2, 3, 4, 2]);
    });
});

describe("matrix addition", () => {
    beforeAll(() => {
        return a = [[2, 2], [3, 4]];
    });
    beforeAll(() => {
        return b = [[2, 8], [3, 4]];
    });
    beforeAll(() => {
        return c = [[4, 10], [6, 8]];
    });
    test("undefined b matrix", () => {
        expect(Cal.matrixadd(a, undefined)).toBe(a);
    });
    test("undefined a matrix", () => {
        expect(Cal.matrixadd(undefined, b)).toBe(b);
    });
    test("undefined a matrix", () => {
        expect(Cal.matrixadd(undefined, undefined)).toEqual([]);
    });
    test("both matrix", () => {
        expect(Cal.matrixadd(a, b)).toEqual(c);
    });
});

describe("matrix substraction", () => {
    beforeAll(() => {
        let a = [[2, 2], [3, 4]];
        let b = [[2, 8], [3, 4]];
        let c = [[0, -6], [0, 0]];
        return x = { a, b, c };
    });

    test("undefined b matrix", () => {
        expect(Cal.matrixSub(x.a, undefined)).toBe(x.a);
    });
    test("undefined a matrix", () => {
        expect(Cal.matrixSub(undefined, x.b)).toBe(x.b);
    });
    test("undefined a matrix", () => {
        expect(Cal.matrixSub(undefined, undefined)).toEqual([]);
    });
    test("both matrix", () => {
        expect(Cal.matrixSub(x.a, x.b)).toEqual(x.c);
    });
});

describe("matrix Multiplication", () => {
    beforeAll(() => {
        let a = [[2, 2], [3, 4]];
        let b = [[2, 8], [3, 4]];
        let c = [[10, 24], [18, 40]];
        let d = [[2, 8, 4], [3, 4, 3]];
        let e = [[2, 4], [3, 4], [6, 2]];
        let f = [[2, 8, 4], [3, 4, 3]];
        return x = { a, b, c };
    });

    test("undefined b matrix", () => {
        expect(Cal.matrixMul(x.a, undefined)).toBe(undefined);
    });
    test("undefined a matrix", () => {
        expect(Cal.matrixMul(undefined, x.b)).toBe(undefined);
    });
    test("undefined a matrix", () => {
        expect(Cal.matrixMul(undefined, undefined)).toBe(undefined);
    });
    test("2*2 matrix", () => {
        expect(Cal.matrixMul(x.a, x.b)).toEqual(x.c);
    });
    test("varying lenth matrix", () => {
        expect(Cal.matrixMul(x.a, x.e)).toEqual(undefined);
    });

});

describe("matrix Transpose", () => {
    beforeAll(() => {
        return a = [[2, 2], [3, 4]];
    });
    test("undefined  matrix", () => {
        expect(Cal.matrixTrans(undefined)).toBe(null);
    });
    test("a matrix", () => {
        expect(Cal.matrixTrans(a)).toEqual([[2, 3], [2, 4]]);
    });

});
