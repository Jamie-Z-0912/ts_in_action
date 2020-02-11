//  函数的定义 4 种方式
function add1(x: number, y: number) {
  return x + y;
}
// 以下没有具体的函数体
let add2: (x: number, y: number) => number;

type add3 = (x: number, y: number) => number;

interface add4 {
  (x: number, y: number): number;
}

function add6(x: number, y = 0, z: number, q = 10) {
  console.log("y", y);
  console.log("z", z);
  return x + y + z + q;
}
console.log(add6(10, undefined, 20));

function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}
console.log(add7(1, 2, 3, 4, 5));

/** 函数重载 **/
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === "string") {
    return rest.join("");
  }
  if (typeof first === "number") {
    return rest.reduce((pre, cur) => pre + cur);
  }
}
console.log(add8(1, 2, 3));
console.log(add8("a", "b", "c"));

module.exports = {
  add6
};
