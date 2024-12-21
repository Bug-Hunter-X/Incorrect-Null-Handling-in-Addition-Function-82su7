function foo(a, b) {
  if (a === null || b === null) {
    return null; //Correct handling of null values
  }
  return a + b;
}
console.log(foo(null, 5)); //Output: null
console.log(foo(5, null)); //Output: null
console.log(foo(5,5)); //Output: 10
//Alternative solution that throws an error
function foo2(a,b){
  if(a === null || b === null){
    throw new Error('Null values are not allowed');
  }
  return a + b;
}
console.log(foo2(5,5)); //Output: 10
//console.log(foo2(null,5)); //Throws an error