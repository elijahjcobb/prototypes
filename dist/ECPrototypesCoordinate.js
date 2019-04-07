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
 * A class representing a physical coordinate.
 */
class ECPrototypesCoordinate extends collections_1.ECPrototype {
    /**
     * Create a new ECPrototypesCoordinate instance.
     * @param {number} latitude The latitude of the coordinate.
     * @param {number} longitude The longitude of the coordinate.
     */
    constructor(latitude, longitude) {
        super();
        this.latitude = latitude;
        this.longitude = longitude;
    }
    /**
     * Convert this instance into a string representation.
     * @return {string} A string.
     */
    toString() {
        return `(${this.latitude}, ${this.longitude})`;
    }
    /**
     * Override print() method on ECPrototype instance.
     */
    print() {
        console.log(`ECPrototypesCoordinate: ${this.toString()}`);
    }
}
exports.ECPrototypesCoordinate = ECPrototypesCoordinate;
