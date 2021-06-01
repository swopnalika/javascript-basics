function makeAdder ( valueToAdd){
   function sum( parameter){
    return valueToAdd + parameter
  }
  return sum;
}
var add5 = makeAdder(5);
console.log( add5(10));