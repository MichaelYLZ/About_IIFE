/* 讲解
You need a function expression to form an IIFE. 

Function statements/definitions 
are never used 
for creating IIFEs.

Any variables declared inside the IIFE 
are not visible to the outside world.
下面是例子代码
*/

(function IIFE_initGame() {
    // Private variables that no one has access to outside this IIFE
    var lives;
    var weapons;
    
    init();

    // Private function that no one has access to outside this IIFE
    function init() {
        lives = 5;
        weapons = 10;
    }
}());
/* 以上代码讲解
we have declared two variables 
inside the IIFE and 

they are private to that IIFE. 

No one outside the IIFE 
has access to them. 

Similarly, we have an init function 
that no one has access to outside the IIFE. 

But the init function 
can access those private variables.
*/