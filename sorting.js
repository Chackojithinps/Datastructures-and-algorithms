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



// function mergeSort(a,lb,ub){

//     if(lb<ub){
//         let mid=Math.floor((lb+ub)/2)
//         mergeSort(a,lb,mid)
//         mergeSort(a,mid+1,ub)
//         merge(a,lb,mid,ub)
//     }
// }

// function merge(a,lb,mid,ub){
    
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]

//     while(i<=mid&&j<=ub){
//         if(a[i]<a[j]){
//             b[k]=a[i]
//             i++
//         }
//         else{
//             b[k]=a[j]
//             j++
//         }
//         k++;
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub)
//     {
//         b[k]=a[j]
//         j++
//         k++
//     }

//     for(let x=lb;x<=ub;x++){
//         a[x]=b[x]
//     }
// }



// const array=[3,6,1,8,4,9,7,2]

// let lb=0
// let ub=array.length-1

// mergeSort(array,lb,ub)
// console.log(array);


function partition(a,l,r){
    let pivot=a[l]
    let i=l+1
    let j=r

    while(i<=j){

        while(a[i]<pivot){
            i++
        }
        while(a[j]>pivot){
            j--
        }

        if(i<=j){
            temp=a[i]
            a[i]=a[j]
            a[j]=temp
            i++
            j--
        }
    }

    temp=a[j]
    a[j]=a[l]
    a[l]=temp
return j
}

function quicksort(a,l,r){
    if(l<r){
        let p=partition(a,l,r)

        quicksort(a,l,p-1)
        quicksort(a,p+1,r)
    }
}

const array=[10,3,27,5,12,19,2,11,200]

let l=0
let r=array.length-1

quicksort(array,l,r)
console.log(array);