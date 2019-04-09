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
import { ECPrototype } from "@elijahjcobb/collections";
/**
 * A class for handling files in a file system.
 */
export declare class ECPrototypesFile extends ECPrototype {
    private readonly directory;
    private readonly name;
    private readonly extension;
    private readonly path;
    /**
     * Create a new ECPrototypesFile instance.
     * @param {string} path The absolute path to the file.
     */
    constructor(path: string);
    /**
     * Checks if the file exists. If it does not, throws an error.
     */
    private verifyExists;
    /**
     * Checks if the instance exists in the file system.
     * @return {boolean}
     */
    exists(): boolean;
    /**
     * Get the data from the file as a buffer.
     * @return {Buffer} A buffer.
     */
    getData(): Buffer;
    /**
     * Get the data from the file as a read stream.
     * @return {Buffer} A ReadStream instance.
     */
    getReadStream(): FS.ReadStream;
    /**
     * Get the path to the file.
     * @return {string} The path as a string.
     */
    getPath(): string;
    /**
     * Get a JSON representation.
     * @return {object} A Javascript object.
     */
    toJSON(): object;
    /**
     * Get the name of the file.
     * @return {string} The file name as a string.
     */
    getName(): string;
    /**
     * Get the extension of the file.
     * @return {string} The file extension as a string.
     */
    getExtension(): string;
    /**
     * Get the full name of the file.
     * @return {string} The file full name as a string.
     */
    getFullName(): string;
}
