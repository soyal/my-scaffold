'use strict';

/**
 * sibyl <subcmd> 会自动加载commands文件夹下的subcmd同名文件
 */
const path = require('path');
const fs = require('fs');
const program = require('commander');

 program.version('0.0.1')
    .usage('<subcmd> [option] ...')
    .parse(process.argv);

// 输入了子命令
if (process.argv.length > 2) {
  let filePath = path.join(__dirname, 'commands', process.argv[2] + '.js');

  if (fs.existsSync(filePath)) {
    let cmd = require(filePath);
    cmd.regist();
  } else {
    console.error('无效的命令');
  }
} else {
 

}