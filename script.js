function recursiveTriangle(n) {
  if(n === 1) {
    console.log("*")
  } else {
    console.log('*'.repeat(n));
    return recursiveTriangle(n - 1);
  }
}

console.log(recursiveTriangle(5))
// *****
// ****
// ***
// **
// *

recursiveTriangle(3)
// ***
// **
// *