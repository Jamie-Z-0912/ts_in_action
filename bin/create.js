const co = require('co');
const prompt = require('co-prompt');
const fsFunc = require('./fsFunc');
const filesTemp = require('./template');
/**
 * 根据用户输入，创建一个不重复的目录
 * @returns {Promise}
 */
function* getName() {
  // 接收用户输入的参数
  const compName = yield prompt('请输入组件目录名: ');
  const fileNames = compName.split('/');

  return new Promise((resolve, reject) => {
    fsFunc.checkDir('/src/store', fileNames[0]);
    fsFunc.checkDir('/src/views', fileNames[0]).then(existing => {
      fsFunc.checkDir(`/src/views/${fileNames[0]}`, fileNames[1], true).then(exist => {
        resolve(fileNames);
      });
    });
  });
}

function createFile(fileNames) {
  const filesArr = filesTemp(fileNames[0], fileNames[1]);

  return new Promise(resolve => {
    for (let i = 0; i < filesArr.length; i++) {
      const { path, txt_tmp, f_name } = filesArr[i];
      // 写入 pages 文件
      const write = fsFunc.writeFile(path, f_name, txt_tmp);
      if (i === filesArr.length - 1) {
        write.then(() => resolve());
      }
    }
  });
}

const def = () => {
  co(function*() {
    const compName = yield getName();
    yield createFile(compName);
    fsFunc.updateStoreMain(compName).then(() => process.exit());
  });
};
def();
