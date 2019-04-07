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
export class ECPrototypesDate extends ECPrototype {

	public day: number;
	public month: number;
	public year: number;

	/**
	 * The default constructor will only create an instance. Use the static method helpers to create new instances.
	 */
	public constructor() { super() }

	/**
	 * Convert this to a string representation.
	 * @return {string} A string.
	 */
	public toString(): string {

		let mPadding: string = "";
		let dPadding: string = "";

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
	public toJSON(): object {

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
	public static initWithDateString(value: string): ECPrototypesDate {

		if (value.length !== 8) return null;

		let monthString: string = value.substr(0, 2);
		let dayString: string = value.substr(2, 2);
		let yearString: string = value.substr(4, 4);

		let month: number = parseInt(monthString);
		let day: number = parseInt(dayString);
		let year: number = parseInt(yearString);

		return ECPrototypesDate.initWithComponents(month, day, year);

	}

	/**
	 * Create an ECPrototypesDate instance from date components.
	 * @param {number} month The month.
	 * @param {number} day The day.
	 * @param {number} year The year.
	 * @return {ECPrototypesDate} A new instance.
	 */
	public static initWithComponents(month?: number, day?: number, year?: number): ECPrototypesDate {

		let date: ECPrototypesDate = new ECPrototypesDate();

		date.month = month;
		date.day = day;
		date.year = year;

		return date;
	}

}