/**
 * Convert a provided round number and year into an AFL code
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
