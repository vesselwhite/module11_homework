const getMonth = require("./index.js");

describe("test getMonth function",() => {
    it("should operate correctly with numbers from one to twelve", ()=>{
        expect(getMonth(9)).toBe("сентябрь");
    }),
    it("should operate correctly another numbers", ()=>{
        expect(getMonth(13)).toBe("неизвестно");
    })
})