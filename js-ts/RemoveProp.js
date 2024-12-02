// Implement a function that removes a property from an object
// If the object obj has a property prop,
// the function should remove the property from the object
// and returns true; otherwise, it should return false.

function removeProperty(obj, prop) {
    // Your code goes here
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
        return true;
    } else {
        return false;
    }
}