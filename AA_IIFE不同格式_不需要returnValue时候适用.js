// 格式 01

!function() {
    alert("Hello from IIFE!");
}();

// That’s a function that died immediately after it came to life.

// 可以

+function() {
    alert("Hello from IIFE!");
}();

-function() {
    alert("Hello from IIFE!");
}();

// 格式 02

void function() {
    alert("Hello from IIFE!");
}();

/*
void is basically forcing the function to be treated as an expression.

All the above patterns are useful when we are not interested in the return value from the IIFE.

*/
