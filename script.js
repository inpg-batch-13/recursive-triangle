function stars(x){
  if (x===1){
    return '*'
  }
 else {
    return '*' + stars(x-1)
  }
}

function recursiveTriangle(n) {
  // your code here
  if (n == 1){
    console.log('*')
  }
  else {
    console.log( stars(n))
    recursiveTriangle (n-1)
  }
}

// test case
recursiveTriangle(5)
// *****
// ****
// ***
// **
// *

recursiveTriangle(3)
// ***
// **
// *