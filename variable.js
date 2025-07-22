var num=10;
num=30;
console.log("before block scope",num)

{
    var num=20;
    console.log("inside block scope",num)
}
console.log("after block scope",num);

const number=10;
console.log("before block scope",number)
{
    const number =30;
    console.log("inside block scope",number)
}
console.log("after block scope",number)

let num=9999999999999999;
console.log(num);
console.log(typeof num)
console.log(Number.MAX_SAFE_INTEGER)
let num=BigInt("999999999");
console.log(num);
console.log(typeof num);
const user={
    userName : "parth",
    age : 18,
    isLoggedIn: true
}
console.log(user.age);
console.log(user["userName"]);

console.log("true")
console.log(typeof "true");
