'use strict';
/**
 * forgive 命令
 */
const program = require('commander');

exports.regist = function () {
  program.command('forgive [name] [atest]')
    .description('hello 子命令')
    .option('-n, --name', 'hello对象的名字')
    .option('-a, --atest', '测试属性')
    .action(function (name, atest) {
      console.log('forgive 命令对应的动作')
    });
  // .parse(process.argv);

  program.parse(process.argv);
};