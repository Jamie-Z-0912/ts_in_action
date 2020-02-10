// 数字枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}
// console.log(Role); //编译后：js的反响映射

// 字符串枚举
enum Message {
  Success = "恭喜你，成功了",
  Fail = "抱歉，失败了"
}

// 异构枚举  容易引起混淆不建议使用
// enum Answer {
//   N,
//   Y = "yes"
// }

// 枚举成员
// Role.Reporter = 2 // 枚举成员只读不可修改
enum Char {
  // const 常量枚举，编译计算
  a,
  b = Char.a,
  c = 1 + 3,
  // computed 程序执行阶段计算
  d = Math.random(),
  e = "123".length
}

// 常量枚举  // 编译阶段移除
const enum Month {
  Jan,
  Feb,
  Mar
}
let mon = [Month.Jan, Month.Feb, Month.Mar];

// 枚举类型
enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
enum G {
  a = "apple",
  b = "banana"
}

let e: E = 3;
let f: F = 3;

let e1: E.a;
let e2: E.b;
let e3: E.a;

let g1: G;
let g2: G.a;

/***** *****/

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
// render({
//   data: [
//     { id: 1, name: "AA", sex: "male" },
//     { id: 2, name: "BB" }
//   ]
// } as Result);

// 可索引接口
// 用任意数字索引 StringArray 得到 string
interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["a", "b"];

interface Names {
  [x: string]: string;
  // y: number;
  [z: number]: string;
}

module.exports = {
  Role,
  Message,
  Char,
  mon
};
