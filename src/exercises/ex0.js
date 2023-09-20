function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}
function multiplie(a, b) {
    return a * b;
}
function containsSubstring(a, b) {
    return a.includes(b);
}
function reverseString(a) {
    return a.split('').reverse().join('');
}
function capitalize(a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
}
function isEven(a) {
    return a % 2 === 0;
}

module.exports = {
    sum,
    substract,
    multiplie,
    containsSubstring,
    reverseString,
    capitalize,
    isEven
};