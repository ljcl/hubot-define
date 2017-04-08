/**
 * @typedef formatWordnikDefinitions
 * @property {reply} * Message response to send to channel/user
*/

/**
 * Fetch resources from the wordnik api
 * @param  {string} word The searched for on wordnik
 * @param  {string[]} json The json response from {@link fetchWordnikResource}
 * @return {Promise<formatWordnikDefinitions>} A promise to the formatted response
*/
function formatWordnikDefinitions(word, json = []) {
  return new Promise((resolve) => {
    if (json.length === 0) {
      resolve(`No definitions for "${word}" found.`);
    } else {
      let lastSpeechType = null;
      let reply = `Definitions for "${word}":\n`;

      json.forEach((def) => {
        if (def.partOfSpeech !== lastSpeechType) {
          if (typeof def.partOfSpeech !== 'undefined') {
            reply += ` (${def.partOfSpeech})\n`;
          }
        }
        lastSpeechType = def.partOfSpeech;

        reply += `  - ${def.text}\n`;
      });
      resolve(reply);
    }
  });
}

export default formatWordnikDefinitions;
