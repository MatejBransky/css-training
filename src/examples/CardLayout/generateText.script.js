// @ts-check
const path = require('path');
const fs = require('fs');
const prettier = require('prettier');
const { loggerFactory } = require('@matejbransky/logger');

const { generateText } = require('./generateText');

const log = loggerFactory.getLogger('generateText.script');
loggerFactory.setDefaultLevel('ALL');

const config = {
  rootDir: path.resolve(__dirname, '../../'),
  baseDir: __dirname,
  filename: 'texts.json',
};

const texts = generateText({ count: 100 });

prettier.resolveConfig(config.rootDir).then((options) => {
  const content = prettier.format(JSON.stringify(texts), {
    parser: 'json',
    ...options,
  });
  fs.writeFileSync(path.resolve(config.baseDir, config.filename), content);
});

log.info('DONE!');
