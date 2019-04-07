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
 * A class representing the components of a color.
 */
export declare class ECPrototypesColor extends ECPrototype {
    red: number;
    green: number;
    blue: number;
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor();
    /**
     * Generate a hex string components from a color component.
     * @param {number} component A color component.
     * @return {string} A hex string component.
     */
    private componentToHex;
    /**
     * Convert this instance into a hex color string.
     * @return {string} A hex color string.
     */
    toHex(): string;
    /**
     * Create a new ECPrototypesColor instance from color components.
     * @param {number} red The red component.
     * @param {number} green The green component.
     * @param {number} blue The blue component.
     * @return {ECPrototypesColor} A new instance.
     */
    static initWithComponents(red: number, green: number, blue: number): ECPrototypesColor;
    /**
     * Create a new ECPrototypesColor instance from a hex color string.
     * @param {string} hex A hex color string.
     * @return {ECPrototypesColor} A new instance.
     */
    static initWithHex(hex?: string): ECPrototypesColor;
}
