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
 * A class representing a physical address.
 */
class ECPrototypesAddress extends collections_1.ECPrototype {
    /**
     * Create a new ECPrototypesAddress instance.
     * @param {string} street The street.
     * @param {string} building The house number or apartment number.
     * @param {string} city The city.
     * @param {string} zipCode The zipcode.
     * @param {string} state The state or region.
     * @param {string} country The country.
     */
    constructor(street, building, city, zipCode, state, country) {
        super();
        this.street = street;
        this.building = building;
        this.city = city;
        this.zipCode = zipCode;
        this.state = state;
        this.country = country;
    }
    /**
     * Get a string representation of the address instance.
     * @param {boolean} multiline Whether the string should be formatted with multiple lines.
     * @return {string} A string representing this instance.
     */
    toString(multiline = false) {
        if (multiline) {
            return `${this.street}\n${this.building}\n${this.city}, ${this.state}, ${this.zipCode}\n${this.country}`;
        }
        else {
            return `${this.street}, ${this.building}, ${this.city}, ${this.state}, ${this.zipCode}, ${this.country}`;
        }
    }
    /**
     * Override ECPrototype to print the response from the toString() method.
     */
    print() {
        console.log(this.toString(true));
    }
}
exports.ECPrototypesAddress = ECPrototypesAddress;
