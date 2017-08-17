/**
 * @class main.spec.ts
 *
 * @classdesc
 *
 * @overview
 *
 * @since 2017/08/17
 * @author Christoph Kuhn <christoph.kuhn@adlos.com>
 */


import { myLib } from "./lib/myLib";

QUnit.test("myLib", (assert) => {
    const multiplicator: myLib.test.MyClass = new myLib.test.MyClass(5);
    assert.equal(multiplicator.getStaticMultiplicand(), 3, "The static multiplicand is '3'.");
    assert.equal(multiplicator.getMultiplicand(), 5, "The variable multiplicand is '5'.");
    assert.equal(multiplicator.getProduct(), 15, "The product of this multiplicands is '15'.");
});
