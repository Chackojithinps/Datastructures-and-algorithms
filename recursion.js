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
start=0;
var arr=[1,4,6,8,9,12,14,25,26,28,29,49]
var end=arr.length-1;
var target=49
binarySearch=(start,end)=>{
    var mid=Math.floor((start+end)/2);
    if(target==arr[mid]){
        return mid;
    }
    else if(target<arr[mid]){
        return binarySearch(start,mid-1)
    }else{
        return binarySearch(mid+1,end)
    }
}
const res=binarySearch(start,end)
console.log(`value ${target} found at position ${res}`)

