/**
 * @class main
 *
 * @classdesc
 *
 * @overview
 *
 * @since 2017/08/17
 * @author Christoph Kuhn <christoph.kuhn@adlos.com>
 */


import { myLib } from "./lib/myLib";

const multiplicator: myLib.test.MyClass = new myLib.test.MyClass(5);
console.log(
    "The product of",
    multiplicator.getMultiplicand(),
    "and",
    multiplicator.getStaticMultiplicand(),
    "is",
    multiplicator.getProduct(),
);
