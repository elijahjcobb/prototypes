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
 * A class representing a MIME type.
 */

export class ECPrototypesMime extends ECPrototype {

	public type: string;
	public extension: string;

	/**
	 * The default constructor will only create an instance. Use the static method helpers to create new instances.
	 */
	public constructor() { super() }

	/**
	 * Convert to a string representation.
	 * @return {string}
	 */
	public toString(): string {

		return this.type + "/" + this.extension;

	}

	/**
	 * Verify if a mime string is equal to this instance.
	 * @param {string} value A mime string.
	 * @return {boolean} Whether the mimes are equal.
	 */
	public isMimeStringAllowed(value: string): boolean {

		let givenMime: ECPrototypesMime = ECPrototypesMime.initWithMimeString(value);
		let type: boolean = givenMime.type === this.type || this.type === "*";
		let extension: boolean = givenMime.extension === this.extension || this.extension === "*";

		return type && extension;

	}

	/**
	 * Create a new instance with a mime string.
	 * @param {string} value The mime string.
	 * @return {ECPrototypesMime} A new instance.
	 */
	public static initWithMimeString(value: string): ECPrototypesMime {

		let items: string[] = value.split("/");

		return ECPrototypesMime.initWithComponents(items[0], items[1]);

	}

	/**
	 * Create a new instance with components.
	 * @param {string} type The type.
	 * @param {string} extension The extension.
	 * @return {ECPrototypesMime} A new instance.
	 */
	public static initWithComponents(type?: string, extension?: string): ECPrototypesMime {

		let mime: ECPrototypesMime = new ECPrototypesMime();

		mime.type = type || "*";
		mime.extension = extension || "*";

		return mime

	}

}