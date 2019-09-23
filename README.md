# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jackson.stark/lotide`

**Require it:**

`const _ = require('@jackson.stark/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: asserts that two arrays are equal, returns true (pass) or false (fail).
* `assertEqual(...)`: asserts that two primitive-data-type inputs are equal, returns true (pass) or false (fail).
* `assertObjectsEqual(...)`: asserts that two objects are equal, returns true (pass) or false (fail).
* `countLetters(...)`: counts the number of letters within an string.
* `countOnly(...)`: counts the number of occurences of an item within an array.
* `eqArrays(...)`: checks if two arrays are equal, returns true or false.
* `eqObjects(...)`: checks if two objects are equal, returns true or false.
* `findKey(...)`:  takes in an object and a callback, scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(...)`: takes in an object and a value, scans the object and returns the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten(...)`: takes in an array of arrays and returns a "flattened" version of the array.
* `head(...)`: returns the first item in the array.
* `letterPositions(...)`: returns an object of all the indices (zero-based positions) in the input string where each character is found.
* `map(...)`: returns a new array with the results of calling a provided function on every element in the calling array.
* `middle(...)`: Excludes first and last elements and returns an array with only the middle elemen(s) of the provided array.
* `tail(...)`: returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil(...)`: return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `without(...)`: return a subset of a given array, removing unwanted elements.