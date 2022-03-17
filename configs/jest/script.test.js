var functions = require('./script');

test('adds 1 + 2 to equal 3', () => {
  expect(functions.add(1, 2)).toBe(3);
});

// matchers =>
// expect(data).toEqual({one: 1, two: 2});
// expect(a + b).not.toBe(0);
// expect(n).toBeNull();
// expect(n).toBeDefined();
// expect(n).not.toBeUndefined();
// expect(n).not.toBeTruthy();
// expect(n).toBeFalsy();
// expect(value).toBeGreaterThan(3);
// expect(value).toBeGreaterThanOrEqual(3.5);
// expect(value).toBeLessThan(5);
// expect(value).toBeLessThanOrEqual(4.5);
// expect(new Set(shoppingList)).toContain('milk');
