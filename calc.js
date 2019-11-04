const calc = {};
calc.add = function (a, b) {
    return a + b;
};
calc.subtract = function (a, b) {
    return a - b;
};
calc.multi = function (a, b) {
    return a * b;
};
calc.div = function (a, b) {
    return a / b;
};
module.exports = calc;