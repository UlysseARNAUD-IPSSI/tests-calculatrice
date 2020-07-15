const Addition = require('./index');

test('Additionne 1 et 2 pour arriver à 3', () => {
    expect(Addition(1, 2)).toBe(3);
});
