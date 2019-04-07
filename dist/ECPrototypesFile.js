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
const FS = require("fs");
const collections_1 = require("@elijahjcobb/collections");
const error_1 = require("@elijahjcobb/error");
/**
 * A class for handling files in a file system.
 */
class ECPrototypesFile extends collections_1.ECPrototype {
    /**
     * Create a new ECPrototypesFile instance.
     * @param {string} path The absolute path to the file.
     */
    constructor(path) {
        super();
        if (path == null)
            throw error_1.ECErrorStack.newWithMessageAndType(error_1.ECErrorOriginType.BackEnd, error_1.ECErrorType.NullOrUndefined, new Error("File path is null in constructor.")).withGenericError();
        this.path = path;
        let directoryEnd = path.lastIndexOf("/");
        this.directory = path.substring(0, directoryEnd);
        let nameEnd = path.indexOf(".");
        this.name = path.substring(directoryEnd + 1, nameEnd);
        this.extension = path.substring(path.indexOf(".") + 1);
    }
    /**
     * Checks if the file exists. If it does not, throws an error.
     */
    verifyExists() {
        if (!this.exists())
            throw error_1.ECErrorStack.newWithMessageAndType(error_1.ECErrorOriginType.BackEnd, error_1.ECErrorType.FileDoesNotExist, new Error("File does not exist")).withGenericError();
    }
    /**
     * Checks if the instance exists in the file system.
     * @return {boolean}
     */
    exists() {
        return FS.existsSync(this.path);
    }
    /**
     * Get the data from the file as a buffer.
     * @return {Buffer} A buffer.
     */
    getData() {
        this.verifyExists();
        return FS.readFileSync(this.path);
    }
    /**
     * Get the data from the file as a read stream.
     * @return {Buffer} A ReadStream instance.
     */
    getReadStream() {
        this.verifyExists();
        return FS.createReadStream(this.path);
    }
    /**
     * Get the path to the file.
     * @return {string} The path as a string.
     */
    getPath() {
        return this.path;
    }
    /**
     * Get a JSON representation.
     * @return {object} A Javascript object.
     */
    toJSON() {
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
    getName() {
        return this.name;
    }
    /**
     * Get the extension of the file.
     * @return {string} The file extension as a string.
     */
    getExtension() {
        return this.name;
    }
    /**
     * Get the full name of the file.
     * @return {string} The file full name as a string.
     */
    getFullName() {
        return this.name + "." + this.extension;
    }
}
exports.ECPrototypesFile = ECPrototypesFile;
