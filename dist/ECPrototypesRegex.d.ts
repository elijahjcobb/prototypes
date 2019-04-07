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
export declare abstract class ECPrototypesRegex {
    /**
     * Convert a string to uppercase where each word's first character is capitalised.
     * @param {string} value The string.
     * @return {string} A string.
     */
    static toUpperCase(value: string): string;
    /**
     * Verifies if a string is a phone number.
     * @param {string} value A phone number.
     * @return {boolean} Whether the regex matches.
     */
    static isPhoneNumber(value: string): boolean;
    /**
     * Verifies if a string is a birthday.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isBirthday(value: string): boolean;
    /**
     * Verifies if a string is a email.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isEmail(value: string): boolean;
    /**
     * Verifies if a string is a first name.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isFirstName(value: string): boolean;
    /**
     * Verifies if a string is a valid question.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isInquiry(value: string): boolean;
    /**
     * Verifies if a string is a valid hex color.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isHexColor(value: string): boolean;
    /**
     * Verifies if a string is a last name.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isLastName(value: string): boolean;
    /**
     * Verifies if a string is a username.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isUsername(value: string): boolean;
    /**
     * Verifies if a string is a name of a location.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isLocationName(value: string): boolean;
    /**
     * Verifies if a string is a name of a folder.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isFolderName(value: string): boolean;
    /**
     * Verifies if a string is a name of an organization.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isOrganizationName(value: string): boolean;
    /**
     * Verifies if a string is a name of a device.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isDeviceName(value: string): boolean;
    /**
     * Verifies if a string is a valid password.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isPassword(value: string): boolean;
    /**
     * Verifies if a date is within the last 30 days.
     * @param {string} value The string.
     * @return {boolean} Whether the regex matches.
     */
    static isAcceptableResponseDate(value: number): boolean;
}
