
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

// const str="jithin";
// var arr=str.split("");
// // console.log(arr)
// const lastval=arr.pop()
// // console.log(lastval)
// arr.unshift(lastval);
// // console.log(arr)
// var k=arr.join("")
// console.log(k)

// String check two string are equeal--------------->

// var word1="name";
// var word2="mane";

// var arr1=word1.split("").sort();
// var arr2=word2.split("").sort();
// var arr3=arr1.join("")
// var arr4=arr2.join("")
// console.log(arr1);
// console.log(arr2);

// console.log(arr3);
// console.log(arr4);
// checkSame=(arr1,arr2)=>{
//      if(arr1==arr2){
//         return true
//      }
//      return false
// }
// const res=checkSame(arr3,arr4)
// console.log(res)

//interchange last and first in string

// var str2="jithin";
// var str=str2.split("")
// var f=str.pop();
// var k=str.shift();
// str.unshift(f)
// str.push(k)
// var str3=str.join("")
// console.log(str3)

// Capitalize the first letter in string--------------->

// var str2="jithin"
// var arr=str2.split("");
// var k=arr.shift();
// var m=k.toUpperCase();
// arr.unshift(m);
// var newarr=arr.join("");
// console.log(newarr)

// Print "AABBBCCCC" to 2A3B4C---------------------->

// const str="AABBBCCCCCC"
// var arr=str.split("");
// // var count=0;
// var arr1=[]
// var k=0;
// for(var i=0;i<arr.length;i++){
//     var count=1;
//     if(arr[i]!=0){
//         for(var j=0;j<arr.length;j++){
//             if(arr[i]==arr[j] && i!=j){
//                 arr[j]=0;
//                 count++;
//             }
//         }
    
//     }
//     if(arr[i]!=0){
//         arr1[k]=count+arr[i];
//         k++;
//     }
    
// }
// var k=arr1.join("")
// console.log(k)


//checking palindrome or not.

// var str="ALAYALA";
// var arr=str.split("").reverse().join("");
// if(str==arr){
//     console.log("the string you given is palindrome");
    
// }else{
//     console.log("not a palidrome");
// }

// change abc to cde-------------------------->

// var x="abc";
// var y=""

// for(var i=0;i<x.length;i++){
//    var charcode=x.charCodeAt(i)
//    console.log("charcode:",charcode)

//    var newchar=charcode+2;
//    console.log("newchar:",newchar)
//    var y=y+String.fromCharCode(newchar)
// }
// console.log(y)

// converting unicode to STring--------------------------->

const arr=[97,98,99];

var y="";
for(var i=0;i<arr.length;i++){
    y=y+String.fromCharCode(arr[i]);
}
console.log(y)

























