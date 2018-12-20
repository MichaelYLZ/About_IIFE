// 00 未成形
(function() {
    alert("I am not an IIFE yet!");
});

// 格式 1 作者推荐这个
(function() {
    alert("I am an IIFE!");
}());

// 格式 2
(function() {
    alert("I am an IIFE, too!");
})();