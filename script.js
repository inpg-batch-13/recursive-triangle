function plusstar (x){
  if (x===1){
    return '*'
  }
 else {
    return '*' + plusstar(x-1)
  }
}

function recursiveTriangle(n) {
 
  if (n === 1){
     console.log ('*')
  } else {
    console.log (plusstar(n)) +
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