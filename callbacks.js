function sendBackTheSumToPrint ( num1, num2, callback){
  let sum = num1 +num2;
  callback ( sum);
}

function logTheSum(sum){
  console.log ( `sum is ${sum}`)
}
sendBackTheSumToPrint( 10, 20, logTheSum)



function greet(){
  console.log( 'hello world');
}
function sayName( name){
  console.log( 'hello'+''+name)
}
setTimeout( greet,2000)
sayName ( 'john');


//to call greet first
function greet(name, callback){
  console.log( 'hello world');
  callback( name);
}
function sayName( name){
  console.log( 'hello'+''+name)
}