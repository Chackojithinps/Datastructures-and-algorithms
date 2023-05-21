
// const arr = [2, 4, 6, 8, 9, 14, 35, 56, 78, 98, 99];
// var start = 0;
// var end = arr.length - 1;
// var target = 8;

// while (start <= end) {
//     var mid = start + end/ 2;
//     console.log(mid);

//     if (target < arr[mid]) {
//         end = mid - 1;
//     } else if (target > arr[mid]) {
//         start = mid + 1;
//     } else {
//         console.log(`${target} found at index ${mid}`);
//         break;
//     }
// }

// if (start > end) {

//     console.log("Value not found");
// }





// const arr = [2, 4, 6, 8, 9, 14, 35, 56, 78, 98, 99];
const arr=[50,38,32,29,27,22,20,18,16,17,10,8,3,1]
var start = 0;
var end = arr.length - 1;
var target = 8;

const isAsc=arr[start]<arr[end]

while (start <= end) {
    var mid = Math.floor((start + end)/ 2);
    console.log(mid)
    if(target==arr[mid]){
        console.log(`${target} found at index ${mid}`);
        break;
    }
    if(isAsc){
        if(target < arr[mid]) {
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }else{
        if(target < arr[mid]) {
            start=mid+1;
        }else{
            end=mid-1
        }
    }
} 

if (start > end) {

    console.log("Value not found");
}