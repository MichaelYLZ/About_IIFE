/* 讲解 + 代码Demo
 improve this 
 by adding a few functions on the object 
 that we return
*/

var Sequence = (function sequenceIIFE() {
    
    // Private variable to store current counter value.
    var current = 0;
    
    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },
        
        getNextValue: function() {
            current = current + 1;
            return current;
        }
    };
    
}());

console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2

/*
current variable 
is private to the IIFE, 
no one but the functions that have access to it through closure 
can modify or access the current variable.

*/