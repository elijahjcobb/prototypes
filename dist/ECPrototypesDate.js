"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const collections_1 = require("@elijahjcobb/collections");
/**
 * A class representing a date.
 */
class ECPrototypesDate extends collections_1.ECPrototype {
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor() { super(); }
    /**
     * Convert this to a string representation.
     * @return {string} A string.
     */
    toString() {
        let mPadding = "";
        let dPadding = "";
        if (this.month.toString().length !== 2) {
            mPadding = "0";
        }
        if (this.day.toString().length !== 2) {
            dPadding = "0";
        }
        return mPadding + this.month + dPadding + this.day + this.year;
    }
    /**
     * Convert this to a Javascript object representation.
     * @return {object} A Javascript object.
     */
    toJSON() {
        return {
            month: this.month,
            day: this.day,
            year: this.year,
            value: this.toString()
        };
    }
    /**
     * Create an ECPrototypesDate instance from a string representation.
     * @param {string} value A date with format "12312000" for "December 31st, 2000".
     * @return {ECPrototypesDate} A new instance.
     */
    static initWithDateString(value) {
        if (value.length !== 8)
            return null;
        let monthString = value.substr(0, 2);
        let dayString = value.substr(2, 2);
        let yearString = value.substr(4, 4);
        let month = parseInt(monthString);
        let day = parseInt(dayString);
        let year = parseInt(yearString);
        return ECPrototypesDate.initWithComponents(month, day, year);
    }
    /**
     * Create an ECPrototypesDate instance from date components.
     * @param {number} month The month.
     * @param {number} day The day.
     * @param {number} year The year.
     * @return {ECPrototypesDate} A new instance.
     */
    static initWithComponents(month, day, year) {
        let date = new ECPrototypesDate();
        date.month = month;
        date.day = day;
        date.year = year;
        return date;
    }
}
exports.ECPrototypesDate = ECPrototypesDate;
