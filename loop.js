// for (let i=0; i<5; i++)
// {
//    console.log("Hello World"); 
// }
    
// for(let i=2; i<=10; i+=2)
// {
//   console.log(i);
  
// }

// let x=10
// do{
//   console.log("Value of x",x);
//   x++
// }while (x<5)

function printGreeting(name){
  console.log(`hello how are you ${name}`);  
}

printGreeting("Parth")
printGreeting("Ayush")
printGreeting("Sahil")
printGreeting("Siddhesh")


function addNum(num1,num2){
  let n1= Number(num1)
  let n2= Number(num2)
  // console.log(isNaN(num1));
  // console.log(isNaN(num2));
  if(isNaN(n1)|| isNaN(n2)){
    return ("Enter proper number :");
  }
  return n1 + n2;
}
console.log(addNum(10,"20abc"));



    
