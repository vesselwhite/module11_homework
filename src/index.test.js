const getMonth = require("./index.js");

describe("test getMonth function",() => {
    it("should operate correctly with numbers from one to twelve", ()=>{
        expect(getMonth(9)).toBe("сентябрь");
    }),
    it("should operate correctly with another numbers", ()=>{
        expect(getMonth(13)).toBe("число находится вне диапазона от 1 до 12");
    }),
    it("should operate correctly with not number values", ()=>{
        expect(getMonth('1')).toBe("Введено не число");
    })
})