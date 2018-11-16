'use strict';
const path = require('path');
const emoji = require('node-emoji');
const chalk = require('chalk');
//Fs transformers
const cp = require('recursive-copy');
const through = require('through2'); // TODO use native streams

const generateComponent = async (name, type, options) => {
  const { REGEX, TEMPLATE, DEST } = options;
  const copyOptions = {
    overwrite: true,
    expand: true,
    dot: true,
    junk: true,
    rename: function(filePath) {
      return filePath.replace(REGEX, name);
    },
    transform: function(src, dest, stats) {
      if (
        ['.tsx', '.ts', '.json', '.md', '.html'].indexOf(path.extname(src)) ===-1
      ) {
        return null;
      }
      return through(function(chunk, enc, done) {
        var output = chunk.toString().replace(REGEX, name);
        done(null, output);
      });
    }
  };

  cp(TEMPLATE, `${DEST}/${name}`, copyOptions)
    .on(cp.events.COPY_FILE_COMPLETE, function(copyOperation) {
      console.log(
        emoji.get('white_check_mark'),
        chalk.green(` Generated files ${copyOperation.dest} `)
      );
    })
    .then(function(results) {
      console.log(
        emoji.get('white_check_mark'),
        chalk.green(` Done : ${results.length} file(s) copied `)
      );
      return Promise.resolve(results);
    })
    .catch(function(error) {
      return Promise.reject(error);
    });
};

module.exports = {
  generate: generateComponent
};
