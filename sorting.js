// ------------------------------------------------------Bubble sort
// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]
// const arr=[5,7,9,2,1,8]

// const BubbleSort=(arr)=>{
//     var n=arr.length;
//      for(var i=0;i<arr.length;i++){
//         for(var j=1;j<n-i;j++){
//             if(arr[j-1]>arr[j]){
//                 var temp=arr[j];
//                 arr[j]=arr[j-1];
//                 arr[j-1]=temp;
//             }
//         }
//      }
//      return arr
// }

// var res=BubbleSort(arr)
// for(var i=0;i<res.length;i++){
//     console.log(res[i])
// }

// Bubble sort using recursion

// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]
// const arr=[5,7,9,2,1,8]
// var n=arr.length;
// const BubbleSort=(arr,n)=>{
//      if(n==1){
//         return 1;
//      }
//      for(var i=0;i<n;i++){
           
//             if(arr[i]>arr[i+1]){
//                 var temp=arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//             }      
//      }
//      BubbleSort(arr,n-1)
//      return arr
// }

// var res=BubbleSort(arr,n)
// for(var i=0;i<res.length;i++){
//     console.log(res[i])
// }

// Decending bubble sort

// const arr=[16,15,6,4,3];
// const sortBubble=(arr)=>{
//     var n=arr.length;
//    for(var i=0;i<n;i++){
//     var sorted=false;
//      for(var j=0;j<n;j++){
//         if(arr[j]<arr[j+1]){
//             var temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//             var sorted=true;
//         }
//      }
//      if(!sorted){
//         break;
//      }
//    }
//    return arr;
// }
// var res=sortBubble(arr)
// for(var i=0;i<arr.length;i++){
//     console.log(res[i])
// }

// Selection sort-------------------------------------------------------------
// const arr=[5,7,9,2,1,8]

// const SelectionSort=(arr)=>{
//         var n=arr.length;
//          for(var i=0;i<arr.length;i++){
//             var min=i;
//             for(var j=i+1;j<n;j++){
//                 if(arr[min]>arr[j]){
                
//                     var temp=arr[j];
//                     arr[j]=arr[min];
//                     arr[min]=temp;
//                 }
//             }
//          }
//          return arr
//     }
//     var res=SelectionSort(arr)
//     for(var i=0;i<res.length;i++){
//         console.log(res[i])
//     }

// insertion sort----------------------------------------------->
// const arr=[5,7,9,2,1,8]
// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]

// const insertionSort=(arr)=>{
//     var n=arr.length;
//      for(var i=1;i<arr.length;i++){
//         var j=i-1;
//         var key=arr[i];
//         while(j>=0 && arr[j]>key){
//             arr[j+1]=arr[j]
//             j=j-1;
//         }
//         arr[j+1]=key;
//      }
//      return arr
// }
// var res=insertionSort(arr)
// for(var i=0;i<res.length;i++){
//     console.log(res[i])
// }


