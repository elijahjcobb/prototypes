/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 *
 * Copyright 2019 Elijah Cobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
import { ECPrototype } from "@elijahjcobb/collections";
/**
 * A class representing a date.
 */
export declare class ECPrototypesDate extends ECPrototype {
    day: number;
    month: number;
    year: number;
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor();
    /**
     * Convert this to a string representation.
     * @return {string} A string.
     */
    toString(): string;
    /**
     * Convert this to a Javascript object representation.
     * @return {object} A Javascript object.
     */
    toJSON(): object;
    /**
     * Create an ECPrototypesDate instance from a string representation.
     * @param {string} value A date with format "12312000" for "December 31st, 2000".
     * @return {ECPrototypesDate} A new instance.
     */
    static initWithDateString(value: string): ECPrototypesDate;
    /**
     * Create an ECPrototypesDate instance from date components.
     * @param {number} month The month.
     * @param {number} day The day.
     * @param {number} year The year.
     * @return {ECPrototypesDate} A new instance.
     */
    static initWithComponents(month?: number, day?: number, year?: number): ECPrototypesDate;
}
