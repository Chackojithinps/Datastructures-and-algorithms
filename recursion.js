// addNumber=(data)=>{
//     if(data==5){
//        console.log(data)

//         return;
//     }
//    console.log(data)
//    addNumber(data+1)
// }
// const sum=addNumber(1)


// ----------------------------fibonacci number

// findFib=(num)=>{
//    if(num<2){
//      return num;
//    }
//    return findFib(num-1)+findFib(num-2)
// }
// const res=findFib(6)
// console.log(res)

// -----------------------------------binarysearch
// start=0;
// var arr=[1,4,6,8,9,12,14,25,26,28,29,49]
// var end=arr.length-1;
// var target=49
// binarySearch=(start,end)=>{
//     var mid=Math.floor((start+end)/2);
//     if(target==arr[mid]){
//         return mid;
//     }
//     else if(target<arr[mid]){
//         return binarySearch(start,mid-1)
//     }else{
//         return binarySearch(mid+1,end)
//     }
// }
// const res=binarySearch(start,end)
// console.log(`value ${target} found at position ${res}`)


// factorial of a number-------------------->

// const factorial=(n)=>{
//    if(n<1){
//     return 1;
//    }
//    return n*factorial(n-1)
// }
// const res=factorial(6)
// console.log(res)


// Array using recursion------------------->
// function generateArray(n) {
//     if (n === 1) {
//       return [1];  // Base case: return an array with only 1 when n is 1
//     }
  
//     var arr = generateArray(n - 1);  // Recursively generate the array for n-1
//     arr.push(n);  // Add n to the end of the array
//     return arr;
//   }
  
//   // Example usage

//   var result = generateArray(7);
//   console.log(result);


// find sum using recursion----------------------->

// function sumnumbers (n){
//     if(n===1){
//         return 1
//     }
//     let sum = sumnumbers(n-1)
//      sum = sum+n
//     return sum
// }
// console.log(sumnumbers(3));


// var n=5;
// const findSum=(num)=>{
//    if(num==1){
//     return 1;
//    }
//    var res=findSum(num-1);
//    sum=res+num;
//    return sum;
// }
// var res=findSum(n)
// console.log(res)