'use strict';
const argOptions = require('minimist-options');
const minimist = require('minimist');
const emoji = require('node-emoji');
const chalk = require('chalk');
const validateName = require('validate-element-name');
const utils = require('./utils');

const options = argOptions({
  name: {
    type: 'string',
    alias: 'n',
    default: false
  }
});
const args = minimist(process.argv.slice(1), options);

// Templates const
const REGEX = /o-component-template/g;
const TEMPLATE = './scripts/templates/o-component-template';
const DEST = './components/';

const generatorOptions = {
  REGEX,
  TEMPLATE,
  DEST
};

const validateNameFn = async (name) => {
  return (await validateName(name).isValid) ? true : Promise.reject(' Invalid Component Name');
};


if (!args.name) {
  console.log(`${emoji.get('warning')} ${chalk.red(' Missing arguments try :  --name')}`);
} else {
  Promise.all([validateNameFn(args.name)])
    .then(async (result) => await utils.generate(args.name, args.type, generatorOptions))
    .catch((error) => {
      console.log(`${emoji.get('warning')} ${chalk.red(error)}`);
      process.exit(0);
    })
}
