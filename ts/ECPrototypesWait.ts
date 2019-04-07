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

import {ECPrototypesTimeUnit} from "./ECPrototypesTimeUnit";
import {ECPrototypesTimeInterval} from "./ECPrototypesTimeInterval";

/**
 * A helper class to synchronously wait an amount of time using a promise.
 */
export abstract class ECPrototypesWait {

	/**
	 * Wait an amount of time using components.
	 * @param {number} time The length of time.
	 * @param {ECPrototypesTimeUnit} unit The unit of time.
	 * @return {Promise<void>} A promise.
	 */
	public static wait(time: number, unit?: ECPrototypesTimeUnit): Promise<void> {

		return ECPrototypesWait.waitInterval(new ECPrototypesTimeInterval(time, unit || ECPrototypesTimeUnit.Millisecond));

	}

	/**
	 * Wait an amount of time using an ECPrototypesTimeInterval instance.
	 * @param {ECPrototypesTimeInterval} interval The time interval.
	 * @return {Promise<void>} A promise.
	 */
	public static waitInterval(interval: ECPrototypesTimeInterval): Promise<void> {

		return new Promise<void>((resolve: Function, reject: Function): void => {

			setTimeout(() => {

				resolve();

			}, interval.toMilliseconds());

		});

	}

}