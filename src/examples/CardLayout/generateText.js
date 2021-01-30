// @ts-check
const faker = require('faker');

/**
 * Generates required count of paragraphs
 * @param {{count: number}} config
 */
exports.generateText = ({ count }) => {
  return [...Array(count).keys()].map(() => faker.lorem.paragraph());
};
