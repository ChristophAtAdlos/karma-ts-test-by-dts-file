/**
 * @class myLib
 *
 * @classdesc
 *
 * @overview
 *
 * @since 2017/08/17
 * @author Christoph Kuhn <christoph.kuhn@adlos.com>
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var myLib;
    (function (myLib) {
        var test;
        (function (test) {
            var MyClass = (function () {
                function MyClass(multiplicand) {
                    this.multiplicand = 0;
                    if (multiplicand !== undefined) {
                        this.multiplicand = multiplicand;
                    }
                }
                MyClass.prototype.getMultiplicand = function () {
                    return this.multiplicand;
                };
                MyClass.prototype.setMultiplicand = function (value) {
                    if (typeof value === "number" && value !== undefined && value !== null) {
                        this.multiplicand = value;
                    }
                };
                MyClass.prototype.getStaticMultiplicand = function () {
                    return MyClass.staticMultiplicand;
                };
                MyClass.prototype.getProduct = function () {
                    return MyClass.staticMultiplicand * this.multiplicand;
                };
                MyClass.staticMultiplicand = 3;
                return MyClass;
            }());
            test.MyClass = MyClass;
        })(test = myLib.test || (myLib.test = {}));
    })(myLib = exports.myLib || (exports.myLib = {}));
});
//# sourceMappingURL=myLib.js.map