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

import FS = require("fs");
import {ECPrototype} from "@elijahjcobb/collections";
import {ECErrorOriginType, ECErrorStack, ECErrorType} from "@elijahjcobb/error";

/**
 * A class for handling files in a file system.
 */
export class ECPrototypesFile extends ECPrototype {

	private readonly directory: string;
	private readonly name: string;
	private readonly extension: string;
	private readonly path: string;

	/**
	 * Create a new ECPrototypesFile instance.
	 * @param {string} path The absolute path to the file.
	 */
	public constructor(path: string) {

		super();

		if (path == null) throw ECErrorStack.newWithMessageAndType(ECErrorOriginType.BackEnd, ECErrorType.NullOrUndefined, new Error("File path is null in constructor.")).withGenericError();

		this.path = path;
		let directoryEnd: number = path.lastIndexOf("/");
		this.directory = path.substring(0, directoryEnd);
		let nameEnd: number = path.indexOf(".");
		this.name = path.substring(directoryEnd + 1, nameEnd);
		this.extension = path.substring(path.indexOf(".") + 1);

	}

	/**
	 * Checks if the file exists. If it does not, throws an error.
	 */
	private verifyExists(): void {

		if (!this.exists()) throw ECErrorStack.newWithMessageAndType(ECErrorOriginType.BackEnd, ECErrorType.FileDoesNotExist, new Error("File does not exist")).withGenericError();

	}

	/**
	 * Checks if the instance exists in the file system.
	 * @return {boolean}
	 */
	public exists(): boolean {

		return FS.existsSync(this.path);

	}

	/**
	 * Get the data from the file as a buffer.
	 * @return {Buffer} A buffer.
	 */
	public getData(): Buffer {

		this.verifyExists();

		return FS.readFileSync(this.path);

	}

	/**
	 * Get the data from the file as a read stream.
	 * @return {Buffer} A ReadStream instance.
	 */
	public getReadStream(): FS.ReadStream {

		this.verifyExists();

		return FS.createReadStream(this.path);

	}

	/**
	 * Get the path to the file.
	 * @return {string} The path as a string.
	 */
	public getPath(): string {

		return this.path;

	}

	/**
	 * Get a JSON representation.
	 * @return {object} A Javascript object.
	 */
	public toJSON(): object {

		return {
			path: this.path,
			directory: this.directory,
			name: this.name,
			extension: this.extension
		};

	}

	/**
	 * Get the name of the file.
	 * @return {string} The file name as a string.
	 */
	public getName(): string {

		return this.name;

	}

	/**
	 * Get the extension of the file.
	 * @return {string} The file extension as a string.
	 */
	public getExtension(): string {

		return this.name;

	}

	/**
	 * Get the full name of the file.
	 * @return {string} The file full name as a string.
	 */
	public getFullName(): string {

		return this.name + "." + this.extension;

	}

}