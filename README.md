# Prototypes
A collection of helpful classes to manage various real world things in TypeScript.

## Classes 
| Class | Description |
| --- | --- |
| [`ECPrototypesAddress`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesAddress.d.ts) | A class representing a physical street address. |
| [`ECPrototypesByteSize`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesByteSize.d.ts) | A class representing a byte size. |
| [`ECPrototypesByteSizeUnit`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesByteSizeUnit.d.ts) | A enum representing a byte size unit. |
| [`ECPrototypesColor`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesColor.d.ts) | A class representing a color. |
| [`ECPrototypesCoordinate`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesCoordinate.d.ts) | A class representing a GPS coordinate. |
| [`ECPrototypesDate`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesDate.d.ts) | A class representing a date. |
| [`ECPrototypesFile`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesFile.d.ts) | A class representing a file. |
| [`ECPrototypesMime`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesMime.d.ts) | A class representing a file mime. |
| [`ECPrototypesRegex`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesRegex.d.ts) | A helper class providing regex tests. |
| [`ECPrototypesTimeInterval`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesTimeInterval.d.ts) | A class representing a time interval. |
| [`ECPrototypesTimeUnit`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesTimeUnit.d.ts) | A enum representing units of time. |
| [`ECPrototypesWait`](https://github.com/elijahjcobb/prototypes/blob/master/dist/ECPrototypesWait.d.ts) | A helper class to synchronously wait a time interval. |

## Full Documentation

### Source Code
If you want to poke around the source code for fun it is all located in the [`ts` directory](https://github.com/elijahjcobb/prototypes/tree/master/ts). 

### TypeScript Declaration Files
I have completely documented everything. In the table at the top each link on class each names directs to the declaration file for the class on GitHub. By installing with NPM you will also get all my type files.


## Import
All the structures are packages on `@elijahjcobb/prototypes`. Just import it like normal and you can use any structure of the package.
#### All Together
```typescript
import ECPrototypes = require("@elijahjcobb/prototypes");
let color: ECPrototypes.ECPrototypesColor;
```

#### Separate
```typescript
import { ECPrototypesColor } from "@elijahjcobb/prototypes";
let color: ECPrototypesColor;
```

## Generics
Yes, literally everything is generic. I wrote this for a huge project and made sure everything I made was generic.

## Error Handling
Most classes throw errors when you do something that is a "no-no". This package is using a error handling package of mine called `error`. Check out the package [`@elijahjcobb/error`](https://www.npmjs.com/package/@elijahjcobb/error) for all the documentation. Any errors will be thrown as an instance of an `ECErrorStack`.  

## Bugs
If you find any bugs please create an issue on [GitHub](https://github.com/elijahjcobb/prototypes/issues) or if you are old fashioned email me at [elijah@elijahcobb.com](mailto:elijah@elijahcobb.com).