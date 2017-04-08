import fetchMock from 'fetch-mock';

import fetchWordnikResource from './fetchWordnikResource';
import definition from './__mocks__/definition.json';

describe('getId', () => {
  beforeAll(() => {
    process.env.HUBOT_WORDNIK_API_KEY = 'true';
    fetchMock.get('http://api.wordnik.com/v4/word.json/run/definitions', definition);
    fetchMock.get('*', { status: 401, throws: 'error' });
  });

  test('Returns an ID for the second match of round two, 2013', () =>
    fetchWordnikResource('run').then((r) => {
      expect(r.length).toBeTruthy();
    }));

  test('error with the API', () =>
    fetchWordnikResource('throws').catch((e) => {
      expect(e).toBe('error');
    }));

  test('errors without an API key', () => {
    delete process.env.HUBOT_WORDNIK_API_KEY;
    return fetchWordnikResource('run').catch((e) => {
      expect(e).toBe('HUBOT_WORDNIK_API_KEY not found');
    });
  });

  afterAll(() => {
    delete process.env.HUBOT_WORDNIK_API_KEY;
    fetchMock.restore();
  });
});
