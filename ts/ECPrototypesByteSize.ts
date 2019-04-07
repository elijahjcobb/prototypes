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
import { ECPrototypesByteSizeUnit } from "./ECPrototypesByteSizeUnit";

/**
 * A class to represent byte sizes.
 */
export class ECPrototypesByteSize extends ECPrototype {

	private readonly value: number;
	private readonly unit: ECPrototypesByteSizeUnit;

	/**
	 * Create a new ECPrototypesByteSize instance.
	 * @param {number} value The number of bytes.
	 * @param {ECPrototypesByteSizeUnit} unit The unit of bytes to be used.
	 */
	public constructor(value: number, unit: ECPrototypesByteSizeUnit) {

		super();

		this.value = value;
		this.unit = unit;

	}

	/**
	 * Convert to a string representation.
	 * @return {string} The byte size as a string.
	 */
	public toString(): string {

		return this.value + this.unit;

	}

}