// 1. Print only Number than it should be print only integer
const str=["1","3",52, "Subhan"]
console.log(`The Numbers are:`)
for(let  i = 0; i< str.length; i++){
    if(typeof str[i] === "number" || (typeof str[i] ==="string" && Number(str[i]))){
        console.log(str[i])
      }
}


// 2. Split an array into Pairs and if a pair is not full, it will contain the leftover items.
let myArray=[1,2,3,4,5,6,7]
function splitFunc(arr, pair){
    // console.log("array-->, pair", arr, pair)
    const store=[];
    let len=arr.length
    for(let i=0; i<len; i+=pair){
      store.push(arr.slice(i, i+pair))
    }
    return store
}
console.log(splitFunc(myArray,3))



// 3. String is Palindrome or not.
function isPalindrome(name){
  let newName=name;
  let leftIndex=0;
  let rightIndex=newName.length-1;
  while(leftIndex<rightIndex){
    if(newName[leftIndex]!== newName[rightIndex]){
    return false;
    leftIndex++;
    rightIndex--;
    }
  return true;
  }
}
console.log(isPalindrome("Irum"));




// 4. Data types in JS
// a)Undefined    b)Number     c)String    d)Null 
// e)Object       f)Symbol     g)Boolean




// 5. var, let and const keywords
// var can be re-declared with same name and also can be re-assigned. It is function scoped 
// we can declare, assign and console it any place in function.

// let cannt be re-declared with same name but can be re-assigned. It is block scope.

// const cannot be re-declared with same name nor re-assigned. It is block scope.


// 6. Maximum and Minimum Value in Array
let myArr=[1,2,3,4,5,6,7,8,9,10];
let max = myArr[0];
let min = myArr[0];
for(let i = 1; i < myArr.length; i++) {
  if(max < myArr[i]) {
    max = myArr[i];
  }
  if(min > myArr[i]) {
    min = myArr[i];
  }
}
console.log("Max number" + max);
console.log("Min number" + min);




// 7. Print String in UpperCase and LowerCase
var string ="Irum Shahzadi";
console.log(string.toLowerCase());
console.log(string.toUpperCase());



// 8. Keywords for declaring Variables
// Var , Let and Const are used to declare variables.
