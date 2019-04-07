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

/**
 * A static class that handles regex checks for different variables.
 */
export abstract class ECPrototypesRegex {

	/**
	 * Convert a string to uppercase where each word's first character is capitalised.
	 * @param {string} value The string.
	 * @return {string} A string.
	 */
	public static toUpperCase(value: string): string {

		value = value.trim();
		value = value.toLowerCase();
		value = value.charAt(0).toUpperCase() + value.slice(1);

		return value;

	}

	/**
	 * Verifies if a string is a phone number.
	 * @param {string} value A phone number.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isPhoneNumber(value: string): boolean {

		return /^\d{10}$/.test(value);

	}

	/**
	 * Verifies if a string is a birthday.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isBirthday(value: string): boolean {

		return /^\d{8}$/.test(value);

	}

	/**
	 * Verifies if a string is a email.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isEmail(value: string): boolean {

		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);

	}

	/**
	 * Verifies if a string is a first name.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isFirstName(value: string): boolean {

		return /^[A-z]+$/.test(value) && value.length <= 128;

	}

	/**
	 * Verifies if a string is a valid question.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isInquiry(value: string): boolean {

		return /^[a-zA-Z0-9?'.,!\s#]+$/.test(value) && value.length <= 128;

	}

	/**
	 * Verifies if a string is a valid hex color.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isHexColor(value: string): boolean {

		return /^[a-z0-9]+$/.test(value) && value.length <= 128;

	}

	/**
	 * Verifies if a string is a last name.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isLastName(value: string): boolean {

		return /^[A-z]+$/.test(value) && value.length <= 128;

	}

	/**
	 * Verifies if a string is a username.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isUsername(value: string): boolean {

		return /^[a-zA-Z0-9]+$/.test(value) && value.length <= 16;

	}

	/**
	 * Verifies if a string is a name of a location.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isLocationName(value: string): boolean {

		return /^[a-zA-Z0-9\s'.]*$/.test(value) && value.length <= 32;

	}

	/**
	 * Verifies if a string is a name of a folder.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isFolderName(value: string): boolean {

		return /^[a-zA-Z0-9\s']*$/.test(value) && value.length <= 32;

	}

	/**
	 * Verifies if a string is a name of an organization.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isOrganizationName(value: string): boolean {

		return /^[a-zA-Z0-9\s.']+$/.test(value) && value.length <= 32;

	}

	/**
	 * Verifies if a string is a name of a device.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isDeviceName(value: string): boolean {

		return /^[a-zA-Z0-9\s']+$/.test(value) && value.length <= 32;

	}

	/**
	 * Verifies if a string is a valid password.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isPassword(value: string): boolean {

		return value.length <= 64 && value.length > 0;

	}

	/**
	 * Verifies if a date is within the last 30 days.
	 * @param {string} value The string.
	 * @return {boolean} Whether the regex matches.
	 */
	public static isAcceptableResponseDate(value: number): boolean {

		let currentDate: number = Date.now();
		let dayValue: number = 1000 * 60 * 60 * 24;
		let acceptedRange: number = dayValue * 30;
		let range: number = Math.abs(currentDate - value);

		return range <= acceptedRange;

	}

}