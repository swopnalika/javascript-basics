let person = { " name": "James", "age":49}

let {
  name : x, age : y
} = person;

console.log( x);
console.log( y);

function logNameAndAge( name , age){
  console.log ( `My name is ${name} and my age is ${age} years old`)
}
logNameAndAge( person);