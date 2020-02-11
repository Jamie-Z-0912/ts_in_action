// 抽象类只能被继承不能被实例化
abstract class Animal {
  eat() {
    console.log("eat");
  }
  abstract sleep(): void; // 抽象方法不指定方法的具体实现
}
// 抽象类
// 多态，在父类中定义一个抽象方法，在多个子类中对这个方法有不同的实现
/*-----------------------*/
class Dog extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  public name: string;
  color?: string;
  run() {}
  private pri() {} // 私有成员只能类本身调用，不能被实例和子类调用
  protected pro() {} // 不能被实例中调用，能被子类调用
  readonly legs: number = 4;
  static food: string = "bones"; // 不能被实例调用，能被类和子类调用
  sleep() {
    console.log("dog sleep");
  }
}
console.log(Dog.prototype);

// 类成员的属性都是实例属性
// 类成员的方法都是实例方法
let dog1 = new Dog("wang");
// dog1.pri()
// dog1.pro()
console.log(dog1.legs);
// console.log(dog1.food);
console.log(Dog.food);
dog1.eat();

// 继承
class Husky extends Dog {
  constructor(name: string, public color1: string) {
    super(name);
    this.color1 = color1;
    this.pro();
  }
  // color1: string;
}
console.log("HuskyFood:", Husky.food);

class Cat extends Animal {
  sleep() {
    console.log("Cat sleep");
  }
}
let cat1 = new Cat();

let animals: Animal[] = [dog1, cat1];

animals.forEach(i => i.sleep());

module.exports = {
  animals
};
