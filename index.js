window.helpers = (function() {
 // 01
  var str = "bar";
 // 02
  const obj = {name: 'Mike', age: '20'};
 // 03 
  function add(a, b) {
      return a + b;
  }
 // 04 
  const num = 1234;
    
  return {
      str,
      obj,
      add,
      num
  }
})();