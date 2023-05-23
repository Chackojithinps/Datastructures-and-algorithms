
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
// var sum=0;

// var p=10;
// var num=1;
// sumOfdays=(p,num)=>{
//     var c=7;
//     for(var i=num;i<p;i++){
//         if(i>c){
//           var j=;
//           var diff=p-c;
//           while(j<=diff){
//             sum=sum+
//           }
//         }
//         sum=sum+i;
//     }
// }
// sumOfdays(p,num)
// console.log(sum)


// 1716

// String reversing----------------------------------------------------------

// --------------------------------------------
// var str="Hello jithin"
// console.log(str)
// var k=str.split(" ")
// console.log(k)
// k.reverse()
// console.log(k)
// var l=k.join(" ");
// console.log(l)
// ----------------------------------------------
// var str="HEllo jithin"
// var k=str.split(" ")
// // console.log(k)
// for(var i=0;i<k.length;i++){
//    k[i]= k[i].split("").reverse().join("")
// }
// console.log(k)
// const l=k.join(" ")
// console.log(l)
// "olleh nihtij " 
// ------------------------------------------------
// var str = "Hello jithin";
// console.log(str);

// var reversedStr = "";
// for (var i = str.length - 1; i >= 0; i--) {
//   reversedStr += str[i];
// }

// console.log(reversedStr);

// ------------------------------------------------------------------------------


//unique number----------------------->

// const arr=[4,5,2,5,6,3,2,3,8,9];
// for(var i=0;i<arr.length;i++){
//     var flag=0;
//     if(arr[i]!=0){
//         for(var j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 var flag=1;
//                 arr[j]=0;
//             }
//         }
//     }
//     if(flag==0){
//         if(arr[i]!=0){
//             console.log(arr[i])

//         }
//     }
    
// }


// find first repeated element in an array


// const arr=[4,5,2,5,6,3,2,3,8,9];
// var flag=0; var num=0;
// for(var i=0;i<arr.length;i++){
    
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             var flag=1;
//             break;
//         }
//     }
//     if(flag==1){
//         num=arr[i]
//        break;
//     }
// }
// if(flag==1){
//     console.log(num)
// }


// second repeated element-------------------------------

// const arr=[4,5,2,5,6,3,2,3,8,9];
// var flag=0; var num=0; var count=0;
// for(var i=0;i<arr.length;i++){
//     if(arr[j]!=0){
//         for(var j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 var flag=1;
//                 arr[j]=0;;
//             }
//         }
//     }
    
//     if(flag==1){
//        count++
//        if(count==2){
//         num=arr[i]
//         break;

//        }
//     }
// }
// if(flag==1){
//     console.log(num)
// }

// frequencey of each element------------------>

// const arr=[4,5,2,5,6,3,2,3,8,9];
// const arr2=[]
// for(var i=0;i<arr.length;i++){
//     var count=1;
//     if(arr[i]!=0){
//         for(var j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 count++;
//                 arr[j]=0;
//             }
//         }
//         // arr2.push(count)
//         console.log(`${arr[i]} present ${count} times in array`)
        
//     }
   
// }
// console.log(arr2)

// unique number delete------------------------------>

// const arr=[4,5,2,5,6,3,2,3,8,9];
// var n=arr.length
// for(var i=0;i<arr.length;i++){
//     var flag=0;
//     for(var j=0;j<arr.length;j++){
//         if(i!=j && arr[i]==arr[j]){
//             flag=1;
//             break;
//         }
//     }
//     if(flag==0){
//         var k=i;
//         while(k<arr.length && arr[k+1]!=null){
//            arr[i]=arr[i+1];
//            k++;
//         }
//         n--;
//     }
// }
// console.log(arr+" ");














