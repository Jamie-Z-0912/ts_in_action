const en = require("./enum");
require("./function");
require("./class");

let hello: string = "Hello TypeScript!";
document.querySelectorAll("#app")[0].innerHTML = hello;
// Document.prototype.getElementById('app')?.innerText = str;

console.log(en);
