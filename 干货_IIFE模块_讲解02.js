/* 讲解 + 代码Demo
Classical JavaScript module pattern

let’s see an example of module pattern 
that puts IIFEs and closures 
on steroids.

We will implement a classic Sequence singleton object that works seamlessly 
without anyone being able to accidentally 
corrupt the current sequence value.

We will write this code 
in two steps 
so we understand what’s happening 
incrementally.
*/

var Sequence = (function sequenceIIFE() {
    
    // Private variable to store current counter value.
    var current = 0;
    
    // Object that's returned from the IIFE.
    return {
    };
    
}());

alert(typeof Sequence); // alerts "object"

/* 代码讲解
an IIFE returns an object

We also have a local variable 
in the IIFE 
named current.



*/

