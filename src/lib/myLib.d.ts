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
export declare namespace myLib {
    namespace test {
        class MyClass {
            multiplicand: number;
            static staticMultiplicand: number;
            constructor(multiplicand: number);
            getMultiplicand(): number;
            setMultiplicand(value: number): void;
            getStaticMultiplicand(): number;
            getProduct(): number;
        }
    }
}
