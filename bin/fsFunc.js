const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const dirname = process.cwd();

/**
 *
 * @param {检查文件路径} fatherPath
 * @param {文件夹名} fileName
 */
function checkDir(fatherPath, fileName, willStop) {
  return new Promise(resolve => {
    fs.stat(path.join(dirname, fatherPath, fileName), err => {
      if (err) {
        // 如果没有就创建
        fs.mkdir(path.join(dirname, fatherPath, fileName), '0777', error => {
          if (error) {
            throw error;
          }
          resolve(!error);
        });
      } else {
        if (willStop) {
          console.log(chalk.red(`创建失败：${fatherPath}/${fileName} 已存在`));
          process.exit();
        } else {
          resolve(!err);
        }
      }
    });
  });
}

/**
 *
 * @param {文件位置} fatherPath
 * @param {文件名} fileName
 * @param {文件内容} text
 */
function writeFile(fatherPath, fileName, text) {
  return new Promise(resolve => {
    fs.writeFile(path.join(dirname, fatherPath, fileName), text, err => {
      console.log(chalk.green(`成功创建 ${fileName}`));
      resolve(!err);
    });
  });
}

function updateStoreMain(fileNames) {
  const old_main = fs.readFileSync(path.join(dirname, '/src/store/main.js')).toString();
  const _old = old_main.split('export default {');
  const _new_import = `import ${fileNames[1]} from './${fileNames[0]}/${fileNames[1]}';\n`;
  const _new_mod_name = `\n  ${fileNames[1]},`;

  const new_main_arr = [_new_import, _old[0], 'export default {', _new_mod_name, _old[1]];
  return writeFile('/src/store', 'main.js', new_main_arr.join(''));
}

module.exports = {
  checkDir,
  writeFile,
  updateStoreMain
};
