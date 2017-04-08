import fetchWordnikResource from './modules/fetchWordnikResource';
import formatWordnikDefinitions from './modules/formatWordnikDefinitions';

module.exports = (robot) => {
  robot.respond(/define (.*)/i, (msg) => {
    const word = msg.match[1];
    fetchWordnikResource(word)
      .then(res => formatWordnikDefinitions(word, res).then(reply => msg.send(reply)))
      .catch(error => robot.logger.error(error));
  });
};
