let val=require('./Calculator');
describe("calci",()=>{
    test("adding",()=>{
        expect(val.add(5,2)).toBe(7);
    });
    test("substraction",()=>{
        expect(val.sub(5,2)).toBe(3);
    });
    test("substraction undefined",()=>{
        expect(val.sub(5,undefined)).toBe(5);
    });

});
