import formatWordnikDefinitions from './formatWordnikDefinitions';
import definition from './__mocks__/definition.json';

describe('getId', () => {
  test('Returns many definitions for the word "run"', () =>
    formatWordnikDefinitions('run', definition).then((r) => {
      const match = r.match(/Definitions for "run":/);
      expect(match).toBeTruthy();
      expect(r.length).toBeGreaterThan(10000);
    }));

  test('Returns an error when there are no results', () =>
    formatWordnikDefinitions('unembiggen', []).then((r) => {
      expect(r).toBe('No definitions for "unembiggen" found.');
    }));
});
