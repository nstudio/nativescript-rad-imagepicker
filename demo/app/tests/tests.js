var RadImagepicker = require("nativescript-rad-imagepicker").RadImagepicker;
var radImagepicker = new RadImagepicker();

describe("greet function", function() {
    it("exists", function() {
        expect(radImagepicker.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(radImagepicker.greet()).toEqual("Hello, NS");
    });
});