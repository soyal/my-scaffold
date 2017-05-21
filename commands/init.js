'use strict';
/**
 * 命令——初始化
 */
const chalk = require('chalk');
const exec = require('child_process').exec;
const co = require('co');
const prompt = require('co-prompt');
const os = require('os');

module.exports = function(templateName) {
  co(function* () {
    let config = require('../config.json');
    if(!config[templateName]) {
      console.log(chalk.red('找不到该模板'));
      process.exit(0);
    }
    console.log(chalk.green(`开始初始化模板${templateName}`));

    let projectName = yield prompt('项目名称：');
    process.stdin.pause();
    let gitAddr = config[templateName];
    let rmCmd = os.platform() === 'win32' ? 'rd/s/q' : 'rm -rf'; //删除命令

    yield new Promise((resolve) => {
      exec(`git clone ${gitAddr} ${projectName} && cd ${projectName} && ${rmCmd} .git`, resolve);
    })

    console.log(chalk.green('项目初始化完成'));
  }).catch(e => {
    console.error(chalk.red(e));
  });
}