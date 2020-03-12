const fs = require('fs');

const args = process.argv.splice(2);
console.log('node 参数是：', args);
const isCreate = args[0] ? !(args[0] === 'noCreate') : true;

// 准备文件模版
const searchFormText = fs.readFileSync('bin/template/searchForm.txt').toString();
const createFormText = fs.readFileSync('bin/template/createForm.txt').toString();
let indexText = fs.readFileSync('bin/template/index.txt').toString();
let storeText = fs.readFileSync('bin/template/store.txt').toString();

if (!isCreate) {
  indexText = fs.readFileSync('bin/template/noCreateIndex.txt').toString();
  storeText = fs.readFileSync('bin/template/noCreateStore.txt').toString();
}

/**
 *
 * @param {创建文件的所在管理模块名}} OneLevel
 * @param {具体业务模块名} ModName
 */
function tempTxt(OneLevel, ModName) {
  const store_T = storeText.replace(/\$ModName\$/g, ModName).replace(/\$OneLevel\$/g, OneLevel);
  const search_T = searchFormText.replace(/\$ModName\$/g, ModName);
  const index_T = indexText.replace(/\$ModName\$/g, ModName);

  const viewPath = `/src/views/${OneLevel}/${ModName}`;
  const storePath = `/src/store/${OneLevel}`;

  const filesArr = [
    { path: storePath, f_name: `${ModName}.js`, txt_tmp: store_T },
    { path: viewPath, f_name: 'searchForm.vue', txt_tmp: search_T },
    { path: viewPath, f_name: 'index.vue', txt_tmp: index_T }
  ];

  if (isCreate) {
    const creare_T = createFormText.replace(/\$ModName\$/g, ModName);
    filesArr.push({ path: viewPath, f_name: 'createForm.vue', txt_tmp: creare_T });
  }

  return filesArr;
}

module.exports = tempTxt;
