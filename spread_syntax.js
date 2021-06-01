// var stringArray = [ "string1","string2","string3","string4","string5"];

// function stringConcat( str1, str2, str3){
//   console.log(str1+str2+str3)
// }
var stringArray = [ 1,2,3,4,5,6]
function stringConcat ( num1,num2,num3,num4)
{
  console.log(
    num1+num2+num3+num4
  )
}
stringConcat( ...stringArray)