//find the specific character in a string

// const str="jithin"
// console.log(str.length)
// findStringItem=(target)=>{
//     for(var i=0;i<str.length;i++){
//         if(str.charAt(i)==target){
//             return true;
//         }
//     }
//     return false;
// }
// const target=findStringItem("k");
// console.log(target)
// -------------------------------------------
//find specific character in a given string within the given index

// const str="jithin"
// console.log(str.length)
// findStringItem=(target,index1,index2)=>{
//     for(var i=index1;i<=index2;i++){
//         if(str.charAt(i)==target){
//             return true;
//         }
//     }
//     return false;
// }
// const target=findStringItem("i",2,4);
// console.log(target)

// -------------------------------------------

//using the js methods.

// const str="jithin"
// const str2=str.split("")
// console.log(str2)
// var target="k"
// var flag=0;
// for(var i=0;i<str.length;i++){
//     if(str[i]==target){
//        flag=1;
//     }
// }
// if(flag==1){
//     console.log("true")
// }else{
//     console.log("false")
// }


// -----------------------------------------------

// var findNumbers = function(nums) {
//     var countNum=0;
//     for(var i=0;i<nums.length;i++){
//         var num=nums[i];
//         var count=0;
//         while(num>0){
//             num = Math.floor(num / 10);
//             count++;
//         }
//         if(count%2==0){
//             countNum++
//         }
//     }
//     return countNum;
// };
