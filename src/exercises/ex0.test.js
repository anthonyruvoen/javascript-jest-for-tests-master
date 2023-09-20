import { sum, substract, multiplie, containsSubstring, reverseString, capitalize } from './ex0.js'


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('substracts 4 - 3 to equal 1', () => {
    expect(substract(4, 3)).toBe(1);
});
test('multiplies 2 * 3 to equal 6', () => {
    expect(multiplie(2, 3)).toBe(6);
});
test('23 includes 3', () => {
    expect(containsSubstring("23", "3")).toBe(true);
});
test('a includes b', () => {
    expect(reverseString("23")).toBe("32");
});
test('capitalize first letter of hello', () => {
    expect(capitalize("hello")).toBe("Hello");
});
test('test if 33 is even', () => {
    expect(isEven(33)).toBe(33);
});