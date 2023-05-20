
//1.find a pair of numbers in the array that adds up to the given number. 

// const arr=[]
// arr.push(10,20,30,8,0,5,7)
// const num=27;
// function findNumbers(arr,num){
//     for(var i=0;i<arr.length;i++){
//         var flag=0;
//         for(var j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==num){
//                 var num1=arr[i]
//                 var temp=arr[j]
//                 flag=1;
//             }
//         if(flag==1){
//             return [num1,temp]
//         }
//         }
//     }
// }
// const result=findNumbers(arr,num);
// console.log(`the numbers are ${result[0]} and ${result[1]}`)



// 2.find a code that performs an operation where it moves all occurrences of a specific number   to the end of the array

// const arr=[]
// arr.push(10,6,6,8,0,5,7,7,9,3,6)
// const myArray=(arr,num)=>{
//     var j=arr.length-1;
//     for(var i=0;i<arr.length;i++){
//         if(i>j){
//             break;
//         }
//         if(arr[i]==num){ 
//             while(arr[j]==num){
//                 j=j-1;
                
//             }
//             const temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//             j=j-1;
//         }
    
       
//     }
//     return arr;
// }
// const result=myArray(arr,6);
// for(var i=0;i<result.length;i++){
//     console.log(result[i]+" ");
// }

// 3.find a code that checks if there is a number in the array arr that occurs more than half of the total array length. 

// const arr=[];
// arr.push(55,50,7,70,7,34,55,55);
// var count=0;
// var max=0;

// for(var i=0;i<arr.length;i++){
//    for(var j=i+1;j<arr.length;j++){
//     if(arr[j]!=0){
//         if(arr[i]==arr[j]){
//             arr[j]=0;
//             count++;
//             j--;
//         }
//     }
// }

// if(count>max){
//     max=count;
// }

// }
// if(max>arr.length-1/2){
//     console.log("true")
// }else{
//     console.log("false")
// }
    


