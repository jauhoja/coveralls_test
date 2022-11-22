//import chai from "chai"
//import divideByTwo from "../divideByTwo.js"

const chai = require("chai");
const divideByTwo = require("../divideByTwo.js");
const expect = chai.expect;


const dividend = divideByTwo(2);
describe("divideByTwo", () => {
    it("Divides an integer by two", () => {
        expect(dividend).to.equal(1);
    });
    it("Throws an excetpion with string input", () => {
        expect(() => divideByTwo("asdf")).to.throw(TypeError);
    });
    /*
    it("Throws an exception when given non-integer as an input", () => {
        expect(() => divideByTwo(1.4)).to.throw(Error, "not an integer");
    });
    */
});
