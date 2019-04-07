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
const error_1 = require("@elijahjcobb/error");
/**
 * A class representing the components of a color.
 */
class ECPrototypesColor extends collections_1.ECPrototype {
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor() { super(); }
    /**
     * Generate a hex string components from a color component.
     * @param {number} component A color component.
     * @return {string} A hex string component.
     */
    componentToHex(component) {
        let hex = component.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    /**
     * Convert this instance into a hex color string.
     * @return {string} A hex color string.
     */
    toHex() {
        return this.componentToHex(this.red) + this.componentToHex(this.green) + this.componentToHex(this.blue);
    }
    /**
     * Create a new ECPrototypesColor instance from color components.
     * @param {number} red The red component.
     * @param {number} green The green component.
     * @param {number} blue The blue component.
     * @return {ECPrototypesColor} A new instance.
     */
    static initWithComponents(red, green, blue) {
        let color = new ECPrototypesColor();
        color.red = red;
        color.green = green;
        color.blue = blue;
        return color;
    }
    /**
     * Create a new ECPrototypesColor instance from a hex color string.
     * @param {string} hex A hex color string.
     * @return {ECPrototypesColor} A new instance.
     */
    static initWithHex(hex) {
        if (hex === undefined)
            throw error_1.ECErrorStack.newWithMessageAndType(error_1.ECErrorOriginType.BackEnd, error_1.ECErrorType.NullOrUndefined, new Error("Hex string in ECPrototypesColor constructor is undefined.")).withGenericError();
        hex = hex.replace(RegExp("#", "g"), "");
        if (hex.length !== 6)
            throw error_1.ECErrorStack.newWithMessageAndType(error_1.ECErrorOriginType.BackEnd, error_1.ECErrorType.ParameterIncorrectFormat, new Error("Hex string in ECPrototypesColor constructor is not 6 characters long.")).withGenericError();
        let color = new ECPrototypesColor();
        color.red = parseInt(hex.substr(0, 2), 16);
        color.green = parseInt(hex.substr(2, 2), 16);
        color.blue = parseInt(hex.substr(4, 2), 16);
        return color;
    }
}
exports.ECPrototypesColor = ECPrototypesColor;
