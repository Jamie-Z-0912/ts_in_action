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

module.exports = {
  Role,
  Message,
  Char,
  mon
};
