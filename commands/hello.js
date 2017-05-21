'use strict';
/**
 * hello 命令
 */
const program = require('commander');

exports.regist = function() {
  program.command('hello <output>')
          .usage('<output>')
          .description('hello 子命令')
          .action(function(output) {
            console.log(output);
            console.log('hello 命令对应的动作')
          });    
  
  program.parse(process.argv);
};