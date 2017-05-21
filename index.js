'use strict';

const cmd = require('commander');
const pkg = require('./package.json');
const chalk = require('chalk');

cmd
  .version(pkg.version)
  .usage('<command>')
  .description(pkg.description);

// 命令——初始化
cmd
  .command('init <templateName>')
  .description('初始化模板')
  .action((templateName) => {
    require('./commands/init')(templateName);
  });


cmd.parse(process.argv);