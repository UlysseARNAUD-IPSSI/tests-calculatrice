const Division = require('.');
const DividedByZeroError = require('../Errors/DividedByZeroError');


test('Divise 25 par 5 pour obtenir 5', () => {
    expect(() => Division(25, 5)).toBe(5);
});

test('Divise -25 par 5 pour obtenir -5', () => {
    expect(() => Division(-25, 5)).toBe(-5);
});

test('Divise 25 par -5 pour obtenir -5', () => {
    expect(() => Division(25, -5)).toBe(-5);
});

test('Divise -25 par -5 pour obtenir 5', () => {
    expect(() => Division(-25, -5)).toBe(5);
});

test('Divise un nombre positif par zero afin d\'obtenir une erreur.', () => {
    expect(() => Division(Math.floor(Math.random() * 100) + 1, 0)).toThrow();
});

test('Divise un nombre négatif par zero afin d\'obtenir une erreur.', () => {
    expect(() => Division((Math.floor(Math.random() * 100) + 1) * -1, 0)).toThrow();
});
