# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kliang1194/lotide`

**Require it:**

`const _ = require('@kliang1194/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Retrieves the first element from the array.
* `tail`: Retrieves every element except the head (first element) of the array
* `middle`: Retrieves the middle-most element(s) of the given array.
* `assertArraysEqual`: Asserts whether the input is equal to the output for arrays. 
* `assertEqual`: Asserts whether the input is equal to the output. 
* `assertObjectsEqual`: Asserts whether the input is equal to the output for objects. 
* `countLetter`: Takes in a sentence and returns a count of each of the letters in a sentence.
* `countOnly`: Takes in a collection of items and returns counts for a specific subset of those items.
* `eqArrays`: Takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects`: Takes in two objects and returns true or false, based on a perfect match.
* `findKey`: Takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value
* `findKeyByValue`: Takes in an object and a value. It scans the object and return the first key which contains the given value.
* `letterPositions`: Returns all the indices (zero-based positions) in the string where each character is found.
* `map`: Returns a new array based on the results of the callback function.
* `takeUntil`: Collects items from a provided array until the callback provided returns a truthy value.
* `without`: Returns a subset of a given array, removing unwanted elements.
