// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
//I: value
//O: the type of value as a string
_.typeOf = function(value){
    if (Array.isArray(value)) {
        return "array"; 
    } else if (value === null) {
        return "null";
    } else if (typeof value === "object") {
        return "object";
    } else {
        return typeof value;
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//I: takes in an array, number
//O: return an empty array, return the first element in the array, otherwise return the first number
//E: account for if the number is negative, or if it is greater than array.length
_.first = function(array, number) {
    const output = [];

    // Check if array is actually an array; if not, return an empty array
    if (!Array.isArray(array)) {
        return output;
    }

    // If number is not given or is not a valid number, return the first element
    else if (number === undefined || number === NaN) {
        return array[0];
    }

    // If number is negative, return an empty array
    else if (number < 0) {
        return output;
    }

    // If number is greater than array length, return the whole array
    else if (number > array.length) {
        return array;
    }

    // Otherwise, return the first 'number' elements
    return array.slice(0, number);
};




/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
    const output = [];

    // Check if array is actually an array; if not, return an empty array
    if (!Array.isArray(array)) {
        return output;
    }

    // If number is not given or is not a valid number, return the last element
    else if (number === undefined || number === NaN) {
        return array[array.length - 1];
    }

    // If number is negative, return an empty array
    else if (number < 0) {
        return output;
    }

    // If number is greater than array length, return the whole array
    else if (number > array.length) {
        return array;
    }

    // Otherwise, return the last 'number' elements
    return array.slice(-number);
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//I: an array,a value
//O: return the index of array that is the first occurance of value, return - 1 if value is not an array
//E: what if array has multiple occurances of val
//E: what if val is not an array
_.indexOf = function(array, value) {
    // Loop through the array
    for (let i = 0; i < array.length; i++) {
        // Check if the current element matches the value
        if (array[i] === value) {
            return i; // Return the index if found
        }
    }
    // Return -1 if the value is not found in the array
    return -1;
}



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//I: an array and value
//O: true if array contains value, false otherwise
//E: use ternary do not use strictly, return false if there is no value
_.contains = function(array, value){
    //cycle through the array
    for (let i = 0; i < array.length; i++){
        if (array[i] === value) return true;
    }
    //if no match is found return false
    return false;
};
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
        // Iterate over the array
        for (let i = 0; i < collection.length; i++) {
            // Call the function with the current value, index, and collection
            func(collection[i], i, collection);
        }
    } else if (typeof collection === 'object') {
        // Iterate over an object
        for (let key in collection) {
            if (collection[key]) {
                // Call the function with the current value, key, and collection
                func(collection[key], key, collection);
            }
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
    // Create a new array to store unique values
    const uniqueArray = [];

    // Iterate through the input array
    for (let i = 0; i < array.length; i++) {
        // Check if the current value is not already in the uniqueArray
        if (_.indexOf(uniqueArray, array[i]) === -1) {
            // If it's not, add it to the uniqueArray
            uniqueArray.push(array[i]);
        }
    }

    // Return the array with duplicates removed
    return uniqueArray;
};




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func) {
    // Create a new array to store the elements that pass the condition
    const filteredArray = [];

    // Use _.each to iterate over the array
    _.each(array, function(element, index, collection) {
        // Call the provided function with element, index, and array
        if (func(element, index, collection)) {
            // If the function returns true, add the element to the filteredArray
            filteredArray.push(element);
        }
    });

    // Return the new array with filtered elements
    return filteredArray;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func) {
    // Use _.filter but invert the condition
    return _.filter(array, function(element, index, collection) {
        // Return elements where the function result is false
        return !func(element, index, collection);
    });
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func) {
    // Create two empty arrays: one for truthy values, one for falsy values
    const truthyArray = [];
    const falsyArray = [];

    // Iterate through the array
    _.each(array, function(element, index, collection) {
        // Call the function and push the element into the appropriate array
        func(element, index, collection) ? truthyArray.push(element) : falsyArray.push(element);
    });

    // Return an array containing both subarrays
    return [truthyArray, falsyArray];
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    //create an output array
    const output = [];
    //determine if collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            output.push(func(collection[i], i, collection));
        }
    } else if (typeof collection === "object" && collection !== null) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                output.push(func(collection[key], key, collection));
            }
        }
    }

    return output;
}
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//return using map, map over array, and objects within the array, return the value of every value of the property for each element
_.pluck = function(array, property){
    return _.map(array, object => object[property])
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    if (!func) {
        func = (value) => Boolean(value); // This checks if a value is truthy
    }
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if(!func(collection[i], i, collection)){
            return false;;
        } 
    }
} else if (typeof collection === 'object'){
    for (let key in collection){
        if(!func(collection[key], key, collection))
        return false;
    }
}   
    return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    //check to see if func doesnt return a boolean
    if(!func){
        func = (value) => Boolean(value);//this checks if the function doesnt return a booleans
    }
    //check to see if the function is an array
    if(Array.isArray(collection)){
        //loop through it
        for (let i = 0; i < collection.length; i++){
            if (func(collection[i], i, collection)){
                return true;
            }
        }
    } else if (typeof collection === 'object'){
        for (let key in collection){
            if (func(collection[key], key, collection)){
                return true;
            }
        }

    }
    return false;

};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    //initialize an undefined output
    let output;
    //check to see if the seed is undefined
    if (seed === undefined){
        //start it with first index in array since there is no seed value
        output = array[0];
        for (let i = 1; i < array.length; i++){
        output = func(output, array[i], i);
        }
        } else {
            output = seed;
            for (let i = 0; i < array.length; i++){
                output = func(output, array[i], i);
            }
        }
        return output;
    };



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
///... is a spread operator
_.extend = function(target, ...objects){
    //loop through the array of objects
    for (let i = 0; i < objects.length; i++){
    //make a current singular obkect by accessing index
    let object = objects[i];
    //loop through the properties in the individual object now
    for (let key in object){
        //check to see if object has a specific property that is its own instead of another that has been added to prototype
        if (object.hasOwnProperty(key)){
            target[key] = object[key];
        }
    }
    }
    return target;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}