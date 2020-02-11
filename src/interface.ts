/*** 接口定义对象，对象类型接口 ***/
import { version } from "webpack";

interface List {
  readonly id: number;
  name: string;
  // [x: string]: any; //任意索引，任意类型值
  age?: number;
}
interface Result {
  data: List[];
}
function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
    // value.id++
  });
}

let result = {
  data: [
    { id: 1, name: "AA", sex: "male" },
    { id: 2, name: "BB", age: 10 }
  ]
};
render(result);

// /**** as 类型断言 ****/
// render({
//   data: [
//     { id: 1, name: "AA", sex: "male" },
//     { id: 2, name: "BB" }
//   ]
// } as Result);

/**** 不确定接口类型个数，可索引类型接口 ****/
// 用任意数字索引 StringArray 得到 string
interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["a", "b"];

interface Names {
  [x: string]: string;
  // y: number; // 不被允许
  [z: number]: string;
}

/**** 接口定义函数， 函数类型接口 ****/

// let add: (x: number, y: number) => number;
// interface Add {
//   (x: number, y: number): number;
// }
// 以上两种等价

// 类型别名
type Add = (x: number, y: number) => number;
let add: Add = (x, y) => {
  return x + y;
};

// 混合函数,定义
interface Lib {
  (): void;
  version: string;
  doSth(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  // lib.version = "1.0";
  // lib.doSth = () => {};
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSth();

let lib2 = getLib();
lib2();
lib2.doSth();
