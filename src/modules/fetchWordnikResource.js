import 'isomorphic-fetch';

/**
 * @typedef fetchWordnikResource
 * @property {string[]} * Array of definitions pertaining to the word
*/

/**
 * Fetch resources from the wordnik api
 * @param  {string} word The string to search for on wordnik.
 * @return {Promise<fetchWordnikResource>} A promise to the api response.
*/
function fetchWordnikResource(word) {
  const apiKey = process.env.HUBOT_WORDNIK_API_KEY || false;
  return new Promise((resolve, reject) => {
    if (!apiKey) {
      reject('HUBOT_WORDNIK_API_KEY not found');
    } else {
      const url = `http://api.wordnik.com/v4/word.json/${escape(word)}/definitions`;
      const params = { headers: { api_key: apiKey } };
      fetch(url, params)
        .then(res => res.json())
        .then((json) => {
          resolve(json);
        })
        .catch(err => reject(err));
    }
  });
}

export default fetchWordnikResource;
