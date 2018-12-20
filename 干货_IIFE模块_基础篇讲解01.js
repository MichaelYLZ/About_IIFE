/* 讲解 + 代码Demo
When we see module pattern, 
I will explain 
how to give privileged and controlled access to these private variables 
to the world 
outside the IIFE. 

So read on to know that 
even if you already feel like an IIFE Ninja!

IIFEs_with_return_value

another really important and powerful feature of IIFEs is that 

they can return a value 
that can be assigned to a variable.

*/

var result = (function() {
    return "From IIFE"; // a return statement
}());

alert(result); // alerts "From IIFE"

/* 以上代码讲解
Basically, 
the IIFE is immediately executed,   
and then 
the return value from it 
is assigned to the result variable.

This is a really powerful pattern 
that we are going to use 
as we look at the example of module pattern.
*/